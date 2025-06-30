import { describe, it } from "mocha";
import { expect } from "chai";
import { analyzePassword } from "../src/calc.js";

describe("analyzePassword(password)", () => {
  describe("when input is invalid", () => {
    describe("when password is not a string", () => {
      it("should return 'Invalid'", () => {
        const result = analyzePassword(123);
        expect(result).to.equal("Invalid");
      });
    });

    describe("when password is empty", () => {
      it("should return 'Invalid'", () => {
        const result = analyzePassword("");
        expect(result).to.equal("Invalid");
      });
    });
  });

  describe("when password is common", () => {
    it("should return 'Terrible' for 'password'", () => {
      const result = analyzePassword("password");
      expect(result).to.equal("Terrible");
    });

    it("should return 'Terrible' for '123456'", () => {
      const result = analyzePassword("123456");
      expect(result).to.equal("Terrible");
    });

    it("should return 'Terrible' for 'QWERTY' (case insensitive)", () => {
      const result = analyzePassword("QWERTY");
      expect(result).to.equal("Terrible");
    });
  });

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

  describe("when password is excellent", () => {
    it("should return 'Excellent' for 12+ chars with all character types", () => {
      const result = analyzePassword("MySecure123!");
      expect(result).to.equal("Excellent");
    });

    it("should return 'Excellent' for long complex password", () => {
      const result = analyzePassword("SuperSecret2024@Pass");
      expect(result).to.equal("Excellent");
    });
  });

  describe("when password is strong", () => {
    it("should return 'Strong' with upper, lower, and numbers", () => {
      const result = analyzePassword("Password123");
      expect(result).to.equal("Strong");
    });

    it("should return 'Strong' with upper, lower, and special chars", () => {
      const result = analyzePassword("Password!");
      expect(result).to.equal("Strong");
    });

    it("should return 'Strong' with lower, numbers, and special chars", () => {
      const result = analyzePassword("secret123!");
      expect(result).to.equal("Strong");
    });

    it("should return 'Strong' with upper, numbers, and special chars", () => {
      const result = analyzePassword("SECRET123!");
      expect(result).to.equal("Strong");
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
