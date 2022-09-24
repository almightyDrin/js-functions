/* console.time("loop");

for (var i = 0; i < 1000000; i += 1){

    // do nothing

}

console.timeEnd("loop");

const func1 = async() => {
    return Promise.resolve("data1")
}
const func2 = async() => {
    return Promise.reject("data2")
}
const func3 = async() => {
    return Promise.resolve("data3")
}

Promise.all([func1(), func2(), func3()])
.then(d => console.log(d))
.catch(e => console.log(e))
// [true, false, true]

const x = {}
x['foo'] = 'bar'
x.bar = {
    'first': 100,
    'second': 200
}

console.log(x.bar['first'] +  x['bar'].second) */


/**
 * @BinarySearch
 * 
 */
/* let exampleArray = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];

const binarySearch = (array, target) => {
    let startIndex = 0;
    let endIndex = array.length - 1;
    while(startIndex <= endIndex) {
      let middleIndex = Math.floor((startIndex + endIndex) / 2);
      if(target === array[middleIndex]) {
        return console.log("Target was found at index " + middleIndex);
      }
      if(target > array[middleIndex]) {
        console.log("Searching the right side of Array")
        startIndex = middleIndex + 1;
      }
      if(target < array[middleIndex]) {
        console.log("Searching the left side of array")
        endIndex = middleIndex - 1;
      }
      else {
        console.log("Not Found this loop iteration. Looping another iteration.")
      }
    }
    
    console.log("Target value not found in array");
  }

  binarySearch(exampleArray, 37) */


/**
 * @PyramidPattern
 * 
 */

  /* let n = 5;
  let string = "";
  // External loop
  for (let i = 1; i <= n; i++) {
    // printing spaces
    for (let j = 1; j <= n - i; j++) {
      string += " ";
    }
    // printing star
    for (let k = 0; k < 2 * i - 1; k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string); */

  /**
  * @ReversePyramidPattern
  * 
  */

/*    let n = 5;
  let string = "";
  // External loop
  for (let i = 0; i < n; i++) {
    // printing spaces
    for (let j = 0; j < i; j++) {
      string += " ";
    }
    // printing star
    for (let k = 0; k < 2 * (n-i) - 1; k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string); */


  /**
   * @SumArrayElements
   * 
   */
    /* const arr = [1, 2, 3, 4];
    const sum = arr.reduce((a, b) => a + b, 0);
    console.log(sum) */

/**
 * @ArrowFunctionDiff
 * 
 */

/* function fun1() {
  console.log('fun1: ',this)
}

const fun2 = () => {
  console.log('fun2: ',this)
}

fun1()
fun2() */

/**
 * @DependencyInjection
 * 
 */
/* class Car {
  engine
  type

  constructor(engine, type) {
    this.engine = engine
    this.type = type
  }

  start() {
    console.log(this.engine, this.type)
  }
}

const v1 = new Car('v1engine', 'v1type')
const v2 = new Car('v2engine', 'v2type')
v1.start()
v2.start() */

/**
 * @Closure
 * 
 */

/* function makeFunc() {
  const name = 'Mozilla';
  function displayName() {
    return name
  }
  return displayName;
}

const myFunc = makeFunc();
console.log(myFunc()); */

/**
 * @Closure
 * @Curry
 * 
 */
 /* function curry(fn) {
  var slice = [].slice;
  var len = fn.length;

  return function curried() {
      var args = slice.call(arguments);
      if (args.length >= len) {
          return fn.apply(null, args);
      }

      return function () {
          return curried.apply(null, args.concat(slice.call(arguments)));
      };
  };
}

var add = curry(function (a, b, c, d) {
  return a + b + c + d;
});

console.log(add(1)(2)(3)(4)); // 10
console.log(add(1, 2, 3)(4)); // 10
console.log(add(1)(2, 3)(4)); // 10 */

/* var currying = function (fn) {
  let args = [];
  return function() {
      [].push.apply(args, arguments);
      return fn.apply(null, args);
  }
}
var add = currying(function() {
  let num = Array.from(arguments)
  return num.reduce((x, y) => {
      console.log('add', num)
      return x + y
  })
})
var ride = currying(function() {
  let num = Array.from(arguments)
  return num.reduce((x, y) => {
      console.log('ride', num)
      return x * y
  })
})
console.log(add(1))
console.log(add(1, 2))
console.log(ride(1, 2, 5))
console.log(ride(10)) */

/**
 * @this and @arguments in node js
 */
/* const arFun = () => {
  console.log('arrow function: ', this, arguments)
};

function orFun() {
  console.log('ordinary function: ', this, arguments)
};

arFun(1);
orFun(1); */

const returnProm = () => {
  console.log('#2')
  return Promise.resolve()
}


console.log('#1')

returnProm()
  .then(data => console.log(data))
  .catch(e => console.log(e))

console.log('#3')

console.log('-------------------','######################','-------------------')

console.log('##1')
try {
  setTimeout(async () => {
    await returnProm()
  }, 0);
} catch (error) {
  console.log(error)
}
console.log('##3')
