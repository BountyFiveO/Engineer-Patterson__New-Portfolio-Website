// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() Testing - Engineer Patterson", () => {
  describe("Error Handling", () => {
    it("should return false if the substitution alphabet is missing", () => {
      const message = "message";
      const actual = substitution(message);
      expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
      const message = "message";
      const alphabet = "short";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet does not contain unique characters", () => {
      const message = "message";
      const alphabet = "abcabcabcabcabcabcabcabcab";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
  });
  describe("Encode Testing - Engineer Patterson", () => {
    describe("Encode Message", () => {
      it("should encode a message by using the given substitution alphabet", () => {
        const message = "message";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(message, alphabet);
        const expected = "ykrrpik";

        expect(actual).to.equal(expected);
      });

      it("should work with any kind of key with unique characters", () => {
        const message = "message";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet);
        const expected = "ysii.rs";

        expect(actual).to.equal(expected);
      });

      it("should preserve spaces", () => {
        const message = "my message";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet);
        const expected = "yp ysii.rs";

        expect(actual).to.equal(expected);
      });
    });
  });
  describe("Decode Testing - Engineer Patterson", () => {
    describe("Decode Message", () => {
      it("should decode a message by using the given substitution alphabet", () => {
        const message = "ykrrpik";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(message, alphabet, false);
        const expected = "message";

        expect(actual).to.equal(expected);
      });

      it("should work with any kind of key with unique characters", () => {
        const message = "ysii.rs";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet, false);
        const expected = "message";

        expect(actual).to.equal(expected);
      });

      it("should preserve spaces", () => {
        const message = "yp ysii.rs";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet, false);
        const expected = "my message";

        expect(actual).to.equal(expected);
      });
    });
  });
});
