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
