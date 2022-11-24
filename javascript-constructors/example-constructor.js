function ExampleConstructor() {

}

console.log('value of prototype prop of ExampleConstructor: ', ExampleConstructor.prototype);
console.log('typeof prototype prop of ExampleConstructor: ', typeof (ExampleConstructor.prototype));

const exampleConst = new ExampleConstructor();
console.log('value of exmapleCont: ', exampleConst);

const checkInstance = exampleConst instanceof ExampleConstructor;
console.log('value of checkInstance: ', checkInstance);
