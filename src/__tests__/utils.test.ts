import { describe, it, expect } from "vitest";
import {
  formatNumber,
  formatXp,
  formatGp,
  formatPercent,
  calcPercent,
  slugify,
  truncate,
  clamp,
  chunk,
  timeAgo,
} from "../lib/utils";

describe("formatNumber", () => {
  it("formats integers with locale separators", () => {
    // locale may vary by environment; just check it contains the digits
    const result = formatNumber(1234567);
    expect(result).toContain("1");
    expect(result).toContain("234");
    expect(result).toContain("567");
    expect(result.length).toBeGreaterThan(7); // has separators
  });
  it("returns — for null/undefined", () => {
    expect(formatNumber(null)).toBe("—");
    expect(formatNumber(undefined)).toBe("—");
  });
});

describe("formatXp", () => {
  it("formats millions correctly", () => {
    const result = formatXp(200_000_000);
    expect(result).toContain("M");
  });
  it("formats billions correctly", () => {
    const result = formatXp(1_000_000_000);
    expect(result).toContain("B");
  });
  it("returns — for null", () => {
    expect(formatXp(null)).toBe("—");
  });
});

describe("formatGp", () => {
  it("formats gp with unit", () => {
    expect(formatGp(500)).toContain("gp");
  });
  it("formats millions of gp", () => {
    expect(formatGp(1_000_000)).toContain("M");
  });
});

describe("calcPercent", () => {
  it("calculates percent correctly", () => {
    expect(calcPercent(1, 2)).toBe(50);
    expect(calcPercent(834, 1477)).toBeCloseTo(56.5, 0);
  });
  it("returns 0 when total is 0", () => {
    expect(calcPercent(0, 0)).toBe(0);
  });
});

describe("formatPercent", () => {
  it("formats percent string", () => {
    expect(formatPercent(1, 2)).toBe("50.0%");
  });
});

describe("slugify", () => {
  it("converts spaces to hyphens", () => {
    expect(slugify("Twisted Bow")).toBe("twisted-bow");
  });
  it("removes special characters", () => {
    // apostrophe is treated as a separator, then duplicate hyphens collapse
    const result = slugify("K'ril Tsutsaroth");
    expect(result).toContain("ril");
    expect(result).toContain("tsutsaroth");
  });
  it("lowercases", () => {
    expect(slugify("ZULRAH")).toBe("zulrah");
  });
});

describe("truncate", () => {
  it("truncates long strings", () => {
    const result = truncate("Hello world", 8);
    expect(result).toBe("Hello...");
    expect(result.length).toBe(8);
  });
  it("does not truncate short strings", () => {
    expect(truncate("Hi", 10)).toBe("Hi");
  });
});

describe("clamp", () => {
  it("clamps above max", () => expect(clamp(200, 0, 100)).toBe(100));
  it("clamps below min", () => expect(clamp(-5, 0, 100)).toBe(0));
  it("returns value within range", () => expect(clamp(50, 0, 100)).toBe(50));
});

describe("chunk", () => {
  it("chunks array correctly", () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });
  it("handles empty array", () => {
    expect(chunk([], 3)).toEqual([]);
  });
});
