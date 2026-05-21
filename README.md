# ClogLog — OSRS Collection Log Tracker

> A modern, production-ready Old School RuneScape collection log and goals tracker.

ClogLog combines the clean, data-dense usability of Wise Old Man with OSRS Wiki Browntown-inspired aesthetics to deliver a fast, native-feeling OSRS analytics tool.

---

## Features

- **Collection Log** — Track all 1,477+ log slots across Bosses, Raids, Clues, Minigames, and more
- **Goals Tracker** — Create and track goals for items, boss KCs, skills, categories, and custom milestones
- **Player Profiles** — Public profiles with collection log overview, progress charts, and active goals
- **Ironman Support** — IM, HCIM, UIM, GIM, HCGIM account type indicators
- **Multi-Account** — Claim and manage multiple OSRS accounts under one login
- **Sync System** — OSRS hiscores sync with rate limiting, job tracking, and retry logic
- **OSRS Wiki Integration** — Item metadata from the OSRS Wiki API
- **OSRS Browntown Theme** — Deep brown background, parchment panels, gold accents
- **Responsive** — Mobile-first layout with sidebar navigation on desktop

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| UI Components | Radix UI + shadcn-style |
| ORM | Prisma |
| Database | SQLite (dev/self-hosted) · PostgreSQL (cloud) |
| Auth | NextAuth v5 / Auth.js |
| Validation | Zod |
| Forms | React Hook Form |
| Charts | Recharts |
| Testing | Vitest |
| CI | GitHub Actions |
| Process manager | PM2 |
| Reverse proxy | nginx |

---

## Quick Start (Local Dev)

### Prerequisites

- Node.js ≥ 20
- npm

### 1. Clone & install

```bash
git clone https://github.com/kutweer/osrs-logger.git
cd osrs-logger
npm install
```

### 2. Configure environment

```bash
cp .env.example .env
# Default DATABASE_URL uses SQLite — no database server needed
```

Generate a proper `AUTH_SECRET` for local dev (optional but good practice):

```bash
node -e "require('crypto').randomBytes(32).toString('base64') |> console.log"
```

### 3. Set up the database

```bash
npm run db:generate    # generate Prisma client
npm run db:push        # create SQLite database
npm run db:seed        # seed demo data
```

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Demo credentials:** `demo@cloglog.app` / `password123`  
**Demo player:** [/players/Omhoog](/players/Omhoog)

---

## Proxmox LXC Deployment (Self-hosted)

### 1. Create an LXC in Proxmox

In your Proxmox web UI (`https://10.2.20.170:8006`):

1. **Create CT** → use the **Ubuntu 24.04** template
2. Recommended specs: **2 vCPU · 1 GB RAM · 8 GB disk** (increase if traffic grows)
3. Enable **Start at boot**
4. Note the LXC's IP address (e.g. `10.2.20.X`)

### 2. Run the setup script

SSH into the LXC as root and run:

```bash
curl -fsSL https://raw.githubusercontent.com/kutweer/osrs-logger/main/scripts/setup-lxc.sh | bash -s -- http://10.2.20.X
```

Or clone and run locally inside the LXC:

```bash
git clone https://github.com/kutweer/osrs-logger.git /opt/cloglog
bash /opt/cloglog/scripts/setup-lxc.sh http://10.2.20.X
```

The script will:
- Install Node.js 20, nginx, PM2
- Clone the repo to `/opt/cloglog`
- Create a persistent SQLite database at `/opt/cloglog/data/cloglog.db`
- Generate a random `AUTH_SECRET`
- Build the app and start it with PM2
- Configure nginx as a reverse proxy on port 80
- Seed demo data

### 3. Enable PM2 on boot

The script will print a `pm2 startup` command at the end. Copy and run it. It looks like:

```bash
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u root --hp /root
```

### 4. Access the app

Open `http://10.2.20.X` in your browser.

**Demo credentials:** `demo@cloglog.app` / `password123`

### Updating (after `git push`)

SSH into the LXC and run:

```bash
bash /opt/cloglog/scripts/deploy.sh
```

This pulls the latest code, rebuilds, and restarts the process.

### Useful commands on the LXC

