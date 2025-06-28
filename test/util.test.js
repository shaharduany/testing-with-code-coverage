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

    describe("is greater than 5", () => {
      it('should return "high"', () => {
        const input = 6;
        const result = dummyFunction(input);
        expect(result).toBe("high");
      });
    });

    describe("is less or equal 5", () => {
      it('should return "low" for input less than 5', () => {
        const input = Math.floor(Math.random() * 5); // generates 0, 1, 2, 3, or 4
        const result = dummyFunction(input);
        expect(result).toBe("low");
      });

      it('should return "low" for input equals 5', () => {
        const input = 5;
        const result = dummyFunction(input);
        expect(result).toBe("low");
      });
    });
  });
});
