function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

console.log(`convertMinutesToSeconds(5): ${convertMinutesToSeconds(5)}`);

function greet(name) {
  return 'Hey, ' + name;
}

console.log(`greet('Minji'): ${greet('Minji')}`);

function getArea(width, height) {
  return width * height;
}

console.log(`getArea(17, 42) : ${getArea(17, 42)}`);

function getFirstName(person) {
  return person.firstName;
}

console.log(`getFirstName: ${getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' })}`);

function getLastElement(array) {
  return array[array.length - 1];
}

console.log(`getLastElement(array): ${getLastElement(['propane', 'and', 'propane', 'accessories'])}`);
