// OSRS Collection Log category structure
// Based on the in-game collection log organization

export interface OsrsCategory {
  slug: string;
  name: string;
  parent?: string;
  sortOrder: number;
  iconItemId?: number;
  description?: string;
}

export interface OsrsItemDef {
  itemId: number;
  name: string;
  slug: string;
  category: string;
  sortOrder: number;
  dropSource?: string;
  dropRarity?: string;
  dropRarityNum?: number;
  wikiUrl?: string;
}

export const OSRS_CATEGORIES: OsrsCategory[] = [
  // Top-level
  { slug: "bosses", name: "Bosses", sortOrder: 0, iconItemId: 11832 },
  { slug: "raids", name: "Raids", sortOrder: 1, iconItemId: 21043 },
  { slug: "clues", name: "Clue Scrolls", sortOrder: 2, iconItemId: 2714 },
  { slug: "minigames", name: "Minigames", sortOrder: 3, iconItemId: 19991 },
  { slug: "other", name: "Other", sortOrder: 4, iconItemId: 20730 },

  // Boss sub-categories
  { slug: "abyssal-sire", name: "Abyssal Sire", parent: "bosses", sortOrder: 0, iconItemId: 13263 },
  { slug: "callisto", name: "Callisto", parent: "bosses", sortOrder: 1, iconItemId: 13181 },
  { slug: "cerberus", name: "Cerberus", parent: "bosses", sortOrder: 2, iconItemId: 13247 },
  { slug: "chaos-elemental", name: "Chaos Elemental", parent: "bosses", sortOrder: 3, iconItemId: 2399 },
  { slug: "chaos-fanatic", name: "Chaos Fanatic", parent: "bosses", sortOrder: 4, iconItemId: 11995 },
  { slug: "commander-zilyana", name: "Commander Zilyana", parent: "bosses", sortOrder: 5, iconItemId: 11806 },
  { slug: "corporeal-beast", name: "Corporeal Beast", parent: "bosses", sortOrder: 6, iconItemId: 12817 },
  { slug: "dagannoth-kings", name: "Dagannoth Kings", parent: "bosses", sortOrder: 7, iconItemId: 6738 },
  { slug: "deranged-archaeologist", name: "Deranged Archaeologist", parent: "bosses", sortOrder: 8, iconItemId: 12009 },
  { slug: "general-graardor", name: "General Graardor", parent: "bosses", sortOrder: 9, iconItemId: 11816 },
  { slug: "giant-mole", name: "Giant Mole", parent: "bosses", sortOrder: 10, iconItemId: 7449 },
  { slug: "grotesque-guardians", name: "Grotesque Guardians", parent: "bosses", sortOrder: 11, iconItemId: 22245 },
  { slug: "kalphite-queen", name: "Kalphite Queen", parent: "bosses", sortOrder: 12, iconItemId: 11942 },
  { slug: "king-black-dragon", name: "King Black Dragon", parent: "bosses", sortOrder: 13, iconItemId: 1704 },
  { slug: "kraken", name: "Kraken", parent: "bosses", sortOrder: 14, iconItemId: 12004 },
  { slug: "kreearra", name: "Kree'arra", parent: "bosses", sortOrder: 15, iconItemId: 11826 },
  { slug: "kril-tsutsaroth", name: "K'ril Tsutsaroth", parent: "bosses", sortOrder: 16, iconItemId: 11836 },
  { slug: "nex", name: "Nex", parent: "bosses", sortOrder: 17, iconItemId: 26374 },
  { slug: "nightmare", name: "The Nightmare", parent: "bosses", sortOrder: 18, iconItemId: 24495 },
  { slug: "phantom-muspah", name: "Phantom Muspah", parent: "bosses", sortOrder: 19, iconItemId: 27371 },
  { slug: "sarachnis", name: "Sarachnis", parent: "bosses", sortOrder: 20, iconItemId: 23528 },
  { slug: "skotizo", name: "Skotizo", parent: "bosses", sortOrder: 21, iconItemId: 19685 },
  { slug: "tempoross", name: "Tempoross", parent: "bosses", sortOrder: 22, iconItemId: 25574 },
  { slug: "thermonuclear-smoke-devil", name: "Thermonuclear Smoke Devil", parent: "bosses", sortOrder: 23, iconItemId: 11998 },
  { slug: "tzkal-zuk", name: "TzKal-Zuk", parent: "bosses", sortOrder: 24, iconItemId: 21295 },
  { slug: "tztok-jad", name: "TzTok-Jad", parent: "bosses", sortOrder: 25, iconItemId: 11832 },
  { slug: "venenatis", name: "Venenatis", parent: "bosses", sortOrder: 26, iconItemId: 13179 },
  { slug: "vetion", name: "Vet'ion", parent: "bosses", sortOrder: 27, iconItemId: 13181 },
  { slug: "vorkath", name: "Vorkath", parent: "bosses", sortOrder: 28, iconItemId: 22115 },
  { slug: "wintertodt", name: "Wintertodt", parent: "bosses", sortOrder: 29, iconItemId: 20733 },
  { slug: "zalcano", name: "Zalcano", parent: "bosses", sortOrder: 30, iconItemId: 23906 },
  { slug: "zulrah", name: "Zulrah", parent: "bosses", sortOrder: 31, iconItemId: 12921 },

  // Raids
  { slug: "chambers-of-xeric", name: "Chambers of Xeric", parent: "raids", sortOrder: 0, iconItemId: 21043 },
  { slug: "theatre-of-blood", name: "Theatre of Blood", parent: "raids", sortOrder: 1, iconItemId: 22486 },
  { slug: "tombs-of-amascut", name: "Tombs of Amascut", parent: "raids", sortOrder: 2, iconItemId: 27277 },

  // Clues
  { slug: "clue-beginner", name: "Beginner", parent: "clues", sortOrder: 0, iconItemId: 23182 },
  { slug: "clue-easy", name: "Easy", parent: "clues", sortOrder: 1, iconItemId: 2714 },
  { slug: "clue-medium", name: "Medium", parent: "clues", sortOrder: 2, iconItemId: 2801 },
  { slug: "clue-hard", name: "Hard", parent: "clues", sortOrder: 3, iconItemId: 2722 },
  { slug: "clue-elite", name: "Elite", parent: "clues", sortOrder: 4, iconItemId: 12073 },
  { slug: "clue-master", name: "Master", parent: "clues", sortOrder: 5, iconItemId: 19835 },

  // Minigames
  { slug: "barbarian-assault", name: "Barbarian Assault", parent: "minigames", sortOrder: 0, iconItemId: 10564 },
  { slug: "castle-wars", name: "Castle Wars", parent: "minigames", sortOrder: 1, iconItemId: 4067 },
  { slug: "champions-challenge", name: "Champions' Challenge", parent: "minigames", sortOrder: 2, iconItemId: 6816 },
  { slug: "fishing-trawler", name: "Fishing Trawler", parent: "minigames", sortOrder: 3, iconItemId: 579 },
  { slug: "gauntlet", name: "The Gauntlet", parent: "minigames", sortOrder: 4, iconItemId: 23855 },
  { slug: "gnome-restaurant", name: "Gnome Restaurant", parent: "minigames", sortOrder: 5, iconItemId: 2150 },
  { slug: "last-man-standing", name: "Last Man Standing", parent: "minigames", sortOrder: 6, iconItemId: 24174 },
  { slug: "magic-training-arena", name: "Magic Training Arena", parent: "minigames", sortOrder: 7, iconItemId: 4674 },
  { slug: "mahogany-homes", name: "Mahogany Homes", parent: "minigames", sortOrder: 8, iconItemId: 24884 },
  { slug: "pest-control", name: "Pest Control", parent: "minigames", sortOrder: 9, iconItemId: 13280 },
  { slug: "rogues-den", name: "Rogues' Den", parent: "minigames", sortOrder: 10, iconItemId: 8950 },
  { slug: "shades-of-mortton", name: "Shades of Mort'ton", parent: "minigames", sortOrder: 11, iconItemId: 25665 },
  { slug: "shooting-stars", name: "Shooting Stars", parent: "minigames", sortOrder: 12, iconItemId: 25539 },
  { slug: "soul-wars", name: "Soul Wars", parent: "minigames", sortOrder: 13, iconItemId: 25178 },
  { slug: "trouble-brewing", name: "Trouble Brewing", parent: "minigames", sortOrder: 14, iconItemId: 6771 },
  { slug: "volcanic-mine", name: "Volcanic Mine", parent: "minigames", sortOrder: 15, iconItemId: 22369 },

  // Other
  { slug: "aerial-fishing", name: "Aerial Fishing", parent: "other", sortOrder: 0, iconItemId: 22817 },
  { slug: "camdozaal", name: "Camdozaal", parent: "other", sortOrder: 1, iconItemId: 26382 },
  { slug: "fossil-island-notes", name: "Fossil Island", parent: "other", sortOrder: 2, iconItemId: 20724 },
  { slug: "gotr", name: "Guardians of the Rift", parent: "other", sortOrder: 3, iconItemId: 26908 },
  { slug: "miscellaneous", name: "Miscellaneous", parent: "other", sortOrder: 4, iconItemId: 20730 },
  { slug: "pets", name: "Pets", parent: "other", sortOrder: 5, iconItemId: 12921 },
  { slug: "skilling", name: "Skilling", parent: "other", sortOrder: 6, iconItemId: 11065 },
];

