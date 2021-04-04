//alert()
//prompt()

// Functions//

//What are Functions?
//Functions are pieces of code that perform actions.
//Functions can perform 1 action or multiple actions.

// alert  <-- is a function
// alert(); < -- alert function is called
// alert("hi","bye") <-- alert fumction is called with 2 arguments,


//-----------------------
// JavaScript Functions
//-----------------------

// we have 2 ways to create functions,

//  FUNCTION DECLARATION
//-----------------------

// function name(){}



function sayHello() {
	console.log("hello")
}

sayHello();



function keyless(){
	alert("What the Fuck is Your Age Man?, ")
	var input = prompt("Please enter Age .")
	console.log(input);

if (input >= 18 ) {
	alert("Your welcome to drive")
} else{
	alert("still to young ,wait some time")
}


}




keyless();







//FUNCTION EXPRESSION
//-----------------------
// var a = function name(){}


// var sayBye = function(){
// 	console.log("Bye");
// }

// sayBye();





// var checkDriverAge = function(a){
// 	var a = prompt();
// return a;


// }


// checkDriverAge();
// console.log("a")


//-----------------------------------------------------

//Data Structures
//
//ARRAYS

var list = ["tiger","cat","bear","bird"];

//grabbing or accesing array

console.log(list[1]);  //0 count

// variables hold ,numbers,booleans, and functions

// e.g Functions

var functionList = [function named(){
	console.log("named");
}]





//