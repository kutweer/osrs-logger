// OSRS Hiscores parser
// CSV format: rank,level,xp (skills) / rank,score (activities)
// Returns -1 for rank/level/score when player is unranked

export const SKILL_NAMES = [
  "Overall", "Attack", "Defence", "Strength", "Hitpoints",
  "Ranged", "Prayer", "Magic", "Cooking", "Woodcutting",
  "Fletching", "Fishing", "Firemaking", "Crafting", "Smithing",
  "Mining", "Herblore", "Agility", "Thieving", "Slayer",
  "Farming", "Runecraft", "Hunter", "Construction",
] as const;

export const ACTIVITY_NAMES = [
  "League Points", "Deadman Points", "Bounty Hunter - Hunter",
  "Bounty Hunter - Rogue", "Clue Scrolls (All)", "Clue Scrolls (Beginner)",
  "Clue Scrolls (Easy)", "Clue Scrolls (Medium)", "Clue Scrolls (Hard)",
  "Clue Scrolls (Elite)", "Clue Scrolls (Master)", "LMS - Rank",
  "PvP Arena - Rank", "Soul Wars Zeal", "Rifts Closed",
  "Abyssal Sire", "Alchemical Hydra", "Artio", "Barrows Chests",
  "Bryophyta", "Callisto", "Cal'varion", "Cerberus",
  "Chambers of Xeric", "Chambers of Xeric: Challenge Mode",
  "Chaos Elemental", "Chaos Fanatic", "Commander Zilyana",
  "Corporeal Beast", "Crazy Archaeologist", "Dagannoth Prime",
  "Dagannoth Rex", "Dagannoth Supreme", "Deranged Archaeologist",
  "Duke Sucellus", "General Graardor", "Giant Mole",
  "Grotesque Guardians", "Hespori", "Kalphite Queen",
  "King Black Dragon", "Kraken", "Kree'arra", "K'ril Tsutsaroth",
  "Lunar Chests", "Mimic", "Nex", "Nightmare", "Phosani's Nightmare",
  "Obor", "Phantom Muspah", "Sarachnis", "Scorpia", "Skotizo",
  "Spindel", "Tempoross", "The Gauntlet", "The Corrupted Gauntlet",
  "The Leviathan", "The Whisperer", "Theatre of Blood",
  "Theatre of Blood: Hard Mode", "Thermonuclear Smoke Devil",
  "Tombs of Amascut", "Tombs of Amascut: Expert Mode",
  "TzKal-Zuk", "TzTok-Jad", "Vardorvis", "Venenatis", "Vet'ion",
  "Vorkath", "Wintertodt", "Zalcano", "Zulrah",
] as const;

// Rows within ACTIVITY_NAMES that are clue scroll types
export const CLUE_ACTIVITY_INDICES = [4, 5, 6, 7, 8, 9, 10];

// Rows within ACTIVITY_NAMES that are boss KCs (everything from Abyssal Sire onward)
export const BOSS_ACTIVITY_START = 15;

export interface SkillStat {
  name: string;
  rank: number;
  level: number;
  xp: number;
}

export interface ActivityStat {
  name: string;
  rank: number;
  score: number;
}

export interface HiscoresData {
  skills: SkillStat[];
  activities: ActivityStat[];
  clues: ActivityStat[];
  bosses: ActivityStat[];
}

export function parseHiscoresCsv(csv: string): HiscoresData {
  const lines = csv.trim().split("\n").filter(Boolean);

  const skills: SkillStat[] = [];
  const activities: ActivityStat[] = [];

  lines.forEach((line, i) => {
    const parts = line.trim().split(",").map((v) => parseInt(v.trim(), 10));

    if (i < SKILL_NAMES.length) {
      skills.push({
        name:  SKILL_NAMES[i],
        rank:  parts[0] ?? -1,
        level: parts[1] ?? -1,
        xp:    parts[2] ?? -1,
      });
    } else {
      const actIdx = i - SKILL_NAMES.length;
      if (actIdx < ACTIVITY_NAMES.length) {
        activities.push({
          name:  ACTIVITY_NAMES[actIdx],
          rank:  parts[0] ?? -1,
          score: parts[1] ?? -1,
        });
      }
    }
  });

  const clues  = CLUE_ACTIVITY_INDICES.map((idx) => activities[idx]).filter(Boolean);
  const bosses = activities
    .slice(BOSS_ACTIVITY_START)
    .filter((a) => a && a.score > 0);

  return { skills, activities, clues, bosses };
}

// ─── OSRS Hiscore endpoint map ──────────────────────────────────────────────

const HISCORE_ENDPOINTS: Record<string, string> = {
  normal:   "https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws",
  ironman:  "https://secure.runescape.com/m=hiscore_oldschool_ironman/index_lite.ws",
  hardcore: "https://secure.runescape.com/m=hiscore_oldschool_hardcore_ironman/index_lite.ws",
  ultimate: "https://secure.runescape.com/m=hiscore_oldschool_ultimate/index_lite.ws",
  seasonal: "https://secure.runescape.com/m=hiscore_oldschool_seasonal/index_lite.ws",
};

/**
 * Fetch hiscores directly from the OSRS API (server-side only).
 * Returns null if the player is not found or the API is unavailable.
 */
export async function fetchHiscores(
  username: string,
  mode: string = "normal"
): Promise<HiscoresData | null> {
  const base = HISCORE_ENDPOINTS[mode] ?? HISCORE_ENDPOINTS.normal;
  const url  = `${base}?player=${encodeURIComponent(username)}`;

  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "ClogLog/1.0 (+https://cloglog.app)",
      },
      next: { revalidate: 60 }, // cache 1 minute
    });

    if (!res.ok) return null;

    const csv = await res.text();
    // Jagex returns "NO PROFILE" text (or similar) when player not found
    if (!csv.includes(",")) return null;

    return parseHiscoresCsv(csv);
  } catch {
    return null;
  }
}
