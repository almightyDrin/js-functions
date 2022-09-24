/**
 * FUNCTIONS ASSIGNED TO VARIABLES
 * In JavaScript, functions are a data type just as strings, numbers, and arrays are data types.
 * Therefore, functions can be assigned as values to variables,
 * but are different from all other data types because they can be invoked.
 */

/**
 *
 * @param {*} number
 * @returns
 */
let plusFive = (number) => {
  return number + 5;
};

let f = plusFive;

console.log(plusFive(3)); // 8

console.log(f(9)); // 14

//Note: function f has been invoked separately/independently to it's original function.
