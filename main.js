
const Calculator = require('./calculator')

const calculate = new Calculator(2, 5);

const sum = calculate.add();
const product = calculate.product();

console.log("Sum: "+ sum);
console.log("Product: "+ product);
