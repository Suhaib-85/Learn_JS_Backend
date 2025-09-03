//variable declaration and scopes

let d_ = 1;		//global declaration
const e_ = 1;	//global declaration
var f_ = 1; 	//global declaration
{	//First Block
	let a_ = 1;   //block scoped initialization
	const b_ = 1; //block scoped initialization
	var c_ = 1;   //function scoped initialization 
}
{	//Second Block
	console.log(a_); //error
	console.log(b_); //error
	console.log(c_); // 1
	console.log(d_); // 1
	console.log(e_); // 1
	console.log(f_); // 1
}

//Hoisting

{
	greet("Sohaib");
	console.log(l); //undefined
	console.log(m); //ReferenceError
	console.log(n); //ReferenceError
	var l = "hi";	//is hoisted but without it's value
	const m = 5;	//is not hoisted
	let n = true;	//is not hoisted
	function greet (uname) {	//is hoisted along with the function body
		console.log("Hello " + uname);
	}
}

//Type Conversion and Coercion

x = (false/10);	//implicit type casting or type coercion
console.log(x);
x = parseInt("123");	//explicit type casting or type conversion
console.log(x.toString());
