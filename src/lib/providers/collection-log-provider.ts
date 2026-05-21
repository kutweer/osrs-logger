// Placeholder provider structure for future RuneLite plugin sync
// and manual collection log JSON upload

import type {
  CollectionLogProvider,
  CollectionLogData,
  PlayerHiscoreData,
} from "./types";

// ─────────────────────────────────────────────
// OSRS Hiscores provider (public API)
// Docs: https://runescape.wiki/w/Application_programming_interface#Old_School_Hiscores
// ─────────────────────────────────────────────

export class HiscoreProvider implements CollectionLogProvider {
  name = "hiscore";

  private baseUrl = "https://services.runescape.com/m=hiscore_oldschool";

  private accountPath: Record<string, string> = {
    NORMAL: "",
    IRONMAN: "_ironman",
    HARDCORE_IRONMAN: "_hardcore_ironman",
    ULTIMATE_IRONMAN: "_ultimate",
  };

  async fetchPlayer(
    username: string,
    accountType = "NORMAL"
  ): Promise<PlayerHiscoreData | null> {
    try {
      const path = this.accountPath[accountType] ?? "";
      const url = `${this.baseUrl}${path}/index_lite.ws?player=${encodeURIComponent(username)}`;

      const res = await fetch(url, {
        headers: {
          "User-Agent":
            process.env.WIKI_USER_AGENT ?? "ClogLog/1.0",
        },
        next: { revalidate: 0 }, // always fresh on manual sync
      });

      if (!res.ok) return null;

      const text = await res.text();
      return parseHiscores(username, accountType as PlayerHiscoreData["accountType"], text);
    } catch {
      return null;
    }
  }

  // Collection log data is not available via public API yet
  // Placeholder for future RuneLite plugin endpoint or manual upload
  async fetchCollectionLog(_username: string): Promise<CollectionLogData | null> {
    return null;
  }
}

// Parse the CSV response from the OSRS hiscores endpoint
function parseHiscores(
  username: string,
  accountType: PlayerHiscoreData["accountType"],
  csv: string
): PlayerHiscoreData {
  const skillNames = [
    "Overall","Attack","Defence","Strength","Hitpoints","Ranged","Prayer",
    "Magic","Cooking","Woodcutting","Fletching","Fishing","Firemaking",
    "Crafting","Smithing","Mining","Herblore","Agility","Thieving","Slayer",
    "Farming","Runecraft","Hunter","Construction",
  ];
  const bossNames = [
    "Abyssal Sire","Callisto","Cerberus","Chaos Elemental","Chaos Fanatic",
    "Commander Zilyana","Corporeal Beast","Crazy Archaeologist","Dagannoth Prime",
    "Dagannoth Rex","Dagannoth Supreme","Deranged Archaeologist","General Graardor",
    "Giant Mole","Grotesque Guardians","Hespori","Kalphite Queen","King Black Dragon",
    "Kraken","Kree'arra","K'ril Tsutsaroth","Mimic","Nex","Nightmare","Phosani's Nightmare",
    "Obor","Phantom Muspah","Sarachnis","Scorpia","Skotizo","Spindel","Tempoross",
    "The Gauntlet","The Corrupted Gauntlet","Theatre of Blood","Theatre of Blood: Hard Mode",
    "Thermonuclear Smoke Devil","TzKal-Zuk","TzTok-Jad","Venenatis","Vet'ion",
    "Vorkath","Wintertodt","Zalcano","Zulrah",
  ];

  const lines = csv.trim().split("\n");
  const skills: PlayerHiscoreData["skills"] = {};
  const bossKcs: PlayerHiscoreData["bossKcs"] = {};
  const clues: PlayerHiscoreData["clues"] = {};

  let i = 0;
  for (const skill of skillNames) {
    const line = lines[i++];
    if (!line) continue;
    const [rank, level, xp] = line.split(",").map(Number);
    skills[skill.toLowerCase()] = { level: level ?? 0, xp: xp ?? 0, rank: rank ?? -1 };
  }

  // Clue entries appear after skills
  const clueTypes = ["All","Beginner","Easy","Medium","Hard","Elite","Master"];
  for (const clue of clueTypes) {
    const line = lines[i++];
    if (!line) continue;
    const [rank, count] = line.split(",").map(Number);
    clues[clue.toLowerCase()] = { count: count ?? 0, rank: rank ?? -1 };
  }

  // LMS / PvP / Soul Wars / etc.
  i += 4; // skip non-boss activity entries

  for (const boss of bossNames) {
    const line = lines[i++];
    if (!line) continue;
    const [rank, kc] = line.split(",").map(Number);
    bossKcs[boss.toLowerCase()] = { kc: kc ?? 0, rank: rank ?? -1 };
  }

  return { username, accountType, skills, bossKcs, clues };
}

// ─────────────────────────────────────────────
// Manual JSON upload provider (placeholder)
// ─────────────────────────────────────────────

export class ManualUploadProvider implements CollectionLogProvider {
  name = "manual_upload";

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async fetchPlayer(_username: string): Promise<PlayerHiscoreData | null> {
    throw new Error("ManualUploadProvider requires a JSON payload — use importFromJson()");
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async fetchCollectionLog(_username: string): Promise<CollectionLogData | null> {
    throw new Error("ManualUploadProvider requires a JSON payload — use importFromJson()");
  }

  // Future: accept RuneLite CollectionLog plugin export format
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  importFromJson(_json: unknown): CollectionLogData | null {
    return null;
  }
}

// ─────────────────────────────────────────────
// RuneLite plugin provider (placeholder)
// ─────────────────────────────────────────────

export class RuneLitePluginProvider implements CollectionLogProvider {
  name = "runelite_plugin";

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async fetchPlayer(_username: string): Promise<PlayerHiscoreData | null> {
    return null; // Will be push-based from plugin
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async fetchCollectionLog(_username: string): Promise<CollectionLogData | null> {
    return null; // Will be push-based from plugin
  }
}

export const defaultProvider = new HiscoreProvider();
