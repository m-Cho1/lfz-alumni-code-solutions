const student = {
  firstName: 'John',
  lastName: 'Smith',
  age: '22'
};

const fullName = student.firstName + student.lastName;
console.log(`value of fullName: ${fullName}`);

student.livesInIrvine = true;
student.previousOccupation = 'Farmer';

console.log(`value of livesInIrvine: ${student.livesInIrvine}`);
console.log(`value of previousOccupation: ${student.previousOccupation}`);

const vehicle = {
  make: 'Mercedez Benz',
  model: 'S600 AMG',
  year: 2022
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;

console.log(`value of color: ${vehicle['color']}`);
console.log(`value of isConvertible: ${vehicle['isConvertible']}`);
console.log('value of vehicle: ', vehicle);

const pet = {
  name: 'Buddy',
  type: 'Retriever'
};

delete pet.name;
delete pet.type;
console.log('value of pet: ', pet);
