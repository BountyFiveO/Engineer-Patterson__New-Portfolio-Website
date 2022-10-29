// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("Caesar() Function Testing - Engineer Patterson", () => {
  it("should return false if shift value is equal to 0", () => {
    const message = "Project Decoder Ring";
    const shift = 0;
    const actual = caesar(message, shift);

    expect(actual).to.be.false;
  });
  it("should return false if shift value is less than -25", () => {
    const message = "Project Decoder Ring";
    const shift = -26;
    const actual = caesar(message, shift);

    expect(actual).to.be.false;
  });
  it("should return false if shift value is greater than 25", () => {
    const message = "Project Decoder Ring";
    const shift = 26;
    const actual = caesar(message, shift);

    expect(actual).to.be.false;
  });
});
describe("Encode Testing - Engineer Patterson", () => {
  describe("Encoding Message", () => {
    it("should leaves spaces and other symbols as is", () => {
      const message = "a message.";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "d phvvdjh.";

      expect(actual).to.equal(expected);
    });
    it("should encode a message by shifting the letters", () => {
      const message = "message";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "phvvdjh";

      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
      const message = "A Message With Capitals";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "d phvvdjh zlwk fdslwdov";

      expect(actual).to.equal(expected);
    });
    it("should handle letters at the end of the alphabet by looping back to front of alphabet", () => {
      const message = "zebra stripes";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "cheud vwulshv";

      expect(actual).to.equal(expected);
    });
  });
});

describe("Decode Testing - Engineer Patterson", () => {
  describe("Decode Message", () => {
    it("should decode message that was input by shifting letters in the opposite direction", () => {
      const message = "phvvdjh";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });

    it("should not format or change spaces and/or symbols", () => {
      const message = "d phvvdjh.";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "a message.";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const message = "D pHvvdjh";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "a message";

      expect(actual).to.equal(expected);
    });

    it("should handle letters at the end of the alphabet", () => {
      const message = "cheud vwulshv";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "zebra stripes";

      expect(actual).to.equal(expected);
    });

    it("should allow for a negative shift which shifts to the left", () => {
      const message = "wbyox pqofmbp";
      const shift = -3;
      const actual = caesar(message, shift, false);
      const expected = "zebra stripes";

      expect(actual).to.equal(expected);
    });
  });
});