```bash
pm2 status                     # process status
pm2 logs cloglog               # live logs
pm2 restart cloglog            # restart app
systemctl status nginx         # nginx status
npx prisma studio --port 5555  # database browser (from /opt/cloglog)
```

---

## Project Structure

```
osrs-logger/
├── .github/
│   └── workflows/ci.yml        # GitHub Actions CI (SQLite)
├── prisma/
│   ├── schema.prisma            # Database schema (SQLite / PostgreSQL)
│   └── seed.ts                  # Seed script
├── scripts/
│   ├── setup-lxc.sh            # Proxmox LXC initial setup
│   ├── deploy.sh               # Redeploy script (git pull + rebuild)
│   └── nginx-cloglog.conf      # nginx reverse proxy config
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── (auth)/              # Auth pages (login, register)
│   │   ├── (public)/            # Public pages (players, items, leaderboards)
│   │   ├── dashboard/           # Authenticated dashboard
│   │   ├── admin/               # Admin pages
│   │   └── api/                 # API routes
│   ├── components/
│   │   ├── ui/                  # Base UI components (shadcn-style)
│   │   └── ...                  # Feature components
│   ├── data/
│   │   ├── osrs-categories.ts   # OSRS category definitions
│   │   └── demo-player.ts       # Demo player data (Omhoog)
│   ├── lib/
│   │   ├── auth.ts              # NextAuth configuration
│   │   ├── db.ts                # Prisma client singleton
│   │   ├── rate-limit.ts        # Rate limiting
│   │   └── providers/           # Data provider abstractions
│   └── types/index.ts           # TypeScript types
├── ecosystem.config.js          # PM2 process config
├── .env.example                 # Environment variable template
└── README.md
```

---

## API Reference

All endpoints return `{ success: boolean, data: T }`.

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | `/api/players/search?username=` | No | Search players |
| GET | `/api/players/:username` | No | Get player profile |
| POST | `/api/players/:username/sync` | No | Trigger sync |
| GET | `/api/players/:username/collection-log` | No | Full collection log |
| GET | `/api/items` | No | Item database |
| GET | `/api/items/:id` | No | Single item |
| GET | `/api/categories` | No | All categories |
| GET | `/api/goals` | Yes | User's goals |
| POST | `/api/goals` | Yes | Create goal |
| PATCH | `/api/goals/:id` | Yes | Update goal |
| DELETE | `/api/goals/:id` | Yes | Delete goal |
| POST | `/api/admin/refresh-item-metadata` | Admin | Refresh item data |

Rate limits: 30 req/min (search/profile), 1 sync/5 min per player.

---

## Data Sources

| Source | Usage |
|--------|-------|
| [OSRS Wiki API](https://runescape.wiki/w/Application_programming_interface) | Item metadata, examine text |
| [OSRS Hiscores API](https://secure.runescape.com/m=hiscore_oldschool/overall) | Skills, boss KC, clue counts |
| [OSRS Wiki Prices](https://prices.runescape.wiki/api/v1/latest) | Grand Exchange prices |
| User-provided data | Collection log state (manual upload or future RuneLite plugin) |

ClogLog respects all API terms of use and includes a `User-Agent` header on all wiki requests.

---

## Development

```bash
npm run dev          # Start dev server
npm run lint         # ESLint
npm run typecheck    # TypeScript check
npm run test         # Vitest tests
npm run db:studio    # Prisma Studio (DB browser)
```

---

## Roadmap

- [ ] RuneLite plugin sync endpoint
- [ ] Full collection log from plugin data
- [ ] Leaderboards (full database)
- [ ] Clan/group tracking
- [ ] Discord bot integration
- [ ] Combat Achievement tracking
- [ ] Public API with API keys
- [ ] Progress history charts

---

## Legal

ClogLog is not affiliated with, endorsed by, or in any way officially connected with Jagex Ltd. "Old School RuneScape" and "OSRS" are trademarks of Jagex Ltd.

Item icons and game data are used under fair use for informational, non-commercial purposes. OSRS Wiki content is licensed under [CC BY-NC-SA 3.0](https://creativecommons.org/licenses/by-nc-sa/3.0/).
