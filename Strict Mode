//"use strict"; //enable strict mode
const test = {
  prop: 42,
  func() {
    return this.prop;
  },
};

console.log(test.func());	//42
const ex = test.func;
console.log(ex());	//ex does not have a data_member named prop

window.prop = 42;
const test = {
  func: ()=>this.prop,
};
console.log(test.func()); //42
const ex = test.func;
console.log(ex());	//42

"use strict";
window.prop = 42;
const test = {
  func: ()=>this.prop,	//this is undefined in strict mode
};
console.log(test.func()); //undefined
const ex = test.func;
console.log(ex());	//undefined

//Explicitly binding this with .call(), .apply(), and .bind()
const showArrow = () => {
  console.log(this.name);
};
const user = {
  name: "Alice",
  greet: showArrow
};
user.greet(); // undefined – arrow functions don't bind `this`

function sayHello() {
  console.log(this.name);
}
const person = { name: "Bob" };
const bound = sayHello.bind(person);
bound(); // "Bob"

function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}
const person = { name: "Sam" };
greet.call(person, "Hi");   // "Hi, Sam" //arguments passed one-by-one
greet.apply(person, ["Hey"]); // "Hey, Sam" //arguments passed as an array

//Arrow functions ignore .bind(), .call(), and .apply() when it comes to this
