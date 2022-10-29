// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    const abc = "abcdefghijklmnopqrstuvwxyz"; //
    let alpha = "";
    try {
      // check if shift has required peramiters
      if (!shift || shift < -25 || shift > 25 || shift === 0) {
        return false;
      }
      //make sure the shift is going in the right direction (--->)
      shift = shift < 0 ? shift + 26 : shift;
      //will convert any uppercase to lowercase (will ignore capital letters)
      input = input.toLowerCase();
      for (let i = 0; i < input.length; i++) {
        //lets the code know to only work with the abc variable which contains the letters of the alphabet
        if (abc.includes(input[i])) {
          //takes in the input and checks for first letter in the abc variable that matches the input[i] and assigns it to firstLetter
          let firstLetter = abc.indexOf(input[i]);
          alpha += !encode // check if output is encoding or decoding
            ? abc.charAt((firstLetter - shift + 26) % 26) //is decoding
            : abc.charAt((firstLetter + shift) % 26); //is encoding
        } else {
          alpha += input[i]; // add non abc value which includes spaces
        }
      }
      return alpha; //return the alpha variable string
    } catch (error) {
      //catch any errors, if any
      return `An error occurred: ${error}`; // and return string with error
    }
  }
  //return caesar function
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
