#!/usr/bin/env bash
# ClogLog — redeploy script (run on the LXC to pull and rebuild)
# Usage: bash /opt/cloglog/scripts/deploy.sh
set -euo pipefail

APP_DIR="/opt/cloglog"
cd "$APP_DIR"

echo "=== Deploying ClogLog ==="

echo "Pulling latest code..."
git pull

echo "Installing dependencies..."
npm ci --quiet

echo "Generating Prisma client..."
npx prisma generate

echo "Applying schema changes..."
npx prisma db push

echo "Building..."
npm run build

echo "Restarting..."
pm2 restart cloglog

echo ""
echo "=== Deploy complete ==="
pm2 status
