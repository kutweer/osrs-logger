import type { OsrsItemDef } from "./osrs-categories";

// =============================================================================
// OSRS Collection Log — comprehensive item definitions
// name MUST match the OSRS Wiki page name exactly (used for image URLs)
// itemId MUST be unique across all entries
// slug  MUST be unique across all entries
// =============================================================================

export const ALL_COLLECTION_LOG_ITEMS: OsrsItemDef[] = [

  // ---------------------------------------------------------------------------
  // BOSSES — ABYSSAL SIRE
  // ---------------------------------------------------------------------------
  { itemId: 13265, name: "Abyssal dagger",   slug: "abyssal-dagger",   category: "abyssal-sire", sortOrder: 0, dropSource: "Abyssal Sire", dropRarity: "1/512",  dropRarityNum: 1/512  },
  { itemId: 13273, name: "Bludgeon spine",   slug: "bludgeon-spine",   category: "abyssal-sire", sortOrder: 1, dropSource: "Abyssal Sire", dropRarity: "1/128",  dropRarityNum: 1/128  },
  { itemId: 13275, name: "Bludgeon claw",    slug: "bludgeon-claw",    category: "abyssal-sire", sortOrder: 2, dropSource: "Abyssal Sire", dropRarity: "1/128",  dropRarityNum: 1/128  },
  { itemId: 13277, name: "Bludgeon axon",    slug: "bludgeon-axon",    category: "abyssal-sire", sortOrder: 3, dropSource: "Abyssal Sire", dropRarity: "1/128",  dropRarityNum: 1/128  },
  { itemId: 13250, name: "Unsired",          slug: "unsired",          category: "abyssal-sire", sortOrder: 4, dropSource: "Abyssal Sire", dropRarity: "1/100",  dropRarityNum: 1/100  },
  { itemId: 13245, name: "Jar of souls",     slug: "jar-of-souls",     category: "abyssal-sire", sortOrder: 5, dropSource: "Abyssal Sire", dropRarity: "1/2000", dropRarityNum: 1/2000 },
  { itemId: 7979,  name: "Abyssal head",     slug: "abyssal-head",     category: "abyssal-sire", sortOrder: 6, dropSource: "Abyssal Sire", dropRarity: "1/5000", dropRarityNum: 1/5000 },
  { itemId: 13262, name: "Abyssal orphan",   slug: "abyssal-orphan",   category: "abyssal-sire", sortOrder: 7, dropSource: "Abyssal Sire", dropRarity: "1/2971", dropRarityNum: 1/2971 },

  // ---------------------------------------------------------------------------
  // BOSSES — ALCHEMICAL HYDRA
  // ---------------------------------------------------------------------------
  { itemId: 22971, name: "Hydra's eye",           slug: "hydras-eye",           category: "alchemical-hydra", sortOrder: 0, dropSource: "Alchemical Hydra", dropRarity: "1/600",  dropRarityNum: 1/600  },
  { itemId: 22973, name: "Hydra's fang",          slug: "hydras-fang",          category: "alchemical-hydra", sortOrder: 1, dropSource: "Alchemical Hydra", dropRarity: "1/600",  dropRarityNum: 1/600  },
  { itemId: 22975, name: "Hydra's heart",         slug: "hydras-heart",         category: "alchemical-hydra", sortOrder: 2, dropSource: "Alchemical Hydra", dropRarity: "1/600",  dropRarityNum: 1/600  },
  { itemId: 22983, name: "Hydra tail",            slug: "hydra-tail",           category: "alchemical-hydra", sortOrder: 3, dropSource: "Alchemical Hydra", dropRarity: "1/100",  dropRarityNum: 1/100  },
  { itemId: 22979, name: "Hydra leather",         slug: "hydra-leather",        category: "alchemical-hydra", sortOrder: 4, dropSource: "Alchemical Hydra", dropRarity: "1/100",  dropRarityNum: 1/100  },
  { itemId: 22966, name: "Hydra's claw",          slug: "hydras-claw",          category: "alchemical-hydra", sortOrder: 5, dropSource: "Alchemical Hydra", dropRarity: "1/1000", dropRarityNum: 1/1000 },
  { itemId: 22981, name: "Jar of chemicals",      slug: "jar-of-chemicals",     category: "alchemical-hydra", sortOrder: 6, dropSource: "Alchemical Hydra", dropRarity: "1/2000", dropRarityNum: 1/2000 },
  { itemId: 23077, name: "Alchemical hydra heads",slug: "alchemical-hydra-heads",category: "alchemical-hydra", sortOrder: 7, dropSource: "Alchemical Hydra", dropRarity: "1/5000", dropRarityNum: 1/5000 },
  { itemId: 22746, name: "Ikkle Hydra",           slug: "ikkle-hydra",          category: "alchemical-hydra", sortOrder: 8, dropSource: "Alchemical Hydra", dropRarity: "1/3000", dropRarityNum: 1/3000 },

  // ---------------------------------------------------------------------------
  // BOSSES — BARROWS
  // ---------------------------------------------------------------------------
  // Ahrim's set
  { itemId: 4708, name: "Ahrim's hood",       slug: "ahrims-hood",       category: "barrows", sortOrder: 0,  dropSource: "Barrows", dropRarity: "1/22", dropRarityNum: 1/22 },
  { itemId: 4710, name: "Ahrim's staff",      slug: "ahrims-staff",      category: "barrows", sortOrder: 1,  dropSource: "Barrows", dropRarity: "1/22", dropRarityNum: 1/22 },
  { itemId: 4712, name: "Ahrim's robetop",    slug: "ahrims-robetop",    category: "barrows", sortOrder: 2,  dropSource: "Barrows", dropRarity: "1/22", dropRarityNum: 1/22 },
  { itemId: 4714, name: "Ahrim's robeskirt",  slug: "ahrims-robeskirt",  category: "barrows", sortOrder: 3,  dropSource: "Barrows", dropRarity: "1/22", dropRarityNum: 1/22 },
  // Dharok's set
  { itemId: 4716, name: "Dharok's helm",       slug: "dharoks-helm",       category: "barrows", sortOrder: 4,  dropSource: "Barrows", dropRarity: "1/22", dropRarityNum: 1/22 },
  { itemId: 4718, name: "Dharok's greataxe",   slug: "dharoks-greataxe",   category: "barrows", sortOrder: 5,  dropSource: "Barrows", dropRarity: "1/22", dropRarityNum: 1/22 },
  { itemId: 4720, name: "Dharok's platebody",  slug: "dharoks-platebody",  category: "barrows", sortOrder: 6,  dropSource: "Barrows", dropRarity: "1/22", dropRarityNum: 1/22 },
  { itemId: 4722, name: "Dharok's platelegs",  slug: "dharoks-platelegs",  category: "barrows", sortOrder: 7,  dropSource: "Barrows", dropRarity: "1/22", dropRarityNum: 1/22 },
  // Guthan's set
  { itemId: 4724, name: "Guthan's helm",        slug: "guthans-helm",        category: "barrows", sortOrder: 8,  dropSource: "Barrows", dropRarity: "1/22", dropRarityNum: 1/22 },
  { itemId: 4726, name: "Guthan's warspear",    slug: "guthans-warspear",    category: "barrows", sortOrder: 9,  dropSource: "Barrows", dropRarity: "1/22", dropRarityNum: 1/22 },
  { itemId: 4728, name: "Guthan's platebody",   slug: "guthans-platebody",   category: "barrows", sortOrder: 10, dropSource: "Barrows", dropRarity: "1/22", dropRarityNum: 1/22 },
  { itemId: 4730, name: "Guthan's chainskirt",  slug: "guthans-chainskirt",  category: "barrows", sortOrder: 11, dropSource: "Barrows", dropRarity: "1/22", dropRarityNum: 1/22 },
  // Karil's set
  { itemId: 4732, name: "Karil's coif",         slug: "karils-coif",         category: "barrows", sortOrder: 12, dropSource: "Barrows", dropRarity: "1/22", dropRarityNum: 1/22 },
  { itemId: 4734, name: "Karil's crossbow",     slug: "karils-crossbow",     category: "barrows", sortOrder: 13, dropSource: "Barrows", dropRarity: "1/22", dropRarityNum: 1/22 },
  { itemId: 4736, name: "Karil's leathertop",   slug: "karils-leathertop",   category: "barrows", sortOrder: 14, dropSource: "Barrows", dropRarity: "1/22", dropRarityNum: 1/22 },
  { itemId: 4738, name: "Karil's leatherskirt", slug: "karils-leatherskirt", category: "barrows", sortOrder: 15, dropSource: "Barrows", dropRarity: "1/22", dropRarityNum: 1/22 },
  // Torag's set
  { itemId: 4745, name: "Torag's helm",       slug: "torags-helm",       category: "barrows", sortOrder: 16, dropSource: "Barrows", dropRarity: "1/22", dropRarityNum: 1/22 },
  { itemId: 4747, name: "Torag's hammers",    slug: "torags-hammers",    category: "barrows", sortOrder: 17, dropSource: "Barrows", dropRarity: "1/22", dropRarityNum: 1/22 },
  { itemId: 4749, name: "Torag's platebody",  slug: "torags-platebody",  category: "barrows", sortOrder: 18, dropSource: "Barrows", dropRarity: "1/22", dropRarityNum: 1/22 },
  { itemId: 4751, name: "Torag's platelegs",  slug: "torags-platelegs",  category: "barrows", sortOrder: 19, dropSource: "Barrows", dropRarity: "1/22", dropRarityNum: 1/22 },
  // Verac's set
  { itemId: 4753, name: "Verac's helm",       slug: "veracs-helm",       category: "barrows", sortOrder: 20, dropSource: "Barrows", dropRarity: "1/22", dropRarityNum: 1/22 },
  { itemId: 4755, name: "Verac's flail",      slug: "veracs-flail",      category: "barrows", sortOrder: 21, dropSource: "Barrows", dropRarity: "1/22", dropRarityNum: 1/22 },
  { itemId: 4757, name: "Verac's brassard",   slug: "veracs-brassard",   category: "barrows", sortOrder: 22, dropSource: "Barrows", dropRarity: "1/22", dropRarityNum: 1/22 },
  { itemId: 4759, name: "Verac's plateskirt", slug: "veracs-plateskirt", category: "barrows", sortOrder: 23, dropSource: "Barrows", dropRarity: "1/22", dropRarityNum: 1/22 },

  // ---------------------------------------------------------------------------
  // BOSSES — BRYOPHYTA
  // ---------------------------------------------------------------------------
  { itemId: 22370, name: "Bryophyta's essence", slug: "bryophytas-essence", category: "bryophyta", sortOrder: 0, dropSource: "Bryophyta", dropRarity: "1/118", dropRarityNum: 1/118 },
  { itemId: 22372, name: "Mossy key",           slug: "mossy-key",           category: "bryophyta", sortOrder: 1, dropSource: "Bryophyta", dropRarity: "1/200", dropRarityNum: 1/200 },

  // ---------------------------------------------------------------------------
  // BOSSES — CALLISTO
  // ---------------------------------------------------------------------------
  { itemId: 13175,  name: "Callisto cub",      slug: "callisto-cub",              category: "callisto", sortOrder: 0, dropSource: "Callisto", dropRarity: "1/2000",  dropRarityNum: 1/2000  },
  { itemId: 13196,  name: "Tyrannical ring",   slug: "tyrannical-ring-callisto",   category: "callisto", sortOrder: 1, dropSource: "Callisto", dropRarity: "1/512",   dropRarityNum: 1/512   },
  { itemId: 11920,  name: "Dragon pickaxe",    slug: "dragon-pickaxe-callisto",    category: "callisto", sortOrder: 2, dropSource: "Callisto", dropRarity: "1/171",   dropRarityNum: 1/171   },
  { itemId: 27690,  name: "Voidwaker blade",   slug: "voidwaker-blade",            category: "callisto", sortOrder: 3, dropSource: "Callisto", dropRarity: "1/360",   dropRarityNum: 1/360   },

  // ---------------------------------------------------------------------------
  // BOSSES — CERBERUS
  // ---------------------------------------------------------------------------
  { itemId: 13231, name: "Primordial crystal", slug: "primordial-crystal", category: "cerberus", sortOrder: 0, dropSource: "Cerberus", dropRarity: "1/512",  dropRarityNum: 1/512  },
  { itemId: 13229, name: "Pegasian crystal",   slug: "pegasian-crystal",   category: "cerberus", sortOrder: 1, dropSource: "Cerberus", dropRarity: "1/512",  dropRarityNum: 1/512  },
  { itemId: 13227, name: "Eternal crystal",    slug: "eternal-crystal",    category: "cerberus", sortOrder: 2, dropSource: "Cerberus", dropRarity: "1/512",  dropRarityNum: 1/512  },
  { itemId: 13233, name: "Smouldering stone",  slug: "smouldering-stone",  category: "cerberus", sortOrder: 3, dropSource: "Cerberus", dropRarity: "1/512",  dropRarityNum: 1/512  },
  { itemId: 13249, name: "Key master teleport",slug: "key-master-teleport",category: "cerberus", sortOrder: 4, dropSource: "Cerberus", dropRarity: "1/64",   dropRarityNum: 1/64   },
  { itemId: 13247, name: "Hellpuppy",          slug: "hellpuppy",          category: "cerberus", sortOrder: 5, dropSource: "Cerberus", dropRarity: "1/3000", dropRarityNum: 1/3000 },

  // ---------------------------------------------------------------------------
  // BOSSES — CHAOS ELEMENTAL
  // ---------------------------------------------------------------------------
  { itemId: 111920, name: "Dragon pickaxe",       slug: "dragon-pickaxe-chaos-elemental", category: "chaos-elemental", sortOrder: 0, dropSource: "Chaos Elemental", dropRarity: "1/256",  dropRarityNum: 1/256  },
  { itemId: 7158,   name: "Dragon 2h sword",      slug: "dragon-2h-sword-chaos-elemental", category: "chaos-elemental", sortOrder: 1, dropSource: "Chaos Elemental", dropRarity: "1/128",  dropRarityNum: 1/128  },
  { itemId: 11995,  name: "Pet chaos elemental",  slug: "pet-chaos-elemental",             category: "chaos-elemental", sortOrder: 2, dropSource: "Chaos Elemental", dropRarity: "1/300",  dropRarityNum: 1/300  },
  { itemId: 27692,  name: "Voidwaker gem",        slug: "voidwaker-gem-chaos-elemental",   category: "chaos-elemental", sortOrder: 3, dropSource: "Chaos Elemental", dropRarity: "1/360",  dropRarityNum: 1/360  },

  // ---------------------------------------------------------------------------
  // BOSSES — CHAOS FANATIC
  // ---------------------------------------------------------------------------
  { itemId: 4675,  name: "Ancient staff",      slug: "ancient-staff",       category: "chaos-fanatic", sortOrder: 0, dropSource: "Chaos Fanatic", dropRarity: "1/512",  dropRarityNum: 1/512  },
  { itemId: 12608, name: "Odium shard 2",      slug: "odium-shard-2",       category: "chaos-fanatic", sortOrder: 1, dropSource: "Chaos Fanatic", dropRarity: "1/256",  dropRarityNum: 1/256  },
  { itemId: 12610, name: "Malediction shard 2",slug: "malediction-shard-2", category: "chaos-fanatic", sortOrder: 2, dropSource: "Chaos Fanatic", dropRarity: "1/256",  dropRarityNum: 1/256  },

  // ---------------------------------------------------------------------------
  // BOSSES — COMMANDER ZILYANA
  // ---------------------------------------------------------------------------
  { itemId: 11838, name: "Saradomin sword",    slug: "saradomin-sword",     category: "commander-zilyana", sortOrder: 0, dropSource: "Commander Zilyana", dropRarity: "1/127",  dropRarityNum: 1/127  },
  { itemId: 11785, name: "Armadyl crossbow",   slug: "armadyl-crossbow",    category: "commander-zilyana", sortOrder: 1, dropSource: "Commander Zilyana", dropRarity: "1/381",  dropRarityNum: 1/381  },
  { itemId: 11806, name: "Saradomin's light",  slug: "saradominss-light",   category: "commander-zilyana", sortOrder: 2, dropSource: "Commander Zilyana", dropRarity: "1/254",  dropRarityNum: 1/254  },
  { itemId: 11808, name: "Saradomin hilt",     slug: "saradomin-hilt",      category: "commander-zilyana", sortOrder: 3, dropSource: "Commander Zilyana", dropRarity: "1/508",  dropRarityNum: 1/508  },
  { itemId: 21818, name: "Godsword shard 1",   slug: "godsword-shard-1-zilyana", category: "commander-zilyana", sortOrder: 4, dropSource: "Commander Zilyana", dropRarity: "1/762",  dropRarityNum: 1/762  },
  { itemId: 21820, name: "Godsword shard 2",   slug: "godsword-shard-2-zilyana", category: "commander-zilyana", sortOrder: 5, dropSource: "Commander Zilyana", dropRarity: "1/762",  dropRarityNum: 1/762  },
  { itemId: 21822, name: "Godsword shard 3",   slug: "godsword-shard-3-zilyana", category: "commander-zilyana", sortOrder: 6, dropSource: "Commander Zilyana", dropRarity: "1/762",  dropRarityNum: 1/762  },
  { itemId: 12651, name: "Pet zilyana",        slug: "pet-zilyana",         category: "commander-zilyana", sortOrder: 7, dropSource: "Commander Zilyana", dropRarity: "1/5000", dropRarityNum: 1/5000 },

  // ---------------------------------------------------------------------------
  // BOSSES — CORPOREAL BEAST
  // ---------------------------------------------------------------------------
  { itemId: 12819, name: "Arcane sigil",   slug: "arcane-sigil",   category: "corporeal-beast", sortOrder: 0, dropSource: "Corporeal Beast", dropRarity: "1/1820", dropRarityNum: 1/1820 },
  { itemId: 12823, name: "Spectral sigil", slug: "spectral-sigil", category: "corporeal-beast", sortOrder: 1, dropSource: "Corporeal Beast", dropRarity: "1/1820", dropRarityNum: 1/1820 },
  { itemId: 12817, name: "Elysian sigil",  slug: "elysian-sigil",  category: "corporeal-beast", sortOrder: 2, dropSource: "Corporeal Beast", dropRarity: "1/4095", dropRarityNum: 1/4095 },
  { itemId: 12825, name: "Holy elixir",    slug: "holy-elixir",    category: "corporeal-beast", sortOrder: 3, dropSource: "Corporeal Beast", dropRarity: "1/171",  dropRarityNum: 1/171  },
  { itemId: 12829, name: "Spirit shield",  slug: "spirit-shield",  category: "corporeal-beast", sortOrder: 4, dropSource: "Corporeal Beast", dropRarity: "1/171",  dropRarityNum: 1/171  },
  { itemId: 12812, name: "Dark core",      slug: "dark-core",      category: "corporeal-beast", sortOrder: 5, dropSource: "Corporeal Beast", dropRarity: "1/25",   dropRarityNum: 1/25   },
  { itemId: 12816, name: "Pet dark core",  slug: "pet-dark-core",  category: "corporeal-beast", sortOrder: 6, dropSource: "Corporeal Beast", dropRarity: "1/5000", dropRarityNum: 1/5000 },

  // ---------------------------------------------------------------------------
  // BOSSES — DAGANNOTH KINGS
  // ---------------------------------------------------------------------------
  { itemId: 6737, name: "Berserker ring",       slug: "berserker-ring",       category: "dagannoth-kings", sortOrder: 0, dropSource: "Dagannoth Rex",     dropRarity: "1/128", dropRarityNum: 1/128 },
  { itemId: 6731, name: "Seers ring",           slug: "seers-ring",           category: "dagannoth-kings", sortOrder: 1, dropSource: "Dagannoth Prime",   dropRarity: "1/128", dropRarityNum: 1/128 },
  { itemId: 6733, name: "Archers ring",         slug: "archers-ring",         category: "dagannoth-kings", sortOrder: 2, dropSource: "Dagannoth Supreme", dropRarity: "1/128", dropRarityNum: 1/128 },
  { itemId: 6735, name: "Warrior ring",         slug: "warrior-ring",         category: "dagannoth-kings", sortOrder: 3, dropSource: "Dagannoth Rex",     dropRarity: "1/128", dropRarityNum: 1/128 },
  { itemId: 6739, name: "Dragon axe",           slug: "dragon-axe",           category: "dagannoth-kings", sortOrder: 4, dropSource: "Dagannoth Kings",   dropRarity: "1/512", dropRarityNum: 1/512 },
  { itemId: 12641, name: "Pet dagannoth prime",  slug: "pet-dagannoth-prime",  category: "dagannoth-kings", sortOrder: 5, dropSource: "Dagannoth Prime",   dropRarity: "1/5000", dropRarityNum: 1/5000 },
  { itemId: 12643, name: "Pet dagannoth rex",    slug: "pet-dagannoth-rex",    category: "dagannoth-kings", sortOrder: 6, dropSource: "Dagannoth Rex",     dropRarity: "1/5000", dropRarityNum: 1/5000 },
  { itemId: 12645, name: "Pet dagannoth supreme",slug: "pet-dagannoth-supreme",category: "dagannoth-kings", sortOrder: 7, dropSource: "Dagannoth Supreme", dropRarity: "1/5000", dropRarityNum: 1/5000 },

  // ---------------------------------------------------------------------------
  // BOSSES — DERANGED ARCHAEOLOGIST
  // ---------------------------------------------------------------------------
  { itemId: 12614, name: "Odium shard 3",      slug: "odium-shard-3",       category: "deranged-archaeologist", sortOrder: 0, dropSource: "Deranged Archaeologist", dropRarity: "1/256", dropRarityNum: 1/256 },
  { itemId: 12616, name: "Malediction shard 3",slug: "malediction-shard-3", category: "deranged-archaeologist", sortOrder: 1, dropSource: "Deranged Archaeologist", dropRarity: "1/256", dropRarityNum: 1/256 },

  // ---------------------------------------------------------------------------
  // BOSSES — DUKE SUCELLUS
  // ---------------------------------------------------------------------------
  { itemId: 28283, name: "Magus vestige",   slug: "magus-vestige",   category: "duke-sucellus", sortOrder: 0, dropSource: "Duke Sucellus", dropRarity: "1/90",   dropRarityNum: 1/90   },
  { itemId: 28275, name: "Chromium ingot",  slug: "chromium-ingot-duke",  category: "duke-sucellus", sortOrder: 1, dropSource: "Duke Sucellus", dropRarity: "1/60",   dropRarityNum: 1/60   },
  { itemId: 28260, name: "Eye of the duke", slug: "eye-of-the-duke", category: "duke-sucellus", sortOrder: 2, dropSource: "Duke Sucellus", dropRarity: "1/200",  dropRarityNum: 1/200  },
  { itemId: 28321, name: "Awakener's orb",  slug: "awakeners-orb-duke",   category: "duke-sucellus", sortOrder: 3, dropSource: "Duke Sucellus", dropRarity: "1/200",  dropRarityNum: 1/200  },

  // ---------------------------------------------------------------------------
  // BOSSES — GENERAL GRAARDOR
  // ---------------------------------------------------------------------------
  { itemId: 11832, name: "Bandos chestplate", slug: "bandos-chestplate",        category: "general-graardor", sortOrder: 0, dropSource: "General Graardor", dropRarity: "1/381",  dropRarityNum: 1/381  },
  { itemId: 11834, name: "Bandos tassets",    slug: "bandos-tassets",           category: "general-graardor", sortOrder: 1, dropSource: "General Graardor", dropRarity: "1/381",  dropRarityNum: 1/381  },
  { itemId: 11840, name: "Bandos boots",      slug: "bandos-boots",             category: "general-graardor", sortOrder: 2, dropSource: "General Graardor", dropRarity: "1/381",  dropRarityNum: 1/381  },
  { itemId: 11804, name: "Bandos hilt",       slug: "bandos-hilt",              category: "general-graardor", sortOrder: 3, dropSource: "General Graardor", dropRarity: "1/508",  dropRarityNum: 1/508  },
  { itemId: 11818, name: "Godsword shard 1",  slug: "godsword-shard-1-graardor",category: "general-graardor", sortOrder: 4, dropSource: "General Graardor", dropRarity: "1/762",  dropRarityNum: 1/762  },
  { itemId: 11820, name: "Godsword shard 2",  slug: "godsword-shard-2-graardor",category: "general-graardor", sortOrder: 5, dropSource: "General Graardor", dropRarity: "1/762",  dropRarityNum: 1/762  },
  { itemId: 11822, name: "Godsword shard 3",  slug: "godsword-shard-3-graardor",category: "general-graardor", sortOrder: 6, dropSource: "General Graardor", dropRarity: "1/762",  dropRarityNum: 1/762  },
  { itemId: 12650, name: "Pet general graardor",slug: "pet-general-graardor",   category: "general-graardor", sortOrder: 7, dropSource: "General Graardor", dropRarity: "1/5000", dropRarityNum: 1/5000 },

  // ---------------------------------------------------------------------------
  // BOSSES — GIANT MOLE
  // ---------------------------------------------------------------------------
  { itemId: 7379,  name: "Mole skin", slug: "mole-skin", category: "giant-mole", sortOrder: 0, dropSource: "Giant Mole", dropRarity: "Common" },
  { itemId: 7381,  name: "Mole claw", slug: "mole-claw", category: "giant-mole", sortOrder: 1, dropSource: "Giant Mole", dropRarity: "Common" },
  { itemId: 12646, name: "Baby mole", slug: "baby-mole", category: "giant-mole", sortOrder: 2, dropSource: "Giant Mole", dropRarity: "1/3000", dropRarityNum: 1/3000 },

  // ---------------------------------------------------------------------------
  // BOSSES — GROTESQUE GUARDIANS
  // ---------------------------------------------------------------------------
  { itemId: 21736, name: "Granite gloves",       slug: "granite-gloves",        category: "grotesque-guardians", sortOrder: 0, dropSource: "Grotesque Guardians", dropRarity: "1/200",  dropRarityNum: 1/200  },
  { itemId: 21738, name: "Granite ring",         slug: "granite-ring",          category: "grotesque-guardians", sortOrder: 1, dropSource: "Grotesque Guardians", dropRarity: "1/200",  dropRarityNum: 1/200  },
  { itemId: 21742, name: "Granite hammer",       slug: "granite-hammer",        category: "grotesque-guardians", sortOrder: 2, dropSource: "Grotesque Guardians", dropRarity: "1/750",  dropRarityNum: 1/750  },
  { itemId: 21730, name: "Black tourmaline core",slug: "black-tourmaline-core", category: "grotesque-guardians", sortOrder: 3, dropSource: "Grotesque Guardians", dropRarity: "1/1000", dropRarityNum: 1/1000 },
  { itemId: 21745, name: "Jar of stone",         slug: "jar-of-stone",          category: "grotesque-guardians", sortOrder: 4, dropSource: "Grotesque Guardians", dropRarity: "1/2500", dropRarityNum: 1/2500 },
  { itemId: 21748, name: "Pet noon",             slug: "pet-noon",              category: "grotesque-guardians", sortOrder: 5, dropSource: "Grotesque Guardians", dropRarity: "1/3000", dropRarityNum: 1/3000 },
  { itemId: 21750, name: "Pet dusk",             slug: "pet-dusk",              category: "grotesque-guardians", sortOrder: 6, dropSource: "Grotesque Guardians", dropRarity: "1/3000", dropRarityNum: 1/3000 },

  // ---------------------------------------------------------------------------
  // BOSSES — HESPORI
  // ---------------------------------------------------------------------------
  { itemId: 22997, name: "Bottomless compost bucket", slug: "bottomless-compost-bucket", category: "hespori", sortOrder: 0, dropSource: "Hespori", dropRarity: "1/35",  dropRarityNum: 1/35  },
  { itemId: 23024, name: "Tangled toad's legs",       slug: "tangled-toads-legs",        category: "hespori", sortOrder: 1, dropSource: "Hespori", dropRarity: "1/35",  dropRarityNum: 1/35  },

  // ---------------------------------------------------------------------------
  // BOSSES — KALPHITE QUEEN
  // ---------------------------------------------------------------------------
  { itemId: 11942, name: "Dragon chainbody",   slug: "dragon-chainbody",      category: "kalphite-queen", sortOrder: 0, dropSource: "Kalphite Queen", dropRarity: "1/128",  dropRarityNum: 1/128  },
  { itemId: 107158,name: "Dragon 2h sword",    slug: "dragon-2h-sword-kq",    category: "kalphite-queen", sortOrder: 1, dropSource: "Kalphite Queen", dropRarity: "1/256",  dropRarityNum: 1/256  },
  { itemId: 12885, name: "Jar of sand",        slug: "jar-of-sand",           category: "kalphite-queen", sortOrder: 2, dropSource: "Kalphite Queen", dropRarity: "1/2000", dropRarityNum: 1/2000 },
  { itemId: 12647, name: "Kalphite princess",  slug: "kalphite-princess",     category: "kalphite-queen", sortOrder: 3, dropSource: "Kalphite Queen", dropRarity: "1/3000", dropRarityNum: 1/3000 },

  // ---------------------------------------------------------------------------
  // BOSSES — KING BLACK DRAGON
  // ---------------------------------------------------------------------------
  { itemId: 4584,  name: "KBD heads",        slug: "kbd-heads",          category: "king-black-dragon", sortOrder: 0, dropSource: "King Black Dragon", dropRarity: "1/128",  dropRarityNum: 1/128  },
  { itemId: 11286, name: "Draconic visage",  slug: "draconic-visage-kbd",category: "king-black-dragon", sortOrder: 1, dropSource: "King Black Dragon", dropRarity: "1/5000", dropRarityNum: 1/5000 },
  { itemId: 12653, name: "Prince black dragon",slug: "prince-black-dragon",category: "king-black-dragon", sortOrder: 2, dropSource: "King Black Dragon", dropRarity: "1/3000", dropRarityNum: 1/3000 },

  // ---------------------------------------------------------------------------
  // BOSSES — KRAKEN
  // ---------------------------------------------------------------------------
  { itemId: 11907, name: "Trident of the seas (full)", slug: "trident-of-the-seas-full", category: "kraken", sortOrder: 0, dropSource: "Kraken", dropRarity: "1/512",  dropRarityNum: 1/512  },
  { itemId: 12004, name: "Kraken tentacle",            slug: "kraken-tentacle",          category: "kraken", sortOrder: 1, dropSource: "Kraken", dropRarity: "1/512",  dropRarityNum: 1/512  },
  { itemId: 12007, name: "Jar of dirt",                slug: "jar-of-dirt",              category: "kraken", sortOrder: 2, dropSource: "Kraken", dropRarity: "1/1000", dropRarityNum: 1/1000 },
  { itemId: 12009, name: "Pet kraken",                 slug: "pet-kraken",               category: "kraken", sortOrder: 3, dropSource: "Kraken", dropRarity: "1/3000", dropRarityNum: 1/3000 },

  // ---------------------------------------------------------------------------
  // BOSSES — KREE'ARRA
  // ---------------------------------------------------------------------------
  { itemId: 11826, name: "Armadyl helmet",    slug: "armadyl-helmet",           category: "kreearra", sortOrder: 0, dropSource: "Kree'arra", dropRarity: "1/381",  dropRarityNum: 1/381  },
  { itemId: 11828, name: "Armadyl chestplate",slug: "armadyl-chestplate",       category: "kreearra", sortOrder: 1, dropSource: "Kree'arra", dropRarity: "1/381",  dropRarityNum: 1/381  },
  { itemId: 11830, name: "Armadyl chainskirt",slug: "armadyl-chainskirt",       category: "kreearra", sortOrder: 2, dropSource: "Kree'arra", dropRarity: "1/381",  dropRarityNum: 1/381  },
  { itemId: 11802, name: "Armadyl hilt",      slug: "armadyl-hilt",             category: "kreearra", sortOrder: 3, dropSource: "Kree'arra", dropRarity: "1/508",  dropRarityNum: 1/508  },
  { itemId: 31818, name: "Godsword shard 1",  slug: "godsword-shard-1-kreearra",category: "kreearra", sortOrder: 4, dropSource: "Kree'arra", dropRarity: "1/762",  dropRarityNum: 1/762  },
  { itemId: 31820, name: "Godsword shard 2",  slug: "godsword-shard-2-kreearra",category: "kreearra", sortOrder: 5, dropSource: "Kree'arra", dropRarity: "1/762",  dropRarityNum: 1/762  },
  { itemId: 31822, name: "Godsword shard 3",  slug: "godsword-shard-3-kreearra",category: "kreearra", sortOrder: 6, dropSource: "Kree'arra", dropRarity: "1/762",  dropRarityNum: 1/762  },
  { itemId: 12649, name: "Pet kreearra",       slug: "pet-kreearra",             category: "kreearra", sortOrder: 7, dropSource: "Kree'arra", dropRarity: "1/5000", dropRarityNum: 1/5000 },

  // ---------------------------------------------------------------------------
  // BOSSES — K'RIL TSUTSAROTH
  // ---------------------------------------------------------------------------
  { itemId: 11824, name: "Zamorakian spear", slug: "zamorakian-spear",         category: "kril-tsutsaroth", sortOrder: 0, dropSource: "K'ril Tsutsaroth", dropRarity: "1/127",  dropRarityNum: 1/127  },
  { itemId: 11791, name: "Staff of the dead",slug: "staff-of-the-dead",        category: "kril-tsutsaroth", sortOrder: 1, dropSource: "K'ril Tsutsaroth", dropRarity: "1/508",  dropRarityNum: 1/508  },
  { itemId: 11787, name: "Steam battlestaff",slug: "steam-battlestaff",        category: "kril-tsutsaroth", sortOrder: 2, dropSource: "K'ril Tsutsaroth", dropRarity: "1/127",  dropRarityNum: 1/127  },
  { itemId: 11812, name: "Zamorak hilt",     slug: "zamorak-hilt",             category: "kril-tsutsaroth", sortOrder: 3, dropSource: "K'ril Tsutsaroth", dropRarity: "1/508",  dropRarityNum: 1/508  },
  { itemId: 41818, name: "Godsword shard 1", slug: "godsword-shard-1-kril",    category: "kril-tsutsaroth", sortOrder: 4, dropSource: "K'ril Tsutsaroth", dropRarity: "1/762",  dropRarityNum: 1/762  },
  { itemId: 41820, name: "Godsword shard 2", slug: "godsword-shard-2-kril",    category: "kril-tsutsaroth", sortOrder: 5, dropSource: "K'ril Tsutsaroth", dropRarity: "1/762",  dropRarityNum: 1/762  },
  { itemId: 41822, name: "Godsword shard 3", slug: "godsword-shard-3-kril",    category: "kril-tsutsaroth", sortOrder: 6, dropSource: "K'ril Tsutsaroth", dropRarity: "1/762",  dropRarityNum: 1/762  },
  { itemId: 12652, name: "Pet k'ril tsutsaroth",slug: "pet-kril-tsutsaroth",   category: "kril-tsutsaroth", sortOrder: 7, dropSource: "K'ril Tsutsaroth", dropRarity: "1/5000", dropRarityNum: 1/5000 },

  // ---------------------------------------------------------------------------
  // BOSSES — LEVIATHAN
  // ---------------------------------------------------------------------------
  { itemId: 28252,  name: "Leviathan's lure", slug: "leviathans-lure",         category: "leviathan", sortOrder: 0, dropSource: "The Leviathan", dropRarity: "1/200",  dropRarityNum: 1/200  },
  { itemId: 128275, name: "Chromium ingot",   slug: "chromium-ingot-leviathan",category: "leviathan", sortOrder: 1, dropSource: "The Leviathan", dropRarity: "1/60",   dropRarityNum: 1/60   },
  { itemId: 28297,  name: "Venator vestige",  slug: "venator-vestige",         category: "leviathan", sortOrder: 2, dropSource: "The Leviathan", dropRarity: "1/90",   dropRarityNum: 1/90   },
  { itemId: 128321, name: "Awakener's orb",   slug: "awakeners-orb-leviathan", category: "leviathan", sortOrder: 3, dropSource: "The Leviathan", dropRarity: "1/200",  dropRarityNum: 1/200  },

  // ---------------------------------------------------------------------------
  // BOSSES — NEX
  // ---------------------------------------------------------------------------
  { itemId: 26382, name: "Torva full helm",     slug: "torva-full-helm",     category: "nex", sortOrder: 0, dropSource: "Nex", dropRarity: "1/516", dropRarityNum: 1/516 },
  { itemId: 26384, name: "Torva platebody",     slug: "torva-platebody",     category: "nex", sortOrder: 1, dropSource: "Nex", dropRarity: "1/516", dropRarityNum: 1/516 },
  { itemId: 26386, name: "Torva platelegs",     slug: "torva-platelegs",     category: "nex", sortOrder: 2, dropSource: "Nex", dropRarity: "1/516", dropRarityNum: 1/516 },
  { itemId: 26370, name: "Ancient hilt",        slug: "ancient-hilt",        category: "nex", sortOrder: 3, dropSource: "Nex", dropRarity: "1/516", dropRarityNum: 1/516 },
  { itemId: 26372, name: "Nihil horn",          slug: "nihil-horn",          category: "nex", sortOrder: 4, dropSource: "Nex", dropRarity: "1/516", dropRarityNum: 1/516 },
  { itemId: 26374, name: "Zaryte vambraces",    slug: "zaryte-vambraces",    category: "nex", sortOrder: 5, dropSource: "Nex", dropRarity: "1/516", dropRarityNum: 1/516 },
  { itemId: 26348, name: "Nexling",             slug: "nexling",             category: "nex", sortOrder: 6, dropSource: "Nex", dropRarity: "1/3000", dropRarityNum: 1/3000 },

  // ---------------------------------------------------------------------------
  // BOSSES — THE NIGHTMARE
  // ---------------------------------------------------------------------------
  { itemId: 24422, name: "Nightmare staff",       slug: "nightmare-staff",        category: "nightmare", sortOrder: 0, dropSource: "The Nightmare", dropRarity: "1/400",  dropRarityNum: 1/400  },
  { itemId: 24514, name: "Volatile orb",          slug: "volatile-orb",           category: "nightmare", sortOrder: 1, dropSource: "The Nightmare", dropRarity: "1/600",  dropRarityNum: 1/600  },
  { itemId: 24519, name: "Eldritch orb",          slug: "eldritch-orb",           category: "nightmare", sortOrder: 2, dropSource: "The Nightmare", dropRarity: "1/600",  dropRarityNum: 1/600  },
  { itemId: 24516, name: "Harmonised orb",        slug: "harmonised-orb",         category: "nightmare", sortOrder: 3, dropSource: "The Nightmare", dropRarity: "1/600",  dropRarityNum: 1/600  },
  { itemId: 24419, name: "Inquisitor's great helm",slug: "inquisitors-great-helm", category: "nightmare", sortOrder: 4, dropSource: "The Nightmare", dropRarity: "1/400",  dropRarityNum: 1/400  },
  { itemId: 24420, name: "Inquisitor's hauberk",  slug: "inquisitors-hauberk",    category: "nightmare", sortOrder: 5, dropSource: "The Nightmare", dropRarity: "1/400",  dropRarityNum: 1/400  },
  { itemId: 24421, name: "Inquisitor's plateskirt",slug: "inquisitors-plateskirt", category: "nightmare", sortOrder: 6, dropSource: "The Nightmare", dropRarity: "1/400",  dropRarityNum: 1/400  },
  { itemId: 24417, name: "Inquisitor's mace",     slug: "inquisitors-mace",       category: "nightmare", sortOrder: 7, dropSource: "The Nightmare", dropRarity: "1/400",  dropRarityNum: 1/400  },
  { itemId: 24492, name: "Little nightmare",      slug: "little-nightmare",       category: "nightmare", sortOrder: 8, dropSource: "The Nightmare", dropRarity: "1/4000", dropRarityNum: 1/4000 },
  { itemId: 24488, name: "Parasitic egg",         slug: "parasitic-egg",          category: "nightmare", sortOrder: 9, dropSource: "The Nightmare", dropRarity: "1/200",  dropRarityNum: 1/200  },

  // ---------------------------------------------------------------------------
  // BOSSES — OBOR
  // ---------------------------------------------------------------------------
  { itemId: 20756, name: "Hill giant club", slug: "hill-giant-club", category: "obor", sortOrder: 0, dropSource: "Obor", dropRarity: "1/118", dropRarityNum: 1/118 },
  { itemId: 20754, name: "Giant key",       slug: "giant-key",       category: "obor", sortOrder: 1, dropSource: "Obor", dropRarity: "1/80",  dropRarityNum: 1/80  },

  // ---------------------------------------------------------------------------
  // BOSSES — PHANTOM MUSPAH
  // ---------------------------------------------------------------------------
  { itemId: 27610, name: "Venator shard",  slug: "venator-shard",  category: "phantom-muspah", sortOrder: 0, dropSource: "Phantom Muspah", dropRarity: "1/96",  dropRarityNum: 1/96  },
  { itemId: 27627, name: "Ancient icon",   slug: "ancient-icon",   category: "phantom-muspah", sortOrder: 1, dropSource: "Phantom Muspah", dropRarity: "1/200", dropRarityNum: 1/200 },
  { itemId: 27371, name: "Mucus-slicked egg",slug: "mucus-slicked-egg",category: "phantom-muspah", sortOrder: 2, dropSource: "Phantom Muspah", dropRarity: "1/3000", dropRarityNum: 1/3000 },

  // ---------------------------------------------------------------------------
  // BOSSES — SARACHNIS
  // ---------------------------------------------------------------------------
  { itemId: 23528, name: "Sarachnis cudgel",        slug: "sarachnis-cudgel",        category: "sarachnis", sortOrder: 0, dropSource: "Sarachnis", dropRarity: "1/50",   dropRarityNum: 1/50   },
  { itemId: 23538, name: "Giant egg sac(full)",      slug: "giant-egg-sac-full",      category: "sarachnis", sortOrder: 1, dropSource: "Sarachnis", dropRarity: "1/50",   dropRarityNum: 1/50   },
  { itemId: 23531, name: "Jar of eyes",              slug: "jar-of-eyes",             category: "sarachnis", sortOrder: 2, dropSource: "Sarachnis", dropRarity: "1/2000", dropRarityNum: 1/2000 },
  { itemId: 23534, name: "Sraracha",                 slug: "sraracha",                category: "sarachnis", sortOrder: 3, dropSource: "Sarachnis", dropRarity: "1/3000", dropRarityNum: 1/3000 },

  // ---------------------------------------------------------------------------
  // BOSSES — SCORPIA
  // ---------------------------------------------------------------------------
  { itemId: 12612, name: "Odium shard 1",       slug: "odium-shard-1",       category: "scorpia", sortOrder: 0, dropSource: "Scorpia", dropRarity: "1/256",  dropRarityNum: 1/256  },
  { itemId: 12600, name: "Malediction shard 1", slug: "malediction-shard-1", category: "scorpia", sortOrder: 1, dropSource: "Scorpia", dropRarity: "1/256",  dropRarityNum: 1/256  },
  { itemId: 12648, name: "Scorpia's offspring",  slug: "scorpias-offspring",  category: "scorpia", sortOrder: 2, dropSource: "Scorpia", dropRarity: "1/2016", dropRarityNum: 1/2016 },

  // ---------------------------------------------------------------------------
  // BOSSES — SCURRIUS
  // ---------------------------------------------------------------------------
  { itemId: 28404, name: "Scurrius' spine", slug: "scurrius-spine", category: "scurrius", sortOrder: 0, dropSource: "Scurrius", dropRarity: "1/200", dropRarityNum: 1/200 },
  { itemId: 28408, name: "Pet scurrius",    slug: "pet-scurrius",   category: "scurrius", sortOrder: 1, dropSource: "Scurrius", dropRarity: "1/3000", dropRarityNum: 1/3000 },

  // ---------------------------------------------------------------------------
  // BOSSES — SKOTIZO
  // ---------------------------------------------------------------------------
  { itemId: 21273, name: "Skotos",       slug: "skotos",        category: "skotizo", sortOrder: 0, dropSource: "Skotizo", dropRarity: "1/65",  dropRarityNum: 1/65  },
  { itemId: 21275, name: "Dark claw",    slug: "dark-claw",     category: "skotizo", sortOrder: 1, dropSource: "Skotizo", dropRarity: "1/25",  dropRarityNum: 1/25  },
  { itemId: 6571,  name: "Uncut onyx",   slug: "uncut-onyx-skotizo", category: "skotizo", sortOrder: 2, dropSource: "Skotizo", dropRarity: "1/25",  dropRarityNum: 1/25  },
  { itemId: 21256, name: "Jar of darkness",slug: "jar-of-darkness", category: "skotizo", sortOrder: 3, dropSource: "Skotizo", dropRarity: "1/2500", dropRarityNum: 1/2500 },

  // ---------------------------------------------------------------------------
  // BOSSES — TEMPOROSS
  // ---------------------------------------------------------------------------
  { itemId: 25574, name: "Spirit angler's headband", slug: "spirit-anglers-headband", category: "tempoross", sortOrder: 0, dropSource: "Tempoross", dropRarity: "1/64",  dropRarityNum: 1/64  },
  { itemId: 25576, name: "Spirit angler's top",      slug: "spirit-anglers-top",      category: "tempoross", sortOrder: 1, dropSource: "Tempoross", dropRarity: "1/64",  dropRarityNum: 1/64  },
  { itemId: 25578, name: "Spirit angler's waders",   slug: "spirit-anglers-waders",   category: "tempoross", sortOrder: 2, dropSource: "Tempoross", dropRarity: "1/64",  dropRarityNum: 1/64  },
  { itemId: 25580, name: "Spirit angler's boots",    slug: "spirit-anglers-boots",    category: "tempoross", sortOrder: 3, dropSource: "Tempoross", dropRarity: "1/64",  dropRarityNum: 1/64  },
  { itemId: 25582, name: "Tackle box",               slug: "tackle-box",              category: "tempoross", sortOrder: 4, dropSource: "Tempoross", dropRarity: "1/100", dropRarityNum: 1/100 },
  { itemId: 25584, name: "Big harpoonfish",           slug: "big-harpoonfish",         category: "tempoross", sortOrder: 5, dropSource: "Tempoross", dropRarity: "1/25",  dropRarityNum: 1/25  },
  { itemId: 25588, name: "Tome of water (empty)",    slug: "tome-of-water-empty",     category: "tempoross", sortOrder: 6, dropSource: "Tempoross", dropRarity: "1/100", dropRarityNum: 1/100 },

  // ---------------------------------------------------------------------------
  // BOSSES — THERMONUCLEAR SMOKE DEVIL
  // ---------------------------------------------------------------------------
  { itemId: 11998, name: "Smoke battlestaff", slug: "smoke-battlestaff",  category: "thermonuclear-smoke-devil", sortOrder: 0, dropSource: "Thermonuclear Smoke Devil", dropRarity: "1/512",  dropRarityNum: 1/512  },
  { itemId: 12002, name: "Occult necklace",   slug: "occult-necklace",    category: "thermonuclear-smoke-devil", sortOrder: 1, dropSource: "Thermonuclear Smoke Devil", dropRarity: "1/512",  dropRarityNum: 1/512  },
  { itemId: 12000, name: "Jar of smoke",      slug: "jar-of-smoke",       category: "thermonuclear-smoke-devil", sortOrder: 2, dropSource: "Thermonuclear Smoke Devil", dropRarity: "1/2000", dropRarityNum: 1/2000 },
  { itemId: 12013, name: "Pet smoke devil",   slug: "pet-smoke-devil",    category: "thermonuclear-smoke-devil", sortOrder: 3, dropSource: "Thermonuclear Smoke Devil", dropRarity: "1/3000", dropRarityNum: 1/3000 },

  // ---------------------------------------------------------------------------
  // BOSSES — TZKAL-ZUK
  // ---------------------------------------------------------------------------
  { itemId: 21295, name: "Infernal cape",slug: "infernal-cape",category: "tzkal-zuk", sortOrder: 0, dropSource: "TzKal-Zuk", dropRarity: "Guaranteed (first kill)" },
  { itemId: 21291, name: "Jal-nib-rek",  slug: "jal-nib-rek",  category: "tzkal-zuk", sortOrder: 1, dropSource: "TzKal-Zuk", dropRarity: "1/100", dropRarityNum: 1/100 },

  // ---------------------------------------------------------------------------
  // BOSSES — TZTOK-JAD
  // ---------------------------------------------------------------------------
  { itemId: 6570,  name: "Fire cape",  slug: "fire-cape",   category: "tztok-jad", sortOrder: 0, dropSource: "TzTok-Jad", dropRarity: "Guaranteed (first kill)" },
  { itemId: 13225, name: "TzRek-Jad", slug: "tzrek-jad",   category: "tztok-jad", sortOrder: 1, dropSource: "TzTok-Jad", dropRarity: "1/200", dropRarityNum: 1/200 },

  // ---------------------------------------------------------------------------
  // BOSSES — VARDORVIS
  // ---------------------------------------------------------------------------
  { itemId: 28248,  name: "Blood quartz",  slug: "blood-quartz",          category: "vardorvis", sortOrder: 0, dropSource: "Vardorvis", dropRarity: "1/200",  dropRarityNum: 1/200  },
  { itemId: 28285,  name: "Ultor vestige", slug: "ultor-vestige",         category: "vardorvis", sortOrder: 1, dropSource: "Vardorvis", dropRarity: "1/90",   dropRarityNum: 1/90   },
  { itemId: 228275, name: "Chromium ingot",slug: "chromium-ingot-vardorvis",category: "vardorvis", sortOrder: 2, dropSource: "Vardorvis", dropRarity: "1/60",   dropRarityNum: 1/60   },
  { itemId: 228321, name: "Awakener's orb",slug: "awakeners-orb-vardorvis",category: "vardorvis", sortOrder: 3, dropSource: "Vardorvis", dropRarity: "1/200",  dropRarityNum: 1/200  },

  // ---------------------------------------------------------------------------
  // BOSSES — VENENATIS
  // ---------------------------------------------------------------------------
  { itemId: 13179,  name: "Venenatis spiderling",slug: "venenatis-spiderling",  category: "venenatis", sortOrder: 0, dropSource: "Venenatis", dropRarity: "1/2000", dropRarityNum: 1/2000 },
  { itemId: 13200,  name: "Treasonous ring",     slug: "treasonous-ring",       category: "venenatis", sortOrder: 1, dropSource: "Venenatis", dropRarity: "1/512",  dropRarityNum: 1/512  },
  { itemId: 211920, name: "Dragon pickaxe",      slug: "dragon-pickaxe-venenatis",category: "venenatis", sortOrder: 2, dropSource: "Venenatis", dropRarity: "1/171",  dropRarityNum: 1/171  },
  { itemId: 27688,  name: "Voidwaker hilt",      slug: "voidwaker-hilt",        category: "venenatis", sortOrder: 3, dropSource: "Venenatis", dropRarity: "1/360",  dropRarityNum: 1/360  },

  // ---------------------------------------------------------------------------
  // BOSSES — VET'ION
  // ---------------------------------------------------------------------------
  { itemId: 13177,  name: "Vet'ion jr.",    slug: "vetion-jr",                  category: "vetion", sortOrder: 0, dropSource: "Vet'ion", dropRarity: "1/2000", dropRarityNum: 1/2000 },
  { itemId: 213196, name: "Tyrannical ring",slug: "tyrannical-ring-vetion",     category: "vetion", sortOrder: 1, dropSource: "Vet'ion", dropRarity: "1/512",  dropRarityNum: 1/512  },
  { itemId: 311920, name: "Dragon pickaxe", slug: "dragon-pickaxe-vetion",      category: "vetion", sortOrder: 2, dropSource: "Vet'ion", dropRarity: "1/171",  dropRarityNum: 1/171  },
  { itemId: 227692, name: "Voidwaker gem",  slug: "voidwaker-gem-vetion",       category: "vetion", sortOrder: 3, dropSource: "Vet'ion", dropRarity: "1/360",  dropRarityNum: 1/360  },

  // ---------------------------------------------------------------------------
  // BOSSES — VORKATH
  // ---------------------------------------------------------------------------
  { itemId: 22115,  name: "Dragonbone necklace", slug: "dragonbone-necklace",       category: "vorkath", sortOrder: 0, dropSource: "Vorkath", dropRarity: "1/1000", dropRarityNum: 1/1000 },
  { itemId: 22006,  name: "Skeletal visage",      slug: "skeletal-visage",           category: "vorkath", sortOrder: 1, dropSource: "Vorkath", dropRarity: "1/5000", dropRarityNum: 1/5000 },
  { itemId: 22111,  name: "Vorkath's head",       slug: "vorkaths-head",             category: "vorkath", sortOrder: 2, dropSource: "Vorkath", dropRarity: "1/50",   dropRarityNum: 1/50   },
  { itemId: 111286, name: "Draconic visage",       slug: "draconic-visage-vorkath",   category: "vorkath", sortOrder: 3, dropSource: "Vorkath", dropRarity: "1/5000", dropRarityNum: 1/5000 },
  { itemId: 21992,  name: "Vorki",                slug: "vorki",                     category: "vorkath", sortOrder: 4, dropSource: "Vorkath", dropRarity: "1/3000", dropRarityNum: 1/3000 },

  // ---------------------------------------------------------------------------
  // BOSSES — THE WHISPERER
  // ---------------------------------------------------------------------------
  { itemId: 28289,  name: "Bellator vestige",     slug: "bellator-vestige",          category: "whisperer", sortOrder: 0, dropSource: "The Whisperer", dropRarity: "1/90",  dropRarityNum: 1/90  },
  { itemId: 328275, name: "Chromium ingot",        slug: "chromium-ingot-whisperer",  category: "whisperer", sortOrder: 1, dropSource: "The Whisperer", dropRarity: "1/60",  dropRarityNum: 1/60  },
  { itemId: 328321, name: "Awakener's orb",        slug: "awakeners-orb-whisperer",   category: "whisperer", sortOrder: 2, dropSource: "The Whisperer", dropRarity: "1/200", dropRarityNum: 1/200 },
  { itemId: 28262,  name: "Eye of the whisperer",  slug: "eye-of-the-whisperer",      category: "whisperer", sortOrder: 3, dropSource: "The Whisperer", dropRarity: "1/200", dropRarityNum: 1/200 },

  // ---------------------------------------------------------------------------
  // BOSSES — WINTERTODT
  // ---------------------------------------------------------------------------
  { itemId: 20693, name: "Phoenix",           slug: "phoenix",           category: "wintertodt", sortOrder: 0, dropSource: "Wintertodt", dropRarity: "1/5000", dropRarityNum: 1/5000 },
  { itemId: 20714, name: "Tome of fire (empty)",slug: "tome-of-fire-empty", category: "wintertodt", sortOrder: 1, dropSource: "Wintertodt", dropRarity: "1/1000", dropRarityNum: 1/1000 },
  { itemId: 20720, name: "Bruma torch",        slug: "bruma-torch",       category: "wintertodt", sortOrder: 2, dropSource: "Wintertodt", dropRarity: "1/150",  dropRarityNum: 1/150  },
  { itemId: 20707, name: "Pyromancer hood",    slug: "pyromancer-hood",   category: "wintertodt", sortOrder: 3, dropSource: "Wintertodt", dropRarity: "1/150",  dropRarityNum: 1/150  },
  { itemId: 20709, name: "Pyromancer garb",    slug: "pyromancer-garb",   category: "wintertodt", sortOrder: 4, dropSource: "Wintertodt", dropRarity: "1/150",  dropRarityNum: 1/150  },
  { itemId: 20710, name: "Pyromancer robe",    slug: "pyromancer-robe",   category: "wintertodt", sortOrder: 5, dropSource: "Wintertodt", dropRarity: "1/150",  dropRarityNum: 1/150  },
  { itemId: 20711, name: "Pyromancer boots",   slug: "pyromancer-boots",  category: "wintertodt", sortOrder: 6, dropSource: "Wintertodt", dropRarity: "1/150",  dropRarityNum: 1/150  },

  // ---------------------------------------------------------------------------
  // BOSSES — ZALCANO
  // ---------------------------------------------------------------------------
  { itemId: 23849, name: "Smolcano",            slug: "smolcano",            category: "zalcano", sortOrder: 0, dropSource: "Zalcano", dropRarity: "1/2250", dropRarityNum: 1/2250 },
  { itemId: 23927, name: "Zalcano shard",       slug: "zalcano-shard",       category: "zalcano", sortOrder: 1, dropSource: "Zalcano", dropRarity: "1/500",  dropRarityNum: 1/500  },
  { itemId: 23956, name: "Crystal armour seed", slug: "crystal-armour-seed-zalcano",  category: "zalcano", sortOrder: 2, dropSource: "Zalcano", dropRarity: "1/100",  dropRarityNum: 1/100  },
  { itemId: 23942, name: "Crystal tool seed",   slug: "crystal-tool-seed-zalcano",   category: "zalcano", sortOrder: 3, dropSource: "Zalcano", dropRarity: "1/200",  dropRarityNum: 1/200  },
  { itemId: 23906, name: "Crystal weapon seed", slug: "crystal-weapon-seed-zalcano", category: "zalcano", sortOrder: 4, dropSource: "Zalcano", dropRarity: "1/200",  dropRarityNum: 1/200  },

  // ---------------------------------------------------------------------------
  // BOSSES — ZULRAH
  // ---------------------------------------------------------------------------
  { itemId: 12922, name: "Tanzanite fang",    slug: "tanzanite-fang",    category: "zulrah", sortOrder: 0, dropSource: "Zulrah", dropRarity: "1/512",   dropRarityNum: 1/512   },
  { itemId: 12932, name: "Magic fang",        slug: "magic-fang",        category: "zulrah", sortOrder: 1, dropSource: "Zulrah", dropRarity: "1/512",   dropRarityNum: 1/512   },
  { itemId: 12927, name: "Serpentine visage", slug: "serpentine-visage", category: "zulrah", sortOrder: 2, dropSource: "Zulrah", dropRarity: "1/512",   dropRarityNum: 1/512   },
  { itemId: 12901, name: "Tanzanite mutagen", slug: "tanzanite-mutagen", category: "zulrah", sortOrder: 3, dropSource: "Zulrah", dropRarity: "1/13106", dropRarityNum: 1/13106 },
  { itemId: 12902, name: "Magma mutagen",     slug: "magma-mutagen",     category: "zulrah", sortOrder: 4, dropSource: "Zulrah", dropRarity: "1/13106", dropRarityNum: 1/13106 },
  { itemId: 112571,name: "Uncut onyx",        slug: "uncut-onyx-zulrah", category: "zulrah", sortOrder: 5, dropSource: "Zulrah", dropRarity: "1/128",   dropRarityNum: 1/128   },
  { itemId: 12936, name: "Jar of swamp",      slug: "jar-of-swamp",      category: "zulrah", sortOrder: 6, dropSource: "Zulrah", dropRarity: "1/2000",  dropRarityNum: 1/2000  },
  { itemId: 12938, name: "Zul-andra teleport",slug: "zul-andra-teleport",category: "zulrah", sortOrder: 7, dropSource: "Zulrah", dropRarity: "Common"  },
  { itemId: 12921, name: "Snakeling",         slug: "snakeling",         category: "zulrah", sortOrder: 8, dropSource: "Zulrah", dropRarity: "1/4000",  dropRarityNum: 1/4000  },

  // ---------------------------------------------------------------------------
  // RAIDS — CHAMBERS OF XERIC
  // ---------------------------------------------------------------------------
  { itemId: 20997, name: "Twisted bow",                  slug: "twisted-bow",                  category: "chambers-of-xeric", sortOrder: 0,  dropSource: "Chambers of Xeric", dropRarity: "Rare" },
  { itemId: 21003, name: "Elder maul",                   slug: "elder-maul",                   category: "chambers-of-xeric", sortOrder: 1,  dropSource: "Chambers of Xeric", dropRarity: "Rare" },
  { itemId: 21006, name: "Kodai insignia",               slug: "kodai-insignia",               category: "chambers-of-xeric", sortOrder: 2,  dropSource: "Chambers of Xeric", dropRarity: "Rare" },
  { itemId: 13652, name: "Dragon claws",                 slug: "dragon-claws",                 category: "chambers-of-xeric", sortOrder: 3,  dropSource: "Chambers of Xeric", dropRarity: "Rare" },
  { itemId: 21018, name: "Ancestral hat",                slug: "ancestral-hat",                category: "chambers-of-xeric", sortOrder: 4,  dropSource: "Chambers of Xeric", dropRarity: "Rare" },
  { itemId: 21021, name: "Ancestral robe top",           slug: "ancestral-robe-top",           category: "chambers-of-xeric", sortOrder: 5,  dropSource: "Chambers of Xeric", dropRarity: "Rare" },
  { itemId: 21024, name: "Ancestral robe bottom",        slug: "ancestral-robe-bottom",        category: "chambers-of-xeric", sortOrder: 6,  dropSource: "Chambers of Xeric", dropRarity: "Rare" },
  { itemId: 21015, name: "Dinh's bulwark",               slug: "dinhs-bulwark",                category: "chambers-of-xeric", sortOrder: 7,  dropSource: "Chambers of Xeric", dropRarity: "Rare" },
  { itemId: 21012, name: "Dragon hunter crossbow",       slug: "dragon-hunter-crossbow",       category: "chambers-of-xeric", sortOrder: 8,  dropSource: "Chambers of Xeric", dropRarity: "Rare" },
  { itemId: 21034, name: "Dexterous prayer scroll",      slug: "dexterous-prayer-scroll",      category: "chambers-of-xeric", sortOrder: 9,  dropSource: "Chambers of Xeric", dropRarity: "Uncommon" },
  { itemId: 21079, name: "Arcane prayer scroll",         slug: "arcane-prayer-scroll",         category: "chambers-of-xeric", sortOrder: 10, dropSource: "Chambers of Xeric", dropRarity: "Uncommon" },
  { itemId: 23073, name: "Twisted ancestral colour kit", slug: "twisted-ancestral-colour-kit", category: "chambers-of-xeric", sortOrder: 11, dropSource: "Chambers of Xeric", dropRarity: "Rare" },
  { itemId: 20851, name: "Olmlet",                       slug: "olmlet",                       category: "chambers-of-xeric", sortOrder: 12, dropSource: "Chambers of Xeric", dropRarity: "1/53", dropRarityNum: 1/53 },

  // ---------------------------------------------------------------------------
  // RAIDS — THEATRE OF BLOOD
  // ---------------------------------------------------------------------------
  { itemId: 22325, name: "Scythe of vitur (uncharged)",  slug: "scythe-of-vitur-uncharged",  category: "theatre-of-blood", sortOrder: 0,  dropSource: "Theatre of Blood", dropRarity: "Rare" },
  { itemId: 22323, name: "Sanguinesti staff (uncharged)",slug: "sanguinesti-staff-uncharged", category: "theatre-of-blood", sortOrder: 1,  dropSource: "Theatre of Blood", dropRarity: "Rare" },
  { itemId: 22324, name: "Ghrazi rapier",                slug: "ghrazi-rapier",               category: "theatre-of-blood", sortOrder: 2,  dropSource: "Theatre of Blood", dropRarity: "Rare" },
  { itemId: 22326, name: "Justiciar faceguard",          slug: "justiciar-faceguard",         category: "theatre-of-blood", sortOrder: 3,  dropSource: "Theatre of Blood", dropRarity: "Rare" },
  { itemId: 22327, name: "Justiciar chestguard",         slug: "justiciar-chestguard",        category: "theatre-of-blood", sortOrder: 4,  dropSource: "Theatre of Blood", dropRarity: "Rare" },
  { itemId: 22328, name: "Justiciar legguards",          slug: "justiciar-legguards",         category: "theatre-of-blood", sortOrder: 5,  dropSource: "Theatre of Blood", dropRarity: "Rare" },
  { itemId: 22477, name: "Avernic defender hilt",        slug: "avernic-defender-hilt",       category: "theatre-of-blood", sortOrder: 6,  dropSource: "Theatre of Blood", dropRarity: "Uncommon" },
  { itemId: 22473, name: "Lil' Zik",                     slug: "lil-zik",                     category: "theatre-of-blood", sortOrder: 7,  dropSource: "Theatre of Blood", dropRarity: "1/650",  dropRarityNum: 1/650  },
  { itemId: 22484, name: "Infernal blood shard",         slug: "infernal-blood-shard",        category: "theatre-of-blood", sortOrder: 8,  dropSource: "Theatre of Blood", dropRarity: "Rare" },
  { itemId: 22486, name: "Sanguine dust",                slug: "sanguine-dust",               category: "theatre-of-blood", sortOrder: 9,  dropSource: "Theatre of Blood", dropRarity: "Rare" },
  { itemId: 22488, name: "Sanguine ornament kit",        slug: "sanguine-ornament-kit",       category: "theatre-of-blood", sortOrder: 10, dropSource: "Theatre of Blood", dropRarity: "Rare" },
  { itemId: 22490, name: "Holy ornament kit",            slug: "holy-ornament-kit",           category: "theatre-of-blood", sortOrder: 11, dropSource: "Theatre of Blood", dropRarity: "Rare" },

  // ---------------------------------------------------------------------------
  // RAIDS — TOMBS OF AMASCUT
  // ---------------------------------------------------------------------------
  { itemId: 27277, name: "Tumeken's shadow (uncharged)", slug: "tumekens-shadow-uncharged", category: "tombs-of-amascut", sortOrder: 0,  dropSource: "Tombs of Amascut", dropRarity: "Rare" },
  { itemId: 27251, name: "Elidinis' ward (f)",           slug: "elidinis-ward-f",           category: "tombs-of-amascut", sortOrder: 1,  dropSource: "Tombs of Amascut", dropRarity: "Rare" },
  { itemId: 26219, name: "Osmumten's fang",              slug: "osmumtens-fang",            category: "tombs-of-amascut", sortOrder: 2,  dropSource: "Tombs of Amascut", dropRarity: "Rare" },
  { itemId: 27229, name: "Masori mask",                  slug: "masori-mask",               category: "tombs-of-amascut", sortOrder: 3,  dropSource: "Tombs of Amascut", dropRarity: "Rare" },
  { itemId: 27232, name: "Masori body",                  slug: "masori-body",               category: "tombs-of-amascut", sortOrder: 4,  dropSource: "Tombs of Amascut", dropRarity: "Rare" },
  { itemId: 27235, name: "Masori chaps",                 slug: "masori-chaps",              category: "tombs-of-amascut", sortOrder: 5,  dropSource: "Tombs of Amascut", dropRarity: "Rare" },
  { itemId: 27238, name: "Masori mask (f)",              slug: "masori-mask-f",             category: "tombs-of-amascut", sortOrder: 6,  dropSource: "Tombs of Amascut", dropRarity: "Rare" },
  { itemId: 27241, name: "Masori body (f)",              slug: "masori-body-f",             category: "tombs-of-amascut", sortOrder: 7,  dropSource: "Tombs of Amascut", dropRarity: "Rare" },
  { itemId: 27244, name: "Masori chaps (f)",             slug: "masori-chaps-f",            category: "tombs-of-amascut", sortOrder: 8,  dropSource: "Tombs of Amascut", dropRarity: "Rare" },
  { itemId: 25975, name: "Lightbearer",                  slug: "lightbearer",               category: "tombs-of-amascut", sortOrder: 9,  dropSource: "Tombs of Amascut", dropRarity: "Uncommon" },
  { itemId: 27275, name: "Breach of the scarab",         slug: "breach-of-the-scarab",      category: "tombs-of-amascut", sortOrder: 10, dropSource: "Tombs of Amascut", dropRarity: "Rare" },
  { itemId: 27273, name: "Eye of the corruptor",         slug: "eye-of-the-corruptor",      category: "tombs-of-amascut", sortOrder: 11, dropSource: "Tombs of Amascut", dropRarity: "Rare" },
  { itemId: 27271, name: "Jewel of the sun",             slug: "jewel-of-the-sun",          category: "tombs-of-amascut", sortOrder: 12, dropSource: "Tombs of Amascut", dropRarity: "Rare" },
  { itemId: 27269, name: "Thread of elidinis",           slug: "thread-of-elidinis",        category: "tombs-of-amascut", sortOrder: 13, dropSource: "Tombs of Amascut", dropRarity: "Rare" },
  { itemId: 27572, name: "Tumeken's guardian",           slug: "tumekens-guardian",         category: "tombs-of-amascut", sortOrder: 14, dropSource: "Tombs of Amascut", dropRarity: "1/2000", dropRarityNum: 1/2000 },

  // ---------------------------------------------------------------------------
  // CLUES — BEGINNER
  // ---------------------------------------------------------------------------
  { itemId: 544,   name: "Monk's robe top",                slug: "monks-robe-top-beginner",              category: "clue-beginner", sortOrder: 0, dropSource: "Clue Scroll (Beginner)" },
  { itemId: 542,   name: "Monk's robe",                    slug: "monks-robe-beginner",                  category: "clue-beginner", sortOrder: 1, dropSource: "Clue Scroll (Beginner)" },
  { itemId: 2635,  name: "Black beret",                    slug: "black-beret",                          category: "clue-beginner", sortOrder: 2, dropSource: "Clue Scroll (Beginner)" },
  { itemId: 7403,  name: "Sandwich lady hat",              slug: "sandwich-lady-hat",                    category: "clue-beginner", sortOrder: 3, dropSource: "Clue Scroll (Beginner)" },
  { itemId: 90001, name: "Rune scimitar ornament kit",     slug: "rune-scimitar-ornament-kit-beginner",  category: "clue-beginner", sortOrder: 4, dropSource: "Clue Scroll (Beginner)" },

  // ---------------------------------------------------------------------------
  // CLUES — EASY
  // ---------------------------------------------------------------------------
  { itemId: 1067,  name: "Black platebody",     slug: "black-platebody-clue",      category: "clue-easy", sortOrder: 0,  dropSource: "Clue Scroll (Easy)" },
  { itemId: 1069,  name: "Black platelegs",     slug: "black-platelegs-clue",      category: "clue-easy", sortOrder: 1,  dropSource: "Clue Scroll (Easy)" },
  { itemId: 2594,  name: "Steel full helm (g)", slug: "steel-full-helm-g",         category: "clue-easy", sortOrder: 2,  dropSource: "Clue Scroll (Easy)" },
  { itemId: 313,   name: "Staff of air",        slug: "staff-of-air-clue",         category: "clue-easy", sortOrder: 3,  dropSource: "Clue Scroll (Easy)" },
  { itemId: 1727,  name: "Amulet of magic",     slug: "amulet-of-magic-clue",      category: "clue-easy", sortOrder: 4,  dropSource: "Clue Scroll (Easy)" },
  { itemId: 90010, name: "Black wizard hat (g)",slug: "black-wizard-hat-g",        category: "clue-easy", sortOrder: 5,  dropSource: "Clue Scroll (Easy)" },
  { itemId: 4315,  name: "Team cape i",         slug: "team-cape-i",               category: "clue-easy", sortOrder: 6,  dropSource: "Clue Scroll (Easy)" },
  { itemId: 90011, name: "Black med helm (g)",  slug: "black-med-helm-g",          category: "clue-easy", sortOrder: 7,  dropSource: "Clue Scroll (Easy)" },
  { itemId: 90012, name: "Black shield (h1)",   slug: "black-shield-h1",           category: "clue-easy", sortOrder: 8,  dropSource: "Clue Scroll (Easy)" },
  { itemId: 90013, name: "Black platebody (h1)",slug: "black-platebody-h1",        category: "clue-easy", sortOrder: 9,  dropSource: "Clue Scroll (Easy)" },
  { itemId: 90014, name: "Black platelegs (h1)",slug: "black-platelegs-h1",        category: "clue-easy", sortOrder: 10, dropSource: "Clue Scroll (Easy)" },
  { itemId: 90015, name: "Black plateskirt (h1)",slug: "black-plateskirt-h1",      category: "clue-easy", sortOrder: 11, dropSource: "Clue Scroll (Easy)" },

  // ---------------------------------------------------------------------------
  // CLUES — MEDIUM
  // ---------------------------------------------------------------------------
  { itemId: 2577,  name: "Ranger boots",          slug: "ranger-boots",          category: "clue-medium", sortOrder: 0, dropSource: "Clue Scroll (Medium)", dropRarity: "1/1133", dropRarityNum: 1/1133 },
  { itemId: 2579,  name: "Wizard boots",          slug: "wizard-boots",          category: "clue-medium", sortOrder: 1, dropSource: "Clue Scroll (Medium)" },
  { itemId: 2605,  name: "Adamant platebody (g)", slug: "adamant-platebody-g",   category: "clue-medium", sortOrder: 2, dropSource: "Clue Scroll (Medium)" },
  { itemId: 2607,  name: "Adamant platebody (t)", slug: "adamant-platebody-t",   category: "clue-medium", sortOrder: 3, dropSource: "Clue Scroll (Medium)" },
  { itemId: 3835,  name: "Guthix page 1",         slug: "guthix-page-1",         category: "clue-medium", sortOrder: 4, dropSource: "Clue Scroll (Medium)" },
  { itemId: 3827,  name: "Saradomin page 1",      slug: "saradomin-page-1",      category: "clue-medium", sortOrder: 5, dropSource: "Clue Scroll (Medium)" },
  { itemId: 3831,  name: "Zamorak page 1",        slug: "zamorak-page-1",        category: "clue-medium", sortOrder: 6, dropSource: "Clue Scroll (Medium)" },
  { itemId: 3486,  name: "Gilded full helm",      slug: "gilded-full-helm",      category: "clue-medium", sortOrder: 7, dropSource: "Clue Scroll (Medium)" },
  { itemId: 3488,  name: "Gilded platebody",      slug: "gilded-platebody",      category: "clue-medium", sortOrder: 8, dropSource: "Clue Scroll (Medium)" },
  { itemId: 3490,  name: "Gilded platelegs",      slug: "gilded-platelegs",      category: "clue-medium", sortOrder: 9, dropSource: "Clue Scroll (Medium)" },

  // ---------------------------------------------------------------------------
  // CLUES — HARD
  // ---------------------------------------------------------------------------
  { itemId: 2615,   name: "Rune platebody (g)",  slug: "rune-platebody-g",    category: "clue-hard", sortOrder: 0, dropSource: "Clue Scroll (Hard)" },
  { itemId: 2617,   name: "Rune platebody (t)",  slug: "rune-platebody-t",    category: "clue-hard", sortOrder: 1, dropSource: "Clue Scroll (Hard)" },
  { itemId: 2581,   name: "Robin hood hat",       slug: "robin-hood-hat",      category: "clue-hard", sortOrder: 2, dropSource: "Clue Scroll (Hard)", dropRarity: "1/1133", dropRarityNum: 1/1133 },
  { itemId: 3480,   name: "Gilded scimitar",      slug: "gilded-scimitar",     category: "clue-hard", sortOrder: 3, dropSource: "Clue Scroll (Hard)" },
  { itemId: 3492,   name: "Gilded kiteshield",    slug: "gilded-kiteshield",   category: "clue-hard", sortOrder: 4, dropSource: "Clue Scroll (Hard)" },
  { itemId: 190001, name: "Bandos page 1",        slug: "bandos-page-1",       category: "clue-hard", sortOrder: 5, dropSource: "Clue Scroll (Hard)" },
  { itemId: 190002, name: "Ancient page 1",       slug: "ancient-page-1",      category: "clue-hard", sortOrder: 6, dropSource: "Clue Scroll (Hard)" },
  { itemId: 190003, name: "Dragon platelegs (g)", slug: "dragon-platelegs-g",  category: "clue-hard", sortOrder: 7, dropSource: "Clue Scroll (Hard)" },
  { itemId: 190004, name: "Dragon plateskirt (g)",slug: "dragon-plateskirt-g", category: "clue-hard", sortOrder: 8, dropSource: "Clue Scroll (Hard)" },
  { itemId: 190005, name: "Rune helm (h1)",       slug: "rune-helm-h1",        category: "clue-hard", sortOrder: 9, dropSource: "Clue Scroll (Hard)" },

  // ---------------------------------------------------------------------------
  // CLUES — ELITE
  // ---------------------------------------------------------------------------
  { itemId: 10350,  name: "3rd age full helmet",slug: "3rd-age-full-helmet", category: "clue-elite", sortOrder: 0, dropSource: "Clue Scroll (Elite)", dropRarity: "1/43000", dropRarityNum: 1/43000 },
  { itemId: 10348,  name: "3rd age platebody",  slug: "3rd-age-platebody",   category: "clue-elite", sortOrder: 1, dropSource: "Clue Scroll (Elite)", dropRarity: "1/43000", dropRarityNum: 1/43000 },
  { itemId: 10346,  name: "3rd age platelegs",  slug: "3rd-age-platelegs",   category: "clue-elite", sortOrder: 2, dropSource: "Clue Scroll (Elite)", dropRarity: "1/43000", dropRarityNum: 1/43000 },
  { itemId: 10352,  name: "3rd age kiteshield", slug: "3rd-age-kiteshield",  category: "clue-elite", sortOrder: 3, dropSource: "Clue Scroll (Elite)", dropRarity: "1/43000", dropRarityNum: 1/43000 },
  { itemId: 10342,  name: "3rd age mage hat",   slug: "3rd-age-mage-hat",    category: "clue-elite", sortOrder: 4, dropSource: "Clue Scroll (Elite)", dropRarity: "1/43000", dropRarityNum: 1/43000 },
  { itemId: 10340,  name: "3rd age robe top",   slug: "3rd-age-robe-top",    category: "clue-elite", sortOrder: 5, dropSource: "Clue Scroll (Elite)", dropRarity: "1/43000", dropRarityNum: 1/43000 },
  { itemId: 10338,  name: "3rd age robe",       slug: "3rd-age-robe",        category: "clue-elite", sortOrder: 6, dropSource: "Clue Scroll (Elite)", dropRarity: "1/43000", dropRarityNum: 1/43000 },
  { itemId: 10344,  name: "3rd age bow",        slug: "3rd-age-bow",         category: "clue-elite", sortOrder: 7, dropSource: "Clue Scroll (Elite)", dropRarity: "1/43000", dropRarityNum: 1/43000 },
  { itemId: 12430,  name: "Ranger gloves",      slug: "ranger-gloves",       category: "clue-elite", sortOrder: 8, dropSource: "Clue Scroll (Elite)" },
  { itemId: 290001, name: "Berserker ring (i)",  slug: "berserker-ring-i",    category: "clue-elite", sortOrder: 9, dropSource: "Clue Scroll (Elite)" },

  // ---------------------------------------------------------------------------
  // CLUES — MASTER
  // ---------------------------------------------------------------------------
  { itemId: 19730,  name: "Bloodhound",                    slug: "bloodhound",                    category: "clue-master", sortOrder: 0, dropSource: "Clue Scroll (Master)", dropRarity: "1/1000", dropRarityNum: 1/1000 },
  { itemId: 25441,  name: "Ghommal's hilt 1",              slug: "ghommals-hilt-1",               category: "clue-master", sortOrder: 1, dropSource: "Clue Scroll (Master)" },
  { itemId: 25445,  name: "Ghommal's avernic defender 5",  slug: "ghommals-avernic-defender-5",   category: "clue-master", sortOrder: 2, dropSource: "Clue Scroll (Master)" },
  { itemId: 290010, name: "Ghommal's lucky penny",          slug: "ghommals-lucky-penny",          category: "clue-master", sortOrder: 3, dropSource: "Clue Scroll (Master)" },
  { itemId: 20011,  name: "3rd age axe",                   slug: "3rd-age-axe",                   category: "clue-master", sortOrder: 4, dropSource: "Clue Scroll (Master)", dropRarity: "1/313168", dropRarityNum: 1/313168 },
  { itemId: 20014,  name: "3rd age pickaxe",               slug: "3rd-age-pickaxe",               category: "clue-master", sortOrder: 5, dropSource: "Clue Scroll (Master)", dropRarity: "1/313168", dropRarityNum: 1/313168 },
  { itemId: 290011, name: "3rd age longsword",              slug: "3rd-age-longsword",             category: "clue-master", sortOrder: 6, dropSource: "Clue Scroll (Master)" },
  { itemId: 12524,  name: "3rd age druidic robe top",      slug: "3rd-age-druidic-robe-top",      category: "clue-master", sortOrder: 7, dropSource: "Clue Scroll (Master)" },

  // ---------------------------------------------------------------------------
  // MINIGAMES — BARBARIAN ASSAULT
  // ---------------------------------------------------------------------------
  { itemId: 10551, name: "Fighter torso",  slug: "fighter-torso",  category: "barbarian-assault", sortOrder: 0, dropSource: "Barbarian Assault" },
  { itemId: 12703, name: "Penance queen",  slug: "penance-queen",  category: "barbarian-assault", sortOrder: 1, dropSource: "Barbarian Assault", dropRarity: "1/1000", dropRarityNum: 1/1000 },
  { itemId: 10553, name: "Fighter hat",    slug: "fighter-hat",    category: "barbarian-assault", sortOrder: 2, dropSource: "Barbarian Assault" },
  { itemId: 10555, name: "Ranger hat",     slug: "ranger-hat",     category: "barbarian-assault", sortOrder: 3, dropSource: "Barbarian Assault" },
  { itemId: 10557, name: "Healer hat",     slug: "healer-hat",     category: "barbarian-assault", sortOrder: 4, dropSource: "Barbarian Assault" },
  { itemId: 10559, name: "Runner hat",     slug: "runner-hat",     category: "barbarian-assault", sortOrder: 5, dropSource: "Barbarian Assault" },

  // ---------------------------------------------------------------------------
  // MINIGAMES — THE GAUNTLET
  // ---------------------------------------------------------------------------
  { itemId: 323956, name: "Crystal armour seed",          slug: "crystal-armour-seed-gauntlet",  category: "gauntlet", sortOrder: 0, dropSource: "The Gauntlet" },
  { itemId: 323906, name: "Crystal weapon seed",          slug: "crystal-weapon-seed-gauntlet",  category: "gauntlet", sortOrder: 1, dropSource: "The Gauntlet" },
  { itemId: 24364,  name: "Enhanced crystal weapon seed", slug: "enhanced-crystal-weapon-seed",  category: "gauntlet", sortOrder: 2, dropSource: "The Corrupted Gauntlet", dropRarity: "1/400", dropRarityNum: 1/400 },
  { itemId: 23855,  name: "Youngllef",                    slug: "youngllef",                     category: "gauntlet", sortOrder: 3, dropSource: "The Gauntlet", dropRarity: "1/2000", dropRarityNum: 1/2000 },

  // ---------------------------------------------------------------------------
  // MINIGAMES — LAST MAN STANDING
  // ---------------------------------------------------------------------------
  { itemId: 390001, name: "Deadman's chest",    slug: "deadmans-chest",    category: "last-man-standing", sortOrder: 0, dropSource: "Last Man Standing" },
  { itemId: 390002, name: "Deadman's legs",     slug: "deadmans-legs",     category: "last-man-standing", sortOrder: 1, dropSource: "Last Man Standing" },
  { itemId: 390003, name: "Deadman's cape",     slug: "deadmans-cape",     category: "last-man-standing", sortOrder: 2, dropSource: "Last Man Standing" },
  { itemId: 390004, name: "Dragon hunter lance",slug: "dragon-hunter-lance",category: "last-man-standing", sortOrder: 3, dropSource: "Last Man Standing" },
  { itemId: 390005, name: "Crystal halberd",    slug: "crystal-halberd",   category: "last-man-standing", sortOrder: 4, dropSource: "Last Man Standing" },

  // ---------------------------------------------------------------------------
  // MINIGAMES — PEST CONTROL
  // ---------------------------------------------------------------------------
  { itemId: 11665, name: "Void melee helm",  slug: "void-melee-helm",  category: "pest-control", sortOrder: 0, dropSource: "Pest Control" },
  { itemId: 11664, name: "Void ranger helm", slug: "void-ranger-helm", category: "pest-control", sortOrder: 1, dropSource: "Pest Control" },
  { itemId: 11663, name: "Void mage helm",   slug: "void-mage-helm",   category: "pest-control", sortOrder: 2, dropSource: "Pest Control" },
  { itemId: 8839,  name: "Void knight top",  slug: "void-knight-top",  category: "pest-control", sortOrder: 3, dropSource: "Pest Control" },
  { itemId: 8840,  name: "Void knight robe", slug: "void-knight-robe", category: "pest-control", sortOrder: 4, dropSource: "Pest Control" },
  { itemId: 8842,  name: "Void knight gloves",slug: "void-knight-gloves",category: "pest-control", sortOrder: 5, dropSource: "Pest Control" },
  { itemId: 13072, name: "Elite void top",   slug: "elite-void-top",   category: "pest-control", sortOrder: 6, dropSource: "Pest Control" },
  { itemId: 13073, name: "Elite void robe",  slug: "elite-void-robe",  category: "pest-control", sortOrder: 7, dropSource: "Pest Control" },

  // ---------------------------------------------------------------------------
  // MINIGAMES — ROGUES' DEN
  // ---------------------------------------------------------------------------
  { itemId: 5554, name: "Rogue mask",     slug: "rogue-mask",     category: "rogues-den", sortOrder: 0, dropSource: "Rogues' Den" },
  { itemId: 5557, name: "Rogue top",      slug: "rogue-top",      category: "rogues-den", sortOrder: 1, dropSource: "Rogues' Den" },
  { itemId: 5558, name: "Rogue trousers", slug: "rogue-trousers", category: "rogues-den", sortOrder: 2, dropSource: "Rogues' Den" },
  { itemId: 5556, name: "Rogue gloves",   slug: "rogue-gloves",   category: "rogues-den", sortOrder: 3, dropSource: "Rogues' Den" },
  { itemId: 5555, name: "Rogue boots",    slug: "rogue-boots",    category: "rogues-den", sortOrder: 4, dropSource: "Rogues' Den" },

  // ---------------------------------------------------------------------------
  // MINIGAMES — HALLOWED SEPULCHRE
  // ---------------------------------------------------------------------------
  { itemId: 490001, name: "Ring of endurance",       slug: "ring-of-endurance",       category: "hallowed-sepulchre", sortOrder: 0, dropSource: "Hallowed Sepulchre" },
  { itemId: 24733,  name: "Dark acorn",               slug: "dark-acorn",              category: "hallowed-sepulchre", sortOrder: 1, dropSource: "Hallowed Sepulchre", dropRarity: "1/250", dropRarityNum: 1/250 },
  { itemId: 490002, name: "Strange old lockpick",     slug: "strange-old-lockpick",    category: "hallowed-sepulchre", sortOrder: 2, dropSource: "Hallowed Sepulchre" },
  { itemId: 490003, name: "Hallowed crystal shard",   slug: "hallowed-crystal-shard",  category: "hallowed-sepulchre", sortOrder: 3, dropSource: "Hallowed Sepulchre" },

  // ---------------------------------------------------------------------------
  // MINIGAMES — SHOOTING STARS
  // ---------------------------------------------------------------------------
  { itemId: 490010, name: "Star fragment",    slug: "star-fragment",    category: "shooting-stars", sortOrder: 0, dropSource: "Shooting Stars" },
  { itemId: 490011, name: "Celestial ring",   slug: "celestial-ring",   category: "shooting-stars", sortOrder: 1, dropSource: "Shooting Stars" },
  { itemId: 490012, name: "Celestial signet", slug: "celestial-signet", category: "shooting-stars", sortOrder: 2, dropSource: "Shooting Stars" },

  // ---------------------------------------------------------------------------
  // MINIGAMES — SOUL WARS
  // ---------------------------------------------------------------------------
  { itemId: 490020, name: "Ectoplasmator",             slug: "ectoplasmator",              category: "soul-wars", sortOrder: 0, dropSource: "Soul Wars" },
  { itemId: 490021, name: "Spoils of war",             slug: "spoils-of-war",              category: "soul-wars", sortOrder: 1, dropSource: "Soul Wars" },
  { itemId: 490022, name: "Pet zilyana (Soul Wars)",   slug: "pet-zilyana-soul-wars",      category: "soul-wars", sortOrder: 2, dropSource: "Soul Wars" },

  // ---------------------------------------------------------------------------
  // MINIGAMES — VOLCANIC MINE
  // ---------------------------------------------------------------------------
  { itemId: 490030, name: "Ash covered tome",      slug: "ash-covered-tome",      category: "volcanic-mine", sortOrder: 0, dropSource: "Volcanic Mine" },
  { itemId: 490031, name: "Volcanic mine teleport",slug: "volcanic-mine-teleport", category: "volcanic-mine", sortOrder: 1, dropSource: "Volcanic Mine" },

  // ---------------------------------------------------------------------------
  // OTHER — AERIAL FISHING
  // ---------------------------------------------------------------------------
  { itemId: 22840, name: "Golden tench",slug: "golden-tench",category: "aerial-fishing", sortOrder: 0, dropSource: "Aerial Fishing", dropRarity: "1/5000", dropRarityNum: 1/5000 },
  { itemId: 22820, name: "Molch pearl", slug: "molch-pearl", category: "aerial-fishing", sortOrder: 1, dropSource: "Aerial Fishing" },

  // ---------------------------------------------------------------------------
  // OTHER — CAMDOZAAL
  // ---------------------------------------------------------------------------
  { itemId: 590001, name: "Barronite handle",slug: "barronite-handle",category: "camdozaal", sortOrder: 0, dropSource: "Camdozaal" },
  { itemId: 590002, name: "Barronite head",  slug: "barronite-head",  category: "camdozaal", sortOrder: 1, dropSource: "Camdozaal" },
  { itemId: 26424,  name: "Barronite mace",  slug: "barronite-mace",  category: "camdozaal", sortOrder: 2, dropSource: "Camdozaal" },

  // ---------------------------------------------------------------------------
  // OTHER — GUARDIANS OF THE RIFT
  // ---------------------------------------------------------------------------
  { itemId: 26822,  name: "Abyssal lantern",  slug: "abyssal-lantern",  category: "gotr", sortOrder: 0, dropSource: "Guardians of the Rift" },
  { itemId: 26811,  name: "Abyssal needle",   slug: "abyssal-needle",   category: "gotr", sortOrder: 1, dropSource: "Guardians of the Rift" },
  { itemId: 590010, name: "Abyssal blue dye", slug: "abyssal-blue-dye", category: "gotr", sortOrder: 2, dropSource: "Guardians of the Rift" },
  { itemId: 590011, name: "Abyssal green dye",slug: "abyssal-green-dye",category: "gotr", sortOrder: 3, dropSource: "Guardians of the Rift" },
  { itemId: 590012, name: "Abyssal red dye",  slug: "abyssal-red-dye",  category: "gotr", sortOrder: 4, dropSource: "Guardians of the Rift" },
  { itemId: 590013, name: "Runecraft hood",   slug: "runecraft-hood",   category: "gotr", sortOrder: 5, dropSource: "Guardians of the Rift" },
  { itemId: 26910,  name: "Raiments of the Eye",slug: "raiments-of-the-eye",category: "gotr", sortOrder: 6, dropSource: "Guardians of the Rift" },

  // ---------------------------------------------------------------------------
  // OTHER — PETS
  // ---------------------------------------------------------------------------
  { itemId: 13323,  name: "Baby chinchompa",      slug: "baby-chinchompa",      category: "pets", sortOrder: 0,  dropSource: "Various" },
  { itemId: 712653, name: "Prince black dragon",  slug: "prince-black-dragon-pet", category: "pets", sortOrder: 1,  dropSource: "King Black Dragon",    dropRarity: "1/3000", dropRarityNum: 1/3000 },
  { itemId: 712647, name: "Kalphite princess",    slug: "kalphite-princess-pet", category: "pets", sortOrder: 2,  dropSource: "Kalphite Queen",       dropRarity: "1/3000", dropRarityNum: 1/3000 },
  { itemId: 712646, name: "Baby mole",            slug: "baby-mole-pet",         category: "pets", sortOrder: 3,  dropSource: "Giant Mole",           dropRarity: "1/3000", dropRarityNum: 1/3000 },
  { itemId: 713225, name: "TzRek-Jad",            slug: "tzrek-jad-pet",         category: "pets", sortOrder: 4,  dropSource: "TzTok-Jad",            dropRarity: "1/200",  dropRarityNum: 1/200  },
  { itemId: 720851, name: "Olmlet",               slug: "olmlet-pet",            category: "pets", sortOrder: 5,  dropSource: "Chambers of Xeric",    dropRarity: "1/53",   dropRarityNum: 1/53   },
  { itemId: 712009, name: "Pet kraken",           slug: "pet-kraken-pets",       category: "pets", sortOrder: 6,  dropSource: "Kraken",               dropRarity: "1/3000", dropRarityNum: 1/3000 },
  { itemId: 711995, name: "Pet chaos elemental",  slug: "pet-chaos-elemental-pets",category: "pets", sortOrder: 7, dropSource: "Chaos Elemental",     dropRarity: "1/300",  dropRarityNum: 1/300  },
  { itemId: 712648, name: "Scorpia's offspring",  slug: "scorpias-offspring-pet",category: "pets", sortOrder: 8,  dropSource: "Scorpia",              dropRarity: "1/2016", dropRarityNum: 1/2016 },
  { itemId: 713175, name: "Callisto cub",         slug: "callisto-cub-pet",      category: "pets", sortOrder: 9,  dropSource: "Callisto",             dropRarity: "1/2000", dropRarityNum: 1/2000 },
  { itemId: 713179, name: "Venenatis spiderling", slug: "venenatis-spiderling-pet",category: "pets", sortOrder: 10, dropSource: "Venenatis",          dropRarity: "1/2000", dropRarityNum: 1/2000 },
  { itemId: 713177, name: "Vet'ion jr.",          slug: "vetion-jr-pet",         category: "pets", sortOrder: 11, dropSource: "Vet'ion",              dropRarity: "1/2000", dropRarityNum: 1/2000 },
  { itemId: 722473, name: "Lil' Zik",             slug: "lil-zik-pet",           category: "pets", sortOrder: 12, dropSource: "Theatre of Blood",     dropRarity: "1/650",  dropRarityNum: 1/650  },
  { itemId: 721992, name: "Vorki",                slug: "vorki-pet",             category: "pets", sortOrder: 13, dropSource: "Vorkath",              dropRarity: "1/3000", dropRarityNum: 1/3000 },
  { itemId: 726348, name: "Nexling",              slug: "nexling-pet",           category: "pets", sortOrder: 14, dropSource: "Nex",                  dropRarity: "1/3000", dropRarityNum: 1/3000 },

  // ---------------------------------------------------------------------------
  // OTHER — MISCELLANEOUS
  // ---------------------------------------------------------------------------
  { itemId: 987,    name: "Half of a key",     slug: "half-of-a-key",    category: "miscellaneous", sortOrder: 0, dropSource: "Various" },
  { itemId: 12073,  name: "Clue scroll (elite)",slug: "clue-scroll-elite",category: "miscellaneous", sortOrder: 1, dropSource: "Various" },
  { itemId: 800001, name: "Ancient casket",    slug: "ancient-casket",   category: "miscellaneous", sortOrder: 2, dropSource: "Various" },

  // ---------------------------------------------------------------------------
  // OTHER — SKILLING
  // ---------------------------------------------------------------------------
  { itemId: 800010, name: "Golden nugget",       slug: "golden-nugget",       category: "skilling", sortOrder: 0, dropSource: "Motherlode Mine" },
  { itemId: 800011, name: "Prospector helmet",   slug: "prospector-helmet",   category: "skilling", sortOrder: 1, dropSource: "Motherlode Mine" },
  { itemId: 800012, name: "Prospector jacket",   slug: "prospector-jacket",   category: "skilling", sortOrder: 2, dropSource: "Motherlode Mine" },
  { itemId: 800013, name: "Prospector legs",     slug: "prospector-legs",     category: "skilling", sortOrder: 3, dropSource: "Motherlode Mine" },
  { itemId: 800014, name: "Prospector boots",    slug: "prospector-boots",    category: "skilling", sortOrder: 4, dropSource: "Motherlode Mine" },
  { itemId: 800015, name: "Angler hat",          slug: "angler-hat",          category: "skilling", sortOrder: 5, dropSource: "Fishing Trawler" },
  { itemId: 800016, name: "Angler top",          slug: "angler-top",          category: "skilling", sortOrder: 6, dropSource: "Fishing Trawler" },
  { itemId: 800017, name: "Angler waders",       slug: "angler-waders",       category: "skilling", sortOrder: 7, dropSource: "Fishing Trawler" },
  { itemId: 800018, name: "Angler boots",        slug: "angler-boots",        category: "skilling", sortOrder: 8, dropSource: "Fishing Trawler" },
];
