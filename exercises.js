//Do not change any of the function names

function multiplyByTen(num) {
  var timesTen = num * 10;
  return timesTen;
  //return num after multiplying it by ten
  //code here
}

function subtractFive(num) {
  var minusFive = num - 5;
  return minusFive;
  //return num after subtracting five
  //code here
}

function areSameLength(str1, str2) {
  if (str1.length === str2.length) {
    return true;
  }
  return false;
  //return true if the two strings have the same length
  //otherwise return false
  //code here
}

function areEqual(x, y) {
  if (x === y) {
    return true;
  }
  return false;
  //return true if x and y are the same
  //otherwise return false
  //code here
}

function lessThanNinety(num) {
  if (num < 90) {
    return true;
  }
  return false;
  //return true if num is less than ninety
  //otherwise return false
  //code here
}

function greaterThanFifty(num) {
  if (num > 50) {
    return true;
  }
  return false;
  //return true if num is greater than fifty
  //otherwise return false
  //code here
}

function add(x, y) {
  var sumOfArgs = x + y;
  return sumOfArgs;
  //add x and y together and return the value
  //code here
}

function subtract(x, y) {
  var diffofArgs = x - y;
  return diffofArgs;
  //subtract y from x and return the value
  //code here
}

function divide(x, y) {
  var divideByArg = x / y;
  return divideByArg;
  //divide x by y and return the value
  //code here
}

function multiply(x, y) {
  var multiplyArgs = x * y;
  return multiplyArgs;
  //multiply x by y and return the value
  //code here
}

function getRemainder(x, y) {
  var remainder = x % y;
  return remainder;
  //return the remainder from dividing x by y
  //code here
}

function isEven(num) {
  var value = num;
  if (value % 2 === 0) {
    return true;
  }
  return false;
  //return true if num is even
  //otherwise return false
  //code here
}

function isOdd(num) {
  var value = num;
  if (value % 2 === 0) {
    return false;
  }
  return true;
  //return true if num is false
  //otherwise return false
  //code here
}

function square(num) {
  var squareVal = Math.pow (num, 2);
  return squareVal;
  //square num and return the new value
  //code here
}

function cube(num) {
  var cubeVal = Math.pow (num, 3);
  return cubeVal;
  //cube num and return the new value
  //code here
}

function raiseToPower(num, exponent) {
  var numToPower = Math.pow (num, exponent);
  return numToPower;
  //raise num to whatever power is passed in as exponent
  //code here
}

function roundNumber(num) {
  var roundNum = Math.round(num);
  return roundNum;
  //round num and return it
  //code here
}

function roundUp(num) {
  var roundingUp = Math.ceil(num);
  return roundingUp;
  //round num up and return it
  //code here
}

function addExclamationPoint(str) {
  var addExclam = str + '!';
  return addExclam;
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  //code here
}

function combineNames(firstName, lastName) {
  var fullName = firstName + ' ' + lastName;
  return fullName;
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  //code here
}

function getGreeting(name) {
  var concatGreeting = 'Hello '+ name + '!';
  return concatGreeting;
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  //code here
}

//If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  var area = length * width;
  return area;
  //return the area of the rectangle by using length and width
  //code here
}

function getTriangleArea(base, height) {
  var area = (base * height)/2;
  return area;
  //return the area of the triangle by using base and height
  //code here
}

function getCircleArea(radius) {
  var area = Math.pow (radius,2) * 3.14;
  area = Math.round (area);
  return area;
  //return the rounded area of the circle given the radius
  //code here
}

function getRectangularPrismVolume(length, width, height) {
  var volume = width * length * height;
  return volume;
  //return the area of the 3D rectangular prism given the length, width, and height
  //code here
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
