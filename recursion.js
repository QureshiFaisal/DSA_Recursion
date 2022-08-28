//    Basic recursive function
function countNum(num) {
  if (num <= 0) {
    console.log("All done");
    return;
  }
  console.log(num);
  num--;
  countNum(num);
}

countNum(5);
//Sum range
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(4));

//Writing factorial recursively

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
console.log(factorial(5));

//find odd elements in an array using recursion

function findOdd(arr) {
  let result = [];
  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

console.log(findOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//find even elements in an array using pure recursing without a helper function

function findEven(arr) {
  let newArr = [];

  if (!arr.length) return newArr;

  if (arr[0] % 2 === 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(findEven(arr.slice(1)));
  return newArr;
}

console.log(findEven([1, 2, 3, 4, 5]));

//RECURSION CHALLENGES
//power

function power(base, exponent) {
  if (base === 0) return 0;
  if (exponent === 0) return 1;
  exponent--;
  let result = base * power(base, exponent);
  return result;
}
console.log(power(2, 5));

//PRODUCT OF ARRAY
//Recursive
function product([front, ...end]) {
  if (front === undefined) return 1;
  let result = front * product(end);
  return result;
}
console.log(product([1, 2, 3, 4, 5]));

//Iterative
function productIt(arr) {
  if (!arr.length === 0) return 1;
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}

console.log(productIt([1, 2, 3, 4, 5]));

//Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

function recusriveRange(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return num + recusriveRange(num - 1);
}

console.log(recusriveRange(5));

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(10));
