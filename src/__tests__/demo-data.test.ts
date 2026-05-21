import { describe, it, expect } from "vitest";
import { DEMO_PLAYER, DEMO_CATEGORIES, DEMO_GOALS } from "../data/demo-player";
import { OSRS_CATEGORIES, DEMO_ITEMS } from "../data/osrs-categories";

describe("DEMO_PLAYER", () => {
  it("has required fields", () => {
    expect(DEMO_PLAYER.username).toBe("Omhoog");
    expect(DEMO_PLAYER.accountType).toBe("IRONMAN");
    expect(DEMO_PLAYER.collectionLogObtained).toBeGreaterThan(0);
    expect(DEMO_PLAYER.collectionLogTotal).toBeGreaterThan(DEMO_PLAYER.collectionLogObtained);
  });
});

describe("DEMO_CATEGORIES", () => {
  it("has at least one category", () => {
    expect(DEMO_CATEGORIES.length).toBeGreaterThan(0);
  });

  it("each category has consistent item counts", () => {
    for (const cat of DEMO_CATEGORIES) {
      const obtainedItems = cat.items.filter(i => i.obtained).length;
      expect(cat.obtainedCount).toBe(obtainedItems);
      expect(cat.totalCount).toBe(cat.items.length);
    }
  });

  it("completion percent is within 0-100", () => {
    for (const cat of DEMO_CATEGORIES) {
      expect(cat.completionPercent).toBeGreaterThanOrEqual(0);
      expect(cat.completionPercent).toBeLessThanOrEqual(100);
    }
  });
});

describe("DEMO_GOALS", () => {
  it("has both active and completed goals", () => {
    const active = DEMO_GOALS.filter(g => g.status === "ACTIVE");
    const completed = DEMO_GOALS.filter(g => g.status === "COMPLETED");
    expect(active.length).toBeGreaterThan(0);
    expect(completed.length).toBeGreaterThan(0);
  });

  it("completed goals have completedAt date", () => {
    for (const goal of DEMO_GOALS.filter(g => g.status === "COMPLETED")) {
      expect(goal.completedAt).toBeTruthy();
    }
  });
});

describe("OSRS_CATEGORIES", () => {
  it("has top-level and sub-categories", () => {
    const topLevel = OSRS_CATEGORIES.filter(c => !c.parent);
    const subCats = OSRS_CATEGORIES.filter(c => c.parent);
    expect(topLevel.length).toBeGreaterThan(0);
    expect(subCats.length).toBeGreaterThan(0);
  });

  it("slugs are unique", () => {
    const slugs = OSRS_CATEGORIES.map(c => c.slug);
    const unique = new Set(slugs);
    expect(unique.size).toBe(slugs.length);
  });
});

describe("DEMO_ITEMS", () => {
  it("has items", () => {
    expect(DEMO_ITEMS.length).toBeGreaterThan(0);
  });

  it("all items have required fields", () => {
    for (const item of DEMO_ITEMS) {
      expect(item.itemId).toBeGreaterThan(0);
      expect(item.name).toBeTruthy();
      expect(item.slug).toBeTruthy();
      expect(item.category).toBeTruthy();
    }
  });
});
