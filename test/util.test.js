import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { dummyFunction } from "../src/util.js";

describe("dummyFunction(input, logger)", () => {
  describe("when the input", () => {
    describe("is not a number", () => {
      it("should return null", () => {
        const input = {};
        const result = dummyFunction(input);
        expect(result).toBe(null);
      });
    });
  });
});
