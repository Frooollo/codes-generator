module.exports = {
  /**
   * Generate a random code
   *
   * @param {Object} options - Options for generating the code
   * @param {number} options.length - The length of the code
   * @param {boolean} options.upperLetters - Include uppercase letters in the code
   * @param {boolean} options.lowerLetters - Include lowercase letters in the code
   * @param {boolean} options.numbers - Include numbers in the code
   * @param {boolean} options.symbols - Include symbols in the code
   *
   * @returns {string} The generated code
   */
  generate: function (
    options = {
      length: 10,
      upperLetters: true,
      lowerLetters: true,
      numbers: true,
      symbols: false,
    }
  ) {
    let charatters = "",
      code = "";

    this.length = options.length || 10;
    this.upperLetters = options.upperLetters || true;
    this.lowerLetters = options.lowerLetters || true;
    this.numbers = options.numbers || true;
    this.symbols = options.symbols || false;

    if (this.length <= 0)
      throw new TypeError(
        "[CODES-GENERATOR] The length of the code cannot be less than or equal to 0"
      );
    if (
      !this.upperLetters &&
      !this.lowerLetters &&
      !this.numbers &&
      !this.symbols
    )
      throw new TypeError("[CODES-GENERATOR] Enable at least one option");
    if (this.upperLetters) charatters += "ABCDEFGHIJKLMNOPQRSTUWXYZ";
    if (this.lowerLetters) charatters += "abcdefghijklmnpqrstuwxyz";
    if (this.numbers) charatters += "1234567890";
    if (this.symbols) charatters += "!@#$%^&*.()";

    for (var i = 0, codeLength = charatters.length; i < this.length; i++) {
      code += charatters.charAt(Math.floor(Math.random() * codeLength));
    }

    return code;
  },
};
