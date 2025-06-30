import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { dummyFunction as SUT } from "../src/util.js";

describe("dummyFunction(input, logger)", () => {
  let mockLogger = {};
  beforeEach(() => (mockLogger = { log: vi.fn() }));
  afterEach(() => vi.clearAllMocks());

  describe("when the input", () => {
    describe("is not a number", () => {
      it("should return null", () => {
        const input = {};
        const result = SUT(input, mockLogger);
        expect(result).to.be.null;
      });
    });

    describe("is greater than 5", () => {
      it('should return "high"', () => {
        const input = 6;
        const result = SUT(input, mockLogger);
        expect(result).to.equal("high");
      });
    });

    describe("is less or equal 5", () => {
      it('should return "low" for input less than 5', () => {
        const input = Math.floor(Math.random() * 5); // generates 0, 1, 2, 3, or 4
        const result = SUT(input);
        expect(result).to.equal("low");
      });

      it('should return "low" for input equals 5', () => {
        const input = 5;
        const result = SUT(input);
        expect(result).to.equal("low");
      });
    });
  });

  describe("the logged output", () => {
    describe("when the input", () => {
      describe("is a positive number", () => {
        it("should log the value is positive", () => {
          const input = 3;
          SUT(input, mockLogger);
          expect(mockLogger.log).toHaveBeenCalledWith(
            "Processing:",
            "positive"
          );
        });
      });

      describe("is a negative number", () => {
        it("should log the value is negative", () => {
          const input = -2;
          SUT(input, mockLogger);
          expect(mockLogger.log).toHaveBeenCalledWith(
            "Processing:",
            "negative"
          );
        });
      });
    });
  });
});
