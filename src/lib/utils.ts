import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistanceToNow, format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(n: number | bigint | null | undefined): string {
  if (n === null || n === undefined) return "—";
  return Number(n).toLocaleString();
}

export function formatXp(xp: number | bigint | null | undefined): string {
  if (xp === null || xp === undefined) return "—";
  const n = Number(xp);
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(2)}B`;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toLocaleString();
}

export function formatGp(gp: number | bigint | null | undefined): string {
  if (gp === null || gp === undefined) return "—";
  const n = Number(gp);
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(2)}B gp`;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M gp`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K gp`;
  return `${n.toLocaleString()} gp`;
}

export function formatPercent(value: number, total: number): string {
  if (total === 0) return "0%";
  return `${((value / total) * 100).toFixed(1)}%`;
}

export function calcPercent(value: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((value / total) * 1000) / 10;
}

export function timeAgo(date: Date | string | null | undefined): string {
  if (!date) return "Never";
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export function formatDate(date: Date | string | null | undefined): string {
  if (!date) return "—";
  return format(new Date(date), "MMM d, yyyy");
}

export function formatDateTime(date: Date | string | null | undefined): string {
  if (!date) return "—";
  return format(new Date(date), "MMM d, yyyy 'at' h:mm a");
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getItemIconUrl(itemId: number): string {
  return `https://oldschool.runescape.wiki/images/thumb/${itemId}_bank.png`;
}

export function getWikiItemIconUrl(itemName: string): string {
  const encoded = encodeURIComponent(itemName.replace(/ /g, "_"));
  return `https://oldschool.runescape.wiki/images/${encoded}_detail.png`;
}

export function getWikiUrl(itemName: string): string {
  const encoded = encodeURIComponent(itemName.replace(/ /g, "_"));
  return `https://oldschool.runescape.wiki/w/${encoded}`;
}

export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 3) + "...";
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function chunk<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}
