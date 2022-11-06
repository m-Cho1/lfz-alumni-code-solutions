/* exported filterOutStrings */
function filterOutStrings(values) {
  const newArr = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof (values[i]) === 'number') {
      newArr.push(values[i]);
    }
  }
  return newArr;
}
