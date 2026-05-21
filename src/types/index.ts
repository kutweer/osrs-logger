// ─────────────────────────────────────────────
// OSRS Domain types
// ─────────────────────────────────────────────

export type AccountType =
  | "NORMAL"
  | "IRONMAN"
  | "HARDCORE_IRONMAN"
  | "ULTIMATE_IRONMAN"
  | "GROUP_IRONMAN"
  | "HARDCORE_GROUP_IRONMAN";

export type SyncStatus =
  | "PENDING"
  | "RUNNING"
  | "SUCCESS"
  | "FAILED"
  | "RATE_LIMITED";

export type GoalType =
  | "OBTAIN_ITEM"
  | "COMPLETE_CATEGORY"
  | "COLLECTION_LOG_PERCENT"
  | "BOSS_KC"
  | "CLUE_COUNT"
  | "SKILL_LEVEL"
  | "SKILL_XP"
  | "CUSTOM";

export type GoalStatus = "NOT_STARTED" | "ACTIVE" | "COMPLETED" | "PAUSED";
export type GoalPriority = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

// ─────────────────────────────────────────────
// Player
// ─────────────────────────────────────────────

export interface Player {
  id: string;
  username: string;
  displayName?: string | null;
  accountType: AccountType;
  combatLevel?: number | null;
  totalLevel?: number | null;
  totalXp?: number | null;
  collectionLogTotal: number;
  collectionLogObtained: number;
  lastSyncedAt?: string | Date | null;
  lastSyncStatus: SyncStatus;
  syncErrorMessage?: string | null;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface PlayerWithStats extends Player {
  collectionLogPercent: number;
  categoriesCompleted: number;
  categoriesTotal: number;
  activeGoalsCount: number;
}

// ─────────────────────────────────────────────
// Collection Log
// ─────────────────────────────────────────────

export interface CollectionCategory {
  id: string;
  slug: string;
  name: string;
  parentSlug?: string | null;
  sortOrder: number;
  iconItemId?: number | null;
  description?: string | null;
  itemCount?: number;
  obtainedCount?: number;
}

export interface CollectionItem {
  id: string;
  itemId: number;
  name: string;
  slug: string;
  categoryId: string;
  sortOrder: number;
  examineText?: string | null;
  wikiUrl?: string | null;
  gePrice?: number | null;
  highAlch?: number | null;
  tradeable: boolean;
  members: boolean;
  stackable: boolean;
  noted: boolean;
  dropSource?: string | null;
  dropRarity?: string | null;
  dropRarityNum?: number | null;
}

export interface PlayerCollectionItem {
  id: string;
  playerId: string;
  itemId: string;
  categoryId: string;
  obtained: boolean;
  quantity: number;
  obtainedAt?: string | Date | null;
}

export interface CollectionItemWithStatus extends CollectionItem {
  obtained: boolean;
  quantity: number;
  obtainedAt?: string | Date | null;
}

export interface CollectionCategoryWithProgress extends CollectionCategory {
  items: CollectionItemWithStatus[];
  obtainedCount: number;
  totalCount: number;
  completionPercent: number;
}

// ─────────────────────────────────────────────
// Goals
// ─────────────────────────────────────────────

export interface Goal {
  id: string;
  userId: string;
  playerId?: string | null;
  title: string;
  description?: string | null;
  type: GoalType;
  status: GoalStatus;
  priority: GoalPriority;
  pinned: boolean;
  targetItemId?: number | null;
  targetCategoryId?: string | null;
  targetSkill?: string | null;
  targetBoss?: string | null;
  customTarget?: string | null;
  currentProgress: number;
  targetProgress: number;
  notes?: string | null;
  createdAt: string | Date;
  completedAt?: string | Date | null;
  updatedAt: string | Date;
}

export interface GoalUpdate {
  id: string;
  goalId: string;
  note?: string | null;
  progressAt: number;
  createdAt: string | Date;
}

// ─────────────────────────────────────────────
// UI helpers
// ─────────────────────────────────────────────

export type ViewMode = "grid" | "compact" | "table";

export interface SortOption {
  label: string;
  value: string;
  direction: "asc" | "desc";
}

export interface PaginationState {
  page: number;
  pageSize: number;
  total: number;
}

// ─────────────────────────────────────────────
// API responses
// ─────────────────────────────────────────────

export interface ApiSuccess<T> {
  success: true;
  data: T;
  meta?: {
    page?: number;
    pageSize?: number;
    total?: number;
  };
}

export interface ApiError {
  success: false;
  error: string;
  code?: string;
}

export type ApiResponse<T> = ApiSuccess<T> | ApiError;

// ─────────────────────────────────────────────
// OSRS Skills
// ─────────────────────────────────────────────

export const OSRS_SKILLS = [
  "Attack",
  "Defence",
  "Strength",
  "Hitpoints",
  "Ranged",
  "Prayer",
  "Magic",
  "Cooking",
  "Woodcutting",
  "Fletching",
  "Fishing",
  "Firemaking",
  "Crafting",
  "Smithing",
  "Mining",
  "Herblore",
  "Agility",
  "Thieving",
  "Slayer",
  "Farming",
  "Runecraft",
  "Hunter",
  "Construction",
] as const;

export type OsrsSkill = (typeof OSRS_SKILLS)[number];

export const ACCOUNT_TYPE_LABELS: Record<AccountType, string> = {
  NORMAL: "Normal",
  IRONMAN: "Ironman",
  HARDCORE_IRONMAN: "Hardcore Ironman",
  ULTIMATE_IRONMAN: "Ultimate Ironman",
  GROUP_IRONMAN: "Group Ironman",
  HARDCORE_GROUP_IRONMAN: "Hardcore Group Ironman",
};
