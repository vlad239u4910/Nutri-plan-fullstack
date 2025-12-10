const patterns = {
  zeroTo9999: /^[0-9]{1,4}$/,

  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,

  minimumOneUpperCaseLetter: /[A-Z]/,

  minimumOneLowerCaseLetter: /[a-z]/,

  minimumOneDigit: /[0-9]/,

  minimumOneSpecialCharacter: /[^A-Za-z0-9]/,

  minEightCharacters: /^.{8,}$/,
};

export { patterns };
