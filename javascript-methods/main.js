const num1 = 5;
const num2 = 19;
const num3 = 12;

const maximumValue = Math.max(num1, num2, num3);
console.log(`value of maximumValue: ${maximumValue}`);

const heroes = [
  'Hulk',
  'Iron man',
  'Thor',
  'Black Widow'
];

let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);

console.log(`value of randomIndex: ${randomIndex}`);
const randomHero = heroes[randomIndex];
console.log(`value of randomHero: ${randomHero}`);

const library = [
  {
    title: 'Book of JavaScript',
    author: 'Ben Franklin'
  },
  {
    title: 'Road to coder',
    author: 'C.S. Edgar'
  },
  {
    title: 'React expert',
    author: 'MC'
  }
];

const lastBook = library.pop();
console.log('value of lastBook: ', lastBook);

const firstBook = library.shift();
console.log('value of firstBook: ', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('value of library: ', library);

const fullName = 'Minji Cho';
const firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName: ', firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log(`value of sayMyName: ${sayMyName}`);
