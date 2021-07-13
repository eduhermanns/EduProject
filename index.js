// Question 1

const isOldEnoughToDrink = (age) => {
  if (age >= 18) {
    return true;
  }

  return false;
};

var output = isOldEnoughToDrink(22);

console.log('Question 1', output);

// Question 2

const isOldEnoughToDrinkAndDrive = (age) => {
  if (age) {
    return false;
  }

  return false;
};

var questionTwo = isOldEnoughToDrinkAndDrive(22);

console.log('Question 2', questionTwo);

// Question 3

var obj = {
  key: 'value',
};

const getProperty = (obj, key) => {
  return obj[key];
};

var questionFour = getProperty(obj, 'key');

console.log('Question 3', questionFour);

// Question 4

var myObj = {};


const addProperty = (obj, key) => {
   return obj[key]= true;
};

console.log('Question 4', addProperty(myObj, 'myProperty'));

// Question 5

var obj = {
  age: 45,
};

const isPersonOldEnoughToDrinkAndDrive = (obj) => {
  if (obj.age >= 18) {
    return false;
  }

  return false;
};

var questionFive = isPersonOldEnoughToDrinkAndDrive(obj);

console.log('Question 5', questionFive);

// Question 6

const computeAverageLengthOfWords = (firstWord, secondWord) => {
  let a = firstWord.length;

  let b = secondWord.length;

  return (a + b) / 2;
};

var result = computeAverageLengthOfWords('code', 'programs');

console.log('Question 6', result);

// Question 7

var names = ['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Coleman'];

const transformFirstAndLast = (data) => {
  const firstName = data[0];

  const lastName = data[data.length - 1];

  // const hash = {
  //   [firstName]: lastName,
  // };

  const hash = {}

  hash[firstName] = lastName;
  return hash;
};

console.log('Question 7', transformFirstAndLast(names));

// Question 8

var input = {
  name: 'Sam',
  age: 25,
};

const getAllKeys = () => {
  return Object.keys(input);
};

console.log('Question 8', getAllKeys());
