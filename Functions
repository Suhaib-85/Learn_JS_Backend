JavaScript has the following kinds of scopes:

	Global scope: The default scope for all code running in script mode.
	Module scope: The scope for code running in module mode.
	Function scope: The scope created with a function.
	Block scope: The scope created with a pair of curly braces (a block).

function Test(a = 1, b = 2){    //Default Params
  console.log(a*b);
};
Test(1);

function myFun(a, b, ...manyMoreArgs) {  //rest params can't have default values and they must be the last param in param list
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}
myFun("one", "two", "three", "four", "five", "six");
// Console Output:
// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]

function ignoreFirst(...[, b, c]) {    //array destructuring
  return b + c;
}
//rest params are array instances so methods like sort(), map(), forEach() or pop() can be used
//Differences between arguments object and rest params
//Arguments is not a true array
function demo(a, b) {
  console.log(arguments[0]); // 1
  a = 99;
  console.log(arguments[0]); // 99 (synced!)
}
demo(1, 2);

function demo(...args) {
  console.log(args[0]); // 1
  args[0] = 99;
  console.log(arguments[0]); // undefined (not synced!)
}
demo(1, 2, 3);

function demo(a, ...rest) {
  console.log(arguments[0]); // 1
  a = 42;
  console.log(arguments[0]); // 42 (synced)
  rest[0] = 99;
  console.log(arguments[1]); // 2 (NOT synced)
}
demo(1, 2, 3);

function fun1(...theArgs) {
  console.log(theArgs.length);  //length of the array
}

//Immediately Invoked Function Expressions (IIFE)
((a,b)=>{
  console.log(a*b);
})(1,1);

//closures and lexical scoping
function outer() {
  let counter = 0;	//this variable is accessable to inner() due to lexical scoping

  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;	 //this function continues to remember the varable despite being returned
}
const count = outer(); // outer() returns inner, and `counter` is preserved
count(); // 1
count(); // 2
count(); // 3

let outerVar = "I'm global";
function inner() {
  console.log(outerVar);
}
function outer() {
  let outerVar = "I'm from outer";
  inner(); // logs "I'm global"
}
outer();
