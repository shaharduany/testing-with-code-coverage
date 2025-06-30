import { describe, it, expect } from "vitest";
import { analyzePassword } from "../src/calc.js";

describe("analyzePassword(password)", () => {
  describe("when password is short", () => {
    it("should return 'Weak' for password shorter than 6 characters", () => {
      const result = analyzePassword("Ab1!");
      expect(result).to.equal("Weak");
    });

    it("should return 'Weak' for 5-character password", () => {
      const result = analyzePassword("test1");
      expect(result).to.equal("Weak");
    });
  });

  describe("when password is fair", () => {
    it("should return 'Fair' with only lowercase letters", () => {
      const result = analyzePassword("justlowercase");
      expect(result).to.equal("Fair");
    });

    it("should return 'Fair' with only uppercase letters", () => {
      const result = analyzePassword("JUSTUPPERCASE");
      expect(result).to.equal("Fair");
    });

    it("should return 'Fair' with only numbers", () => {
      const result = analyzePassword("1234567890");
      expect(result).to.equal("Fair");
    });

    it("should return 'Fair' with two character types", () => {
      const result = analyzePassword("lowercase123");
      expect(result).to.equal("Fair");
    });
  });
});
