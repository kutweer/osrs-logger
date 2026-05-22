// OSRS Collection Log category structure
// Based on the in-game collection log organization

export interface OsrsCategory {
  slug: string;
  name: string;
  parent?: string;
  sortOrder: number;
  iconItemId?: number;
  description?: string;
  wikiImageSlug?: string; // OSRS Wiki boss image name, e.g. "Abyssal_Sire"
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

  // Boss sub-categories (alphabetical, matching in-game collection log order)
  { slug: "abyssal-sire",              name: "Abyssal Sire",              parent: "bosses", sortOrder: 0,  iconItemId: 13265,  wikiImageSlug: "Abyssal_Sire",              description: "The Abyssal Sire is a Slayer boss that requires 85 Slayer to kill. It drops the abyssal bludgeon components and the unsired." },
  { slug: "alchemical-hydra",          name: "Alchemical Hydra",          parent: "bosses", sortOrder: 1,  iconItemId: 22966,  wikiImageSlug: "Alchemical_Hydra_(serpentine)",  description: "The Alchemical Hydra is a boss found in the Karuulm Slayer Dungeon. It requires 95 Slayer to kill and drops powerful gear upgrades." },
  { slug: "barrows",                   name: "Barrows",                   parent: "bosses", sortOrder: 2,  iconItemId: 4716,   wikiImageSlug: "Barrows_minigame",              description: "Barrows is a miniboss activity where players fight six brothers buried in crypts. Each brother drops pieces of their iconic equipment sets." },
  { slug: "bryophyta",                 name: "Bryophyta",                 parent: "bosses", sortOrder: 3,  iconItemId: 22370,  wikiImageSlug: "Bryophyta",                 description: "Bryophyta is the Moss Giant boss found in the Varrock Sewers. She drops the mossy key and Bryophyta's essence used to upgrade the Mage's book." },
  { slug: "callisto",                  name: "Callisto",                  parent: "bosses", sortOrder: 4,  iconItemId: 13181,  wikiImageSlug: "Callisto",                  description: "Callisto is a powerful bear boss found in the Wilderness. She drops the dragon pickaxe and voidwaker components." },
  { slug: "cerberus",                  name: "Cerberus",                  parent: "bosses", sortOrder: 5,  iconItemId: 13247,  wikiImageSlug: "Cerberus",                  description: "Cerberus is the guardian of the River Styx found in Taverley Dungeon. Requires 91 Slayer and drops primordial, pegasian, and eternal crystals." },
  { slug: "chaos-elemental",           name: "Chaos Elemental",           parent: "bosses", sortOrder: 6,  iconItemId: 2399,   wikiImageSlug: "Chaos_Elemental",           description: "The Chaos Elemental is a Wilderness boss that unequips gear from players. It drops the dragon pickaxe and voidwaker components." },
  { slug: "chaos-fanatic",             name: "Chaos Fanatic",             parent: "bosses", sortOrder: 7,  iconItemId: 11995,  wikiImageSlug: "Chaos_Fanatic",             description: "The Chaos Fanatic is a Wilderness boss located west of the Lava Maze. He drops the odium and malediction ward components." },
  { slug: "commander-zilyana",         name: "Commander Zilyana",         parent: "bosses", sortOrder: 8,  iconItemId: 11806,  wikiImageSlug: "Commander_Zilyana",         description: "Commander Zilyana is the Saradominist general of the God Wars Dungeon. She drops the Saradomin sword, Saradomin's light, and the godsword hilt." },
  { slug: "corporeal-beast",           name: "Corporeal Beast",           parent: "bosses", sortOrder: 9,  iconItemId: 12817,  wikiImageSlug: "Corporeal_Beast",           description: "The Corporeal Beast is a powerful boss requiring a large team. It drops the three sigils used to create spirit shields, including the elysian sigil." },
  { slug: "dagannoth-kings",           name: "Dagannoth Kings",           parent: "bosses", sortOrder: 10, iconItemId: 6738,   wikiImageSlug: "Fighting_Dagannoth_Kings",   description: "The Dagannoth Kings are three powerful bosses found in Waterbirth Island Dungeon. They drop the iconic dagannoth rings and the berserker ring." },
  { slug: "deranged-archaeologist",    name: "Deranged Archaeologist",    parent: "bosses", sortOrder: 11, iconItemId: 12009,  wikiImageSlug: "Deranged_archaeologist",    description: "The Deranged Archaeologist is found on Fossil Island. He drops the odium and malediction ward components as well as the jar of dirt." },
  { slug: "duke-sucellus",             name: "Duke Sucellus",             parent: "bosses", sortOrder: 12, iconItemId: 28283,  wikiImageSlug: "Duke_Sucellus",             description: "Duke Sucellus is one of the four Whisperer bosses introduced with Desert Treasure II. He drops the Magus vestige used to create the Soulreaper axe." },
  { slug: "general-graardor",          name: "General Graardor",          parent: "bosses", sortOrder: 13, iconItemId: 11816,  wikiImageSlug: "General_Graardor",          description: "General Graardor is the Bandosian general of the God Wars Dungeon. He drops powerful melee armour including Bandos chestplate and tassets." },
  { slug: "giant-mole",               name: "Giant Mole",                parent: "bosses", sortOrder: 14, iconItemId: 7449,   wikiImageSlug: "Giant_Mole",                description: "The Giant Mole is found beneath Falador Park. She drops mole claws and skins that can be exchanged for bird nests at Wyson the Gardener." },
  { slug: "grotesque-guardians",       name: "Grotesque Guardians",       parent: "bosses", sortOrder: 15, iconItemId: 21730,  wikiImageSlug: "Dawn",                      description: "Dusk and Dawn are the Grotesque Guardians atop the Slayer Tower. They require 75 Slayer and drop the black tourmaline core and granite ring." },
  { slug: "hespori",                   name: "Hespori",                   parent: "bosses", sortOrder: 16, iconItemId: 22997,  wikiImageSlug: "Hespori",                   description: "Hespori is a boss found in the Farming Guild. It drops the bottomless compost bucket and tangled toad's legs, useful for skilling." },
  { slug: "kalphite-queen",            name: "Kalphite Queen",            parent: "bosses", sortOrder: 17, iconItemId: 11942,  wikiImageSlug: "Kalphite_Queen",            description: "The Kalphite Queen is a powerful boss in the Kalphite Lair. She drops the dragon chainbody and the kalphite princess pet." },
  { slug: "king-black-dragon",         name: "King Black Dragon",         parent: "bosses", sortOrder: 18, iconItemId: 1704,   wikiImageSlug: "King_Black_Dragon",         description: "The King Black Dragon is found in the Wilderness. He drops the draconic visage and various dragon items, with a chance at the Prince Black Dragon pet." },
  { slug: "kraken",                    name: "Kraken",                    parent: "bosses", sortOrder: 19, iconItemId: 12004,  wikiImageSlug: "Kraken",                    description: "The Kraken is a Slayer boss found in the Kraken Cove. It requires 87 Slayer and drops the trident of the seas and the kraken tentacle." },
  { slug: "kreearra",                  name: "Kree'arra",                 parent: "bosses", sortOrder: 20, iconItemId: 11826,  wikiImageSlug: "Kree%27arra",               description: "Kree'arra is the Armadylean general of the God Wars Dungeon. He drops the Armadyl helmet, chestplate, and chainskirt." },
  { slug: "kril-tsutsaroth",           name: "K'ril Tsutsaroth",          parent: "bosses", sortOrder: 21, iconItemId: 11836,  wikiImageSlug: "K%27ril_Tsutsaroth",        description: "K'ril Tsutsaroth is the Zamorakian general of the God Wars Dungeon. He drops the zamorakian spear, staff of the dead, and godsword hilt." },
  { slug: "leviathan",                 name: "The Leviathan",             parent: "bosses", sortOrder: 22, iconItemId: 28252,  wikiImageSlug: "The_Leviathan",             description: "The Leviathan is a Desert Treasure II boss lurking in the Scar. It drops awakener's orbs and chromium ingots used to create powerful new weapons." },
  { slug: "nex",                       name: "Nex",                       parent: "bosses", sortOrder: 23, iconItemId: 26374,  wikiImageSlug: "Nex",                       description: "Nex is a powerful ancient goddess imprisoned in the God Wars Dungeon. She drops the Torva set, Zaryte vambraces, and nihil horn." },
  { slug: "nightmare",                 name: "The Nightmare",             parent: "bosses", sortOrder: 24, iconItemId: 24495,  wikiImageSlug: "The_Nightmare",             description: "The Nightmare of Ashihama is a terrifying boss fought in Morytania. She drops the Inquisitor's armour, nightmare staff, and powerful orbs." },
  { slug: "obor",                      name: "Obor",                      parent: "bosses", sortOrder: 25, iconItemId: 20756,  wikiImageSlug: "Obor",                      description: "Obor is the Hill Giant boss found in the Edgeville Dungeon. He drops the hill giant club and the giant key required to fight him." },
  { slug: "phantom-muspah",            name: "Phantom Muspah",            parent: "bosses", sortOrder: 26, iconItemId: 27641,  wikiImageSlug: "Phantom_Muspah_(ranged)",   description: "The Phantom Muspah is the boss of the Secrets of the North quest. It drops the saturated heart and various useful combat items." },
  { slug: "sarachnis",                 name: "Sarachnis",                 parent: "bosses", sortOrder: 27, iconItemId: 23528,  wikiImageSlug: "Sarachnis",                 description: "Sarachnis is the Spider Queen found in the Forthos Dungeon. She drops the sarachnis cudgel and the giant egg sac." },
  { slug: "scorpia",                   name: "Scorpia",                   parent: "bosses", sortOrder: 28, iconItemId: 12612,  wikiImageSlug: "Scorpia",                   description: "Scorpia is a Wilderness boss found in the Scorpion Pit. She drops the odium shard 1 and malediction shard 1, plus Scorpia's offspring pet." },
  { slug: "scurrius",                  name: "Scurrius",                  parent: "bosses", sortOrder: 29, iconItemId: 28404,  wikiImageSlug: "Scurrius",                  description: "Scurrius is the Giant Rat boss found in Varrock Sewers. He drops Scurrius' spine, an upgrade component for the bone mace." },
  { slug: "skotizo",                   name: "Skotizo",                   parent: "bosses", sortOrder: 30, iconItemId: 19685,  wikiImageSlug: "Skotizo",                   description: "Skotizo is a demi-boss summoned using a dark totem in the Catacombs of Kourend. He drops the skotos pet and dark claws." },
  { slug: "tempoross",                 name: "Tempoross",                 parent: "bosses", sortOrder: 31, iconItemId: 25574,  wikiImageSlug: "Tempoross",                 description: "Tempoross is a Fishing boss fought from a boat near the Alchemist's Hideout. It drops angler-style spirit angler's outfit and various fishing rewards." },
  { slug: "thermonuclear-smoke-devil", name: "Thermonuclear Smoke Devil", parent: "bosses", sortOrder: 32, iconItemId: 11998,  wikiImageSlug: "Thermonuclear_smoke_devil", description: "The Thermonuclear Smoke Devil is a Slayer boss requiring 93 Slayer. It drops the smoke battlestaff and occult necklace." },
  { slug: "tzkal-zuk",                 name: "TzKal-Zuk",                 parent: "bosses", sortOrder: 33, iconItemId: 21295,  wikiImageSlug: "TzKal-Zuk",                description: "TzKal-Zuk is the final boss of the Inferno, the hardest content in OSRS. Completing it awards the Infernal cape and the jal-nib-rek pet." },
  { slug: "tztok-jad",                 name: "TzTok-Jad",                 parent: "bosses", sortOrder: 34, iconItemId: 11832,  wikiImageSlug: "TzTok-Jad",                description: "TzTok-Jad is the boss of the TzHaar Fight Cave. Defeating it awards the iconic fire cape and the tzrek-jad pet." },
  { slug: "vardorvis",                 name: "Vardorvis",                 parent: "bosses", sortOrder: 35, iconItemId: 28285,  wikiImageSlug: "Vardorvis",                 description: "Vardorvis is a Desert Treasure II boss found in Stranglewood. He drops the Ultor vestige, blood quartz, and chromium ingots." },
  { slug: "venenatis",                 name: "Venenatis",                 parent: "bosses", sortOrder: 36, iconItemId: 13179,  wikiImageSlug: "Venenatis",                 description: "Venenatis is a Wilderness Spider boss that drops the dragon pickaxe, treasonous ring, and voidwaker components." },
  { slug: "vetion",                    name: "Vet'ion",                   parent: "bosses", sortOrder: 37, iconItemId: 13181,  wikiImageSlug: "Vet%27ion",                 description: "Vet'ion is a Wilderness Skeleton boss that drops the tyrannical ring, dragon pickaxe, and voidwaker components." },
  { slug: "vorkath",                   name: "Vorkath",                   parent: "bosses", sortOrder: 38, iconItemId: 22111,  wikiImageSlug: "Vorkath",                   description: "Vorkath is a boss from the Dragon Slayer II quest. He reliably drops dragonbone necklaces, skeletal visages, and Vorkath's head." },
  { slug: "whisperer",                 name: "The Whisperer",             parent: "bosses", sortOrder: 39, iconItemId: 28289,  wikiImageSlug: "The_Whisperer",             description: "The Whisperer is a Desert Treasure II boss found in the Ancient Vault. She drops the Bellator vestige and chromium ingots." },
  { slug: "wintertodt",               name: "Wintertodt",                parent: "bosses", sortOrder: 40, iconItemId: 20733,                              description: "Wintertodt is a Firemaking boss in the Land of Snow. It rewards the pyromancer outfit, warm gloves, and bruma torch through supply crates." },
  { slug: "zalcano",                   name: "Zalcano",                   parent: "bosses", sortOrder: 41, iconItemId: 23906,  wikiImageSlug: "Zalcano",                   description: "Zalcano is a Mining/Smithing boss fought in Prifddinas. She drops the smolcano pet, zalcano shard, and crystal tool seeds." },
  { slug: "zulrah",                    name: "Zulrah",                    parent: "bosses", sortOrder: 42, iconItemId: 12921,  wikiImageSlug: "Zulrah_(serpentine)",        description: "Zulrah is the snake boss of the Temple Trekking island. She drops tanzanite fang, magic fang, and serpentine visage at 1/512 each." },

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
  { slug: "shades-of-mortton", name: "Shades of Mort'ton", parent: "minigames", sortOrder: 11, iconItemId: 12854 },
  { slug: "shooting-stars", name: "Shooting Stars", parent: "minigames", sortOrder: 12, iconItemId: 25539 },
  { slug: "soul-wars", name: "Soul Wars", parent: "minigames", sortOrder: 13, iconItemId: 25344 },
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
