//Create an algorithm that runs through a one-dimensional array containing letters and numbers:

const array = ["a", 10, "b", "hola", 122, 15];

const onlyLetters = array.filter((e) => typeof e === "string");
const onlyNumbers = array.filter((e) => typeof e === "number");
const highestNumber = Math.max(...onlyNumbers);

console.log(onlyLetters, "letters");
console.log(onlyNumbers, "numbers");
console.log(highestNumber, "highestNumber");
