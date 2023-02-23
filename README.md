# Codes Generator

An NPM package for generating random codes

## Getting started

- Install the package

```
npm install codes-generator
```

- Import the `generate` function from the installed package

```js
const { generate } = require("codes-generator");
```

- Use the function

```js
console.log(
  generate(10, {
    upperLetters: true,
    lowerLetters: true,
    numbers: true,
    symbols: false,
  })
);
```

## Function options

| **Key**      | **Value type** | **Description**                       | **Default value** | **Optional?** |
| ------------ | -------------- | ------------------------------------- | ----------------- | ------------- |
| length       | _Number_       | The length of the code                | _**10**_          | Yes           |
| upperLetters | _Boolean_      | Include uppercase letters in the code | _**true**_        | Yes           |
| lowerLetters | _Boolean_      | Include lowercase letters in the code | _**true**_        | Yes           |
| numbers      | _Boolean_      | Include numbers in the code           | _**true**_        | Yes           |
| symbols      | _Boolean_      | Include symbols in the code           | _**false**_       | Yes           |

### Example

```js
const { generate } = require("codes-generator");

console.log(
  generate(20, {
    lowerLetters: false,
    upperLetters: true,
    numbers: false,
    symbols: true,
  }) // Returns a string of 20 characters containing uppercase letters and symbols
);
```
