/**
 * HIGH ORDER FUNCTIONS
 * In Javascript, functions can be assigned to variables in the same way that strings or arrays can.
 * They can be passed into other functions as parameters or returned from them as well.
 * A “higher-order function” is a function that accepts functions as parameters and/or returns a function.
 */

/**
 * Higher Order Function
 * @function use
 * @param {*} fnParam
 * @returns value
 */

// short version
// const use = (fnParam) => (str) => fnParam(str);

// long version
const use = (fnParam, str) => {
  return (str) => {
    fnParam(str);
  };
};

// function used as parameter
const fnParam = (str) => console.log(str);

// function invocation
use(fnParam, "foo"); // Output: foo
