/**
 * JAVASCRIPT FUNCTIONS: FIRST-CLASS OBJECTS
 * JavaScript functions are first-class objects.
 * Therefore:
 *
 * • They have built-in properties and methods,
 * such as the name property and the .toString() method.
 *
 * • Properties and methods can be added to them.
 *
 * • They can be passed as arguments and returned from other functions.
 *
 * • They can be assigned to variables, array elements, and other objects.
 */

const println = (p) => console.log(p);

//Assign a function to a variable originalFunc
const originalFunc = (num) => {
  return num + 2;
};

//Re-assign the function to a new variable newFunc
const newFunc = originalFunc;

//Access the function's name property
println(newFunc.name); //'originalFunc'

//Return the function's body as a string
println(newFunc.toString()); //'(num) => { return num + 2 }'

//Add our own isMathFunction property to the function
newFunc.isMathFunction = true;

//Pass the function as an argument
const functionNameLength = (func) => {
  return func.name.length;
};
println(functionNameLength(originalFunc)); //12

//Return the function
const returnFunc = () => {
  return newFunc;
};
println(returnFunc()); //[Function: originalFunc]

//Return originalFunc
const returnOriginalFunc = () => {
  return originalFunc;
};
println(returnOriginalFunc());
