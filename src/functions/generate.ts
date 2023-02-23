export interface GenerateOptions {
  upperLetters?: boolean;
  lowerLetters?: boolean;
  numbers?: boolean;
  symbols?: boolean;
}

/**
 * Generate a random code
 *
 * @param {object} options - Options for generating the code
 * @param {number} options.length - The length of the code
 * @param {boolean} options.upperLetters - Include uppercase letters in the code
 * @param {boolean} options.lowerLetters - Include lowercase letters in the code
 * @param {boolean} options.numbers - Include numbers in the code
 * @param {boolean} options.symbols - Include symbols in the code
 *
 * @returns {string} The generated code
 */
export function generate(
  length: number = 10,
  options: GenerateOptions = {
    upperLetters: true,
    lowerLetters: true,
    numbers: true,
    symbols: false,
  }
) {
  let charatters: string = "",
    code: string = "";

  if (length <= 0)
    throw new TypeError(
      "[codes-generator] The length of the code cannot be less than or equal to 0"
    );
  if (
    !options.upperLetters &&
    !options.lowerLetters &&
    !options.numbers &&
    !options.symbols
  )
    throw new TypeError("[codes-generator] Enable at least one option");
  if (options.upperLetters) charatters += "ABCDEFGHIJKLMNOPQRSTUWXYZ";
  if (options.lowerLetters) charatters += "abcdefghijklmnpqrstuwxyz";
  if (options.numbers) charatters += "1234567890";
  if (options.symbols) charatters += "!@#$%^&*.()";

  for (var i = 0, codeLength = charatters.length; i < length; i++) {
    code += charatters.charAt(Math.floor(Math.random() * codeLength));
  }

  return code;
}
