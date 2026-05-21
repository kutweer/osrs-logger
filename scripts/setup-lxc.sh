#!/usr/bin/env bash
# ClogLog — Proxmox LXC initial setup
# Run once on a fresh Ubuntu 24.04 LXC as root.
# Usage: bash setup-lxc.sh [<server-ip-or-domain>]
set -euo pipefail

REPO_URL="https://github.com/kutweer/osrs-logger.git"
APP_DIR="/opt/cloglog"
DATA_DIR="$APP_DIR/data"
LOG_DIR="/var/log/cloglog"
SERVER_URL="${1:-http://$(hostname -I | awk '{print $1}' | tr -d ' ')}"

echo "================================================"
echo "  ClogLog LXC Setup"
echo "  Repo:   $REPO_URL"
echo "  App:    $APP_DIR"
echo "  Access: $SERVER_URL"
echo "================================================"
echo ""

# ── 1. System ────────────────────────────────────
echo "[1/9] Updating system packages..."
apt-get update -qq
apt-get upgrade -y -qq
apt-get install -y -qq curl git nginx

# ── 2. Node.js 20 LTS ────────────────────────────
echo "[2/9] Installing Node.js 20..."
curl -fsSL https://deb.nodesource.com/setup_20.x | bash - >/dev/null
apt-get install -y -qq nodejs
echo "  node $(node -v)  npm $(npm -v)"

# ── 3. PM2 ───────────────────────────────────────
echo "[3/9] Installing PM2..."
npm install -g pm2 --quiet

# ── 4. Clone / pull repo ─────────────────────────
echo "[4/9] Cloning repository..."
if [ -d "$APP_DIR/.git" ]; then
  echo "  Already cloned — pulling latest."
  git -C "$APP_DIR" pull
else
  git clone "$REPO_URL" "$APP_DIR"
fi

# ── 5. Directories ───────────────────────────────
echo "[5/9] Creating data and log directories..."
mkdir -p "$DATA_DIR" "$LOG_DIR"

# ── 6. Production .env ───────────────────────────
echo "[6/9] Writing .env..."
ENV_FILE="$APP_DIR/.env"
if [ ! -f "$ENV_FILE" ]; then
  AUTH_SECRET=$(node -e "process.stdout.write(require('crypto').randomBytes(32).toString('base64'))")
  cat > "$ENV_FILE" <<EOF
DATABASE_URL="file:$DATA_DIR/cloglog.db"
AUTH_SECRET="$AUTH_SECRET"
NEXT_PUBLIC_APP_URL="$SERVER_URL"
NEXT_PUBLIC_APP_NAME="ClogLog"
NODE_ENV="production"
WIKI_USER_AGENT="ClogLog/1.0 (https://github.com/kutweer/osrs-logger; contact@example.com)"
EOF
  echo "  .env created with a fresh AUTH_SECRET."
else
  echo "  .env already exists — skipping (no overwrite)."
fi

# ── 7. Install, migrate, build ───────────────────
echo "[7/9] Installing npm dependencies..."
cd "$APP_DIR"
npm ci --quiet

echo "  Generating Prisma client..."
npx prisma generate

echo "  Pushing schema to SQLite database..."
npx prisma db push

echo "  Seeding demo data (Omhoog / demo@cloglog.app)..."
npx tsx prisma/seed.ts

echo "  Building Next.js production bundle..."
npm run build

# ── 8. PM2 ───────────────────────────────────────
echo "[8/9] Starting app with PM2..."
pm2 start "$APP_DIR/ecosystem.config.js"
pm2 save

echo ""
echo "  Run the following command to enable PM2 on boot:"
pm2 startup | grep "sudo env"
echo ""

# ── 9. nginx ─────────────────────────────────────
echo "[9/9] Configuring nginx..."
cp "$APP_DIR/scripts/nginx-cloglog.conf" /etc/nginx/sites-available/cloglog
ln -sf /etc/nginx/sites-available/cloglog /etc/nginx/sites-enabled/cloglog
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl enable nginx
systemctl reload nginx

echo ""
echo "================================================"
echo "  Setup complete!"
echo ""
echo "  App:   $SERVER_URL"
echo "  Login: demo@cloglog.app / password123"
echo "  Logs:  pm2 logs cloglog"
echo "         tail -f /var/log/cloglog/err.log"
echo "================================================"
