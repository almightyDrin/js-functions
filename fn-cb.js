/**
 * CALLBACK FUNCTIONS
 * In JavaScript, a callback function is a function that is passed into another function as an argument.
 * This function can then be invoked during the execution of that higher order function (that it is an argument of).
 * Since, in JavaScript, functions are objects, functions can be passed as arguments.
 */

/**
 *
 * @param {*} n
 * @returns
 */
const isEven = (n) => {
  return n % 2 == 0;
};

let printMsg = (evenFunc, num) => {
  const isNumEven = evenFunc(num);
  console.log(`The number ${num} is an even number: ${isNumEven}`);
};

printMsg(isEven, 5); // The number $2 is an even number: $1
