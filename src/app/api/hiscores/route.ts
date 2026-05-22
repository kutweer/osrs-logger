import { NextRequest, NextResponse } from "next/server";

// OSRS Hiscores CSV endpoints
const ENDPOINTS: Record<string, string> = {
  normal:       "https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws",
  ironman:      "https://secure.runescape.com/m=hiscore_oldschool_ironman/index_lite.ws",
  hardcore:     "https://secure.runescape.com/m=hiscore_oldschool_hardcore_ironman/index_lite.ws",
  ultimate:     "https://secure.runescape.com/m=hiscore_oldschool_ultimate/index_lite.ws",
  seasonal:     "https://secure.runescape.com/m=hiscore_oldschool_seasonal/index_lite.ws",
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const player   = searchParams.get("player")?.trim();
  const mode     = searchParams.get("mode") ?? "normal";

  if (!player) {
    return NextResponse.json({ error: "Missing player name" }, { status: 400 });
  }

  const base = ENDPOINTS[mode] ?? ENDPOINTS.normal;
  const url  = `${base}?player=${encodeURIComponent(player)}`;

  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "ClogLog/1.0 (+https://cloglog.app)" },
      next: { revalidate: 60 }, // cache 1 minute
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: res.status === 404 ? "Player not found" : "Hiscores unavailable" },
        { status: res.status }
      );
    }

    const csv = await res.text();
    return new NextResponse(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=60",
      },
    });
  } catch {
    return NextResponse.json({ error: "Failed to reach OSRS hiscores" }, { status: 502 });
  }
}
