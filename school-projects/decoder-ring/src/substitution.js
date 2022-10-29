// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  let subCypher = [];
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;
    let checkForDupes = new Set(alphabet);
    if ([...checkForDupes].length !== 26) return false;
    alphabet.split("");
    if (encode) {
      for (let i = 0; i < 25; i++) {
        subCypher[alpha[i]] = alphabet[i];
      }
    } else {
      for (let i = 0; i < 25; i++) {
        subCypher[alphabet[i]] = alpha[i];
      }
    }
    let result = input
      .toLowerCase()
      .split("")
      .map((letter) => {
        if (letter === " ") return " ";
        return subCypher[letter];
      });
    return result.join("");
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
