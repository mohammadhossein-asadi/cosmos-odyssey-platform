import { describe, it, expect } from "vitest";
import { cn, formatNumber, formatDistance, slugify, clamp } from "../utils";

describe("cn", () => {
  it("merges class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("handles conditional classes", () => {
    expect(cn("foo", false && "bar", "baz")).toBe("foo baz");
  });
});

describe("formatNumber", () => {
  it("formats thousands", () => {
    expect(formatNumber(1500)).toBe("1.5K");
  });

  it("formats millions", () => {
    expect(formatNumber(2500000)).toBe("2.5M");
  });

  it("formats billions", () => {
    expect(formatNumber(1500000000)).toBe("1.5B");
  });
});

describe("formatDistance", () => {
  it("formats km", () => {
    expect(formatDistance(57909000)).toBe("57.9 million km");
  });
});

describe("slugify", () => {
  it("converts to slug", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  it("removes special characters", () => {
    expect(slugify("Hello! World?")).toBe("hello-world");
  });
});

describe("clamp", () => {
  it("clamps to min", () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });

  it("clamps to max", () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });

  it("returns value within range", () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });
});
