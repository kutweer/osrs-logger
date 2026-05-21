import type { AccountType } from "@/types";

// ─────────────────────────────────────────────
// Provider abstractions
// ─────────────────────────────────────────────

export interface CollectionLogEntry {
  itemId: number;
  name: string;
  obtained: boolean;
  quantity: number;
  obtainedAt?: Date | null;
}

export interface CollectionLogCategory {
  slug: string;
  name: string;
  items: CollectionLogEntry[];
}

export interface PlayerHiscoreData {
  username: string;
  accountType: AccountType;
  skills: Record<string, { level: number; xp: number; rank: number }>;
  bossKcs: Record<string, { kc: number; rank: number }>;
  clues: Record<string, { count: number; rank: number }>;
}

export interface CollectionLogData {
  username: string;
  uniqueObtained: number;
  uniqueItems: number;
  categories: CollectionLogCategory[];
}

// Each provider implements this interface
export interface CollectionLogProvider {
  name: string;
  fetchPlayer(username: string): Promise<PlayerHiscoreData | null>;
  fetchCollectionLog(username: string): Promise<CollectionLogData | null>;
}

export interface WikiItemData {
  id: number;
  name: string;
  examine?: string;
  wiki_url?: string;
  wiki_name?: string;
  icon?: string;
  members?: boolean;
  tradeable?: boolean;
  stackable?: boolean;
  noted?: boolean;
  high_alch?: number;
  low_alch?: number;
  weight?: number;
}
