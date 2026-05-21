import type { WikiItemData } from "./types";

const WIKI_API_BASE = "https://oldschool.runescape.wiki/api.php";
const WIKI_USER_AGENT =
  process.env.WIKI_USER_AGENT ??
  "ClogLog/1.0 (https://github.com/yourorg/cloglog)";

async function wikiGet<T>(params: Record<string, string>): Promise<T> {
  const url = new URL(WIKI_API_BASE);
  url.searchParams.set("format", "json");
  for (const [k, v] of Object.entries(params)) {
    url.searchParams.set(k, v);
  }

  const res = await fetch(url.toString(), {
    headers: { "User-Agent": WIKI_USER_AGENT },
    next: { revalidate: 3600 }, // cache 1h in Next.js fetch cache
  });

  if (!res.ok) throw new Error(`Wiki API error: ${res.status}`);
  return res.json() as Promise<T>;
}

// Fetch item data using the OSRS Wiki API
export async function fetchWikiItem(
  itemId: number
): Promise<WikiItemData | null> {
  try {
    const data = await wikiGet<{
      query?: { pages?: Record<string, { title: string; pageprops?: Record<string, string> }> };
    }>({
      action: "query",
      prop: "pageprops",
      titles: `Item:${itemId}`,
    });

    const pages = data.query?.pages;
    if (!pages) return null;

    const page = Object.values(pages)[0];
    if (!page || page.title.startsWith("Special:")) return null;

    return { id: itemId, name: page.title };
  } catch {
    return null;
  }
}

// Fetch GE price for an item
export async function fetchGePrice(
  itemId: number
): Promise<number | null> {
  try {
    const res = await fetch(
      `https://prices.runescape.wiki/api/v1/latest?id=${itemId}`,
      {
        headers: { "User-Agent": WIKI_USER_AGENT },
        next: { revalidate: 300 },
      }
    );
    if (!res.ok) return null;
    const json = await res.json() as { data?: Record<string, { high?: number; low?: number }> };
    const item = json.data?.[itemId];
    if (!item) return null;
    return item.high ?? item.low ?? null;
  } catch {
    return null;
  }
}

// Fetch GEIDs data mapping (item name -> item ID)
export async function fetchGEIDsMap(): Promise<Record<string, number>> {
  try {
    const res = await fetch(
      "https://oldschool.runescape.wiki/w/Module:GEIDs/data.json",
      {
        headers: { "User-Agent": WIKI_USER_AGENT },
        next: { revalidate: 86400 },
      }
    );
    if (!res.ok) return {};
    return res.json() as Promise<Record<string, number>>;
  } catch {
    return {};
  }
}
