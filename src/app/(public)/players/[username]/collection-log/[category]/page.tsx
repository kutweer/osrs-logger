// Server component — renders AppShell in server context so auth()/headers() work correctly.
// All interactive state lives in CategoryDetailContent ("use client").

import type { Metadata } from "next";
import { AppShell } from "@/components/app-shell";
import { CategoryDetailContent } from "./content";
import { DEMO_CATEGORIES } from "@/data/demo-player";

interface Props {
  params: Promise<{ username: string; category: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username, category: slug } = await params;
  const cat = DEMO_CATEGORIES.find((c) => c.slug === slug);
  if (!cat) return { title: "Not Found" };
  return {
    title: `${cat.name} — ${username} — ClogLog`,
    description: `View ${username}'s ${cat.name} collection log progress on ClogLog.`,
  };
}

export default async function CategoryDetailPage({ params }: Props) {
  const { username, category } = await params;

  return (
    <AppShell showSearch>
      <CategoryDetailContent username={username} categorySlug={category} />
    </AppShell>
  );
}
