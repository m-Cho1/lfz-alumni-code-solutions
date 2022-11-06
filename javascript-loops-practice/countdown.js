/* exported countdown */

function countdown(number) {
  const newArr = [];
  let count = number;
  while (count >= 0) {
    newArr.push(count);
    count--;
  }
  return newArr;
}

function sumAll(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

function getIndexes(array) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(i);
  }
  return newArr;
}

function addSuffixToAll(words, suffix) {
  const newArr = [];
  for (let i = 0; i < words.length; i++) {
    newArr.push(words[i] + suffix);
  }
  return newArr;
}

function getStudentNames(students) {
  const newArr = [];
  for (let i = 0; i < students.length; i++) {
    newArr.push(students[i].name);
  }
  return newArr;
}

function filterOutNulls(values) {
  const newArr = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      newArr.push(values[i]);
    }
  }
  return newArr;
}

function filterOutStrings(values) {
  const newArr = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof (values[i]) === 'number') {
      newArr.push(values[i]);
    }
  }
  return newArr;
}

function includesSeven(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}

function findIndex(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

function oddOrEven(numbers) {
  const newArr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newArr.push('even');
    } else {
      newArr.push('odd');
    }
  }
  return newArr;
}
