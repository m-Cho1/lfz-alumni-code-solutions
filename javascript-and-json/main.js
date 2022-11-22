const arr = [
  {
    isbn: '978-32421-133424',
    title: 'Road to Coder',
    author: 'Dan Miller'
  },
  {
    isbn: '978-33311-343332',
    title: 'Basic CSS',
    author: 'Max Rick'
  },
  {
    isbn: '978-65723-996695',
    title: 'React 101',
    author: 'Quint Adams'
  }
];

console.log('value of arr: ', arr);
console.log('typeof arr: ', typeof (arr));

const jsonValueArr = JSON.stringify(arr);
console.log('value of jsonValueArr: ', jsonValueArr);
console.log('typeof jsonValueArr: ', typeof (jsonValueArr));

const str = '{"studentId": 1, "name": "Minji"}';
console.log('value of str: ', str);
console.log('typeof str: ', typeof (str));

const parsedStr = JSON.parse(str);
console.log('value of parsedStr: ', parsedStr);
console.log('typeof parsedStr: ', typeof (parsedStr));