// Subset of items for demo/seed purposes
export const DEMO_ITEMS: OsrsItemDef[] = [
  // Zulrah
  { itemId: 12921, name: "Tanzanite fang", slug: "tanzanite-fang", category: "zulrah", sortOrder: 0, dropSource: "Zulrah", dropRarity: "1/512", dropRarityNum: 1/512 },
  { itemId: 12922, name: "Magic fang", slug: "magic-fang", category: "zulrah", sortOrder: 1, dropSource: "Zulrah", dropRarity: "1/512", dropRarityNum: 1/512 },
  { itemId: 12923, name: "Serpentine visage", slug: "serpentine-visage", category: "zulrah", sortOrder: 2, dropSource: "Zulrah", dropRarity: "1/512", dropRarityNum: 1/512 },
  { itemId: 12924, name: "Tanzanite mutagen", slug: "tanzanite-mutagen", category: "zulrah", sortOrder: 3, dropSource: "Zulrah", dropRarity: "1/13106", dropRarityNum: 1/13106 },
  { itemId: 12925, name: "Magma mutagen", slug: "magma-mutagen", category: "zulrah", sortOrder: 4, dropSource: "Zulrah", dropRarity: "1/13106", dropRarityNum: 1/13106 },
  { itemId: 12927, name: "Zul-andra teleport", slug: "zul-andra-teleport", category: "zulrah", sortOrder: 5, dropSource: "Zulrah", dropRarity: "Common" },
  { itemId: 12931, name: "Uncut onyx", slug: "uncut-onyx", category: "zulrah", sortOrder: 6, dropSource: "Zulrah", dropRarity: "1/128", dropRarityNum: 1/128 },
  { itemId: 12929, name: "Onyx bolts (e)", slug: "onyx-bolts-e", category: "zulrah", sortOrder: 7, dropSource: "Zulrah", dropRarity: "Common" },

  // Vorkath
  { itemId: 22115, name: "Dragonbone necklace", slug: "dragonbone-necklace", category: "vorkath", sortOrder: 0, dropSource: "Vorkath", dropRarity: "1/1000", dropRarityNum: 1/1000 },
  { itemId: 22109, name: "Skeletal visage", slug: "skeletal-visage", category: "vorkath", sortOrder: 1, dropSource: "Vorkath", dropRarity: "1/5000", dropRarityNum: 1/5000 },
  { itemId: 22111, name: "Vorkath's head", slug: "vorkaths-head", category: "vorkath", sortOrder: 2, dropSource: "Vorkath", dropRarity: "1/50 (50 kc)", dropRarityNum: 1/50 },
  { itemId: 21807, name: "Draconic visage", slug: "draconic-visage", category: "vorkath", sortOrder: 3, dropSource: "Vorkath", dropRarity: "1/5000", dropRarityNum: 1/5000 },

  // CoX
  { itemId: 21043, name: "Twisted bow", slug: "twisted-bow", category: "chambers-of-xeric", sortOrder: 0, dropSource: "Chambers of Xeric", dropRarity: "Rare" },
  { itemId: 21003, name: "Elder maul", slug: "elder-maul", category: "chambers-of-xeric", sortOrder: 1, dropSource: "Chambers of Xeric", dropRarity: "Rare" },
  { itemId: 21034, name: "Kodai insignia", slug: "kodai-insignia", category: "chambers-of-xeric", sortOrder: 2, dropSource: "Chambers of Xeric", dropRarity: "Rare" },
  { itemId: 21028, name: "Dragon claws", slug: "dragon-claws", category: "chambers-of-xeric", sortOrder: 3, dropSource: "Chambers of Xeric", dropRarity: "Rare" },
  { itemId: 21012, name: "Ancestral hat", slug: "ancestral-hat", category: "chambers-of-xeric", sortOrder: 4, dropSource: "Chambers of Xeric", dropRarity: "Rare" },
  { itemId: 21015, name: "Ancestral robe top", slug: "ancestral-robe-top", category: "chambers-of-xeric", sortOrder: 5, dropSource: "Chambers of Xeric", dropRarity: "Rare" },
  { itemId: 21018, name: "Ancestral robe bottom", slug: "ancestral-robe-bottom", category: "chambers-of-xeric", sortOrder: 6, dropSource: "Chambers of Xeric", dropRarity: "Rare" },
  { itemId: 21021, name: "Dinh's bulwark", slug: "dinhs-bulwark", category: "chambers-of-xeric", sortOrder: 7, dropSource: "Chambers of Xeric", dropRarity: "Rare" },

  // ToB
  { itemId: 22486, name: "Scythe of vitur", slug: "scythe-of-vitur", category: "theatre-of-blood", sortOrder: 0, dropSource: "Theatre of Blood", dropRarity: "Rare" },
  { itemId: 22324, name: "Ghrazi rapier", slug: "ghrazi-rapier", category: "theatre-of-blood", sortOrder: 1, dropSource: "Theatre of Blood", dropRarity: "Rare" },
  { itemId: 22481, name: "Justiciar faceguard", slug: "justiciar-faceguard", category: "theatre-of-blood", sortOrder: 2, dropSource: "Theatre of Blood", dropRarity: "Rare" },
  { itemId: 22482, name: "Justiciar chestguard", slug: "justiciar-chestguard", category: "theatre-of-blood", sortOrder: 3, dropSource: "Theatre of Blood", dropRarity: "Rare" },
  { itemId: 22483, name: "Justiciar legguards", slug: "justiciar-legguards", category: "theatre-of-blood", sortOrder: 4, dropSource: "Theatre of Blood", dropRarity: "Rare" },
  { itemId: 22002, name: "Avernic defender hilt", slug: "avernic-defender-hilt", category: "theatre-of-blood", sortOrder: 5, dropSource: "Theatre of Blood", dropRarity: "Rare" },

  // Cerberus
  { itemId: 13247, name: "Primordial crystal", slug: "primordial-crystal", category: "cerberus", sortOrder: 0, dropSource: "Cerberus", dropRarity: "1/512", dropRarityNum: 1/512 },
  { itemId: 13245, name: "Pegasian crystal", slug: "pegasian-crystal", category: "cerberus", sortOrder: 1, dropSource: "Cerberus", dropRarity: "1/512", dropRarityNum: 1/512 },
  { itemId: 13249, name: "Eternal crystal", slug: "eternal-crystal", category: "cerberus", sortOrder: 2, dropSource: "Cerberus", dropRarity: "1/512", dropRarityNum: 1/512 },
  { itemId: 13263, name: "Smouldering stone", slug: "smouldering-stone", category: "cerberus", sortOrder: 3, dropSource: "Cerberus", dropRarity: "1/512", dropRarityNum: 1/512 },
  { itemId: 13265, name: "Jar of souls", slug: "jar-of-souls", category: "cerberus", sortOrder: 4, dropSource: "Cerberus", dropRarity: "1/2000", dropRarityNum: 1/2000 },

  // Pets
  { itemId: 12921, name: "Snakeling", slug: "snakeling", category: "pets", sortOrder: 0, dropSource: "Zulrah", dropRarity: "1/4000", dropRarityNum: 1/4000 },
  { itemId: 20659, name: "Vorki", slug: "vorki", category: "pets", sortOrder: 1, dropSource: "Vorkath", dropRarity: "1/3000", dropRarityNum: 1/3000 },
  { itemId: 13337, name: "Olmlet", slug: "olmlet", category: "pets", sortOrder: 2, dropSource: "Chambers of Xeric", dropRarity: "1/53" },
  { itemId: 22473, name: "Lil' Zik", slug: "lil-zik", category: "pets", sortOrder: 3, dropSource: "Theatre of Blood", dropRarity: "1/650" },
  { itemId: 13247, name: "Hellpuppy", slug: "hellpuppy", category: "pets", sortOrder: 4, dropSource: "Cerberus", dropRarity: "1/3000" },
  { itemId: 12009, name: "Smoke devil", slug: "smoke-devil-pet", category: "pets", sortOrder: 5, dropSource: "Thermonuclear Smoke Devil", dropRarity: "1/3000" },
  { itemId: 12004, name: "Kraken tentacle pet", slug: "kraken-pet", category: "pets", sortOrder: 6, dropSource: "Kraken", dropRarity: "1/3000" },
  { itemId: 13181, name: "Callisto cub", slug: "callisto-cub", category: "pets", sortOrder: 7, dropSource: "Callisto", dropRarity: "1/2000" },
];
