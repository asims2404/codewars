/* 
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand, the most inner function represents the right operand
    Division should be integer division. For example, this should return 2, not 2.666666...:
*/

const zero = (obj) => whatTypeOfObject(obj, 0);
const one = (obj) => whatTypeOfObject(obj, 1);
const two = (obj) => whatTypeOfObject(obj, 2);
const three = (obj) => whatTypeOfObject(obj, 3);
const four = (obj) => whatTypeOfObject(obj, 4);
const five = (obj) => whatTypeOfObject(obj, 5);
const six = (obj) => whatTypeOfObject(obj, 6);
const seven = (obj) => whatTypeOfObject(obj, 7);
const eight = (obj) => whatTypeOfObject(obj, 8);
const nine = (obj) => whatTypeOfObject(obj, 9);

function plus(val2) {
  return { operator: "+", val2 };
}
function minus(val2) {
  return { operator: "-", val2 };
}
function times(val2) {
  return { operator: "*", val2 };
}
function dividedBy(val2) {
  return { operator: "/", val2 };
}

function whatTypeOfObject(obj, val1) {
  if (typeof obj === "function") {
    return obj(val1);
  }
  if (typeof obj === "object") {
    return operation(val1, obj);
  }
  return val1;
}

function operation(val1, { val2, operator }) {
  const operations = {
    "*": (a, b) => a * b,
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
    "/": (a, b) => a / b,
  };
  return Math.floor(operations[operator](val1, val2));
}

console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3
