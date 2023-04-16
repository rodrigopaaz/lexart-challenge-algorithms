//Create a hashmap (or a simple object in PHP) that contains the elementary functions of addition, subtraction, multiplication, and division.
const elementaryFunctions = {
  sum: (array) =>
    array.reduce((total, valor) => {
      total = total + valor;
      return total;
    }),
  sub: (array) =>
    array.reduce((total, valor) => {
      total = total - valor;
      return total;
    }),
  mult: (array) =>
    array.reduce((total, valor) => {
      total = total * valor;
      return total;
    }),
  div: (a, b) => {
    if (b === 0) {
      return "division not allow 0 dividend";
    }
    return a / b;
  },
};

console.log(elementaryFunctions.sum([15, 15, 10, 10]), "sum");
console.log(elementaryFunctions.sub([15, 15, 10, 10]), "sub");
console.log(elementaryFunctions.mult([15, 15, 10, 10]), "mult");
console.log(elementaryFunctions.div(10, 2), "div");
