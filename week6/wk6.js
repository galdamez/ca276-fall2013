// GLOBAL VARIABLES

// Up until now we've been creating all variables as global variables.
// Generally speaking, this is bad practice because global variables can
// be overwritten by unsuspecting code. They are also difficult to maintain.
// If all your variables are global you are likely to run into a "spaghetti code"
// situation where you reference a variable and you have no clue where it was
// defined.

var myGlobal;

myGlobal = 'global value';
console.log(myGlobal);

// The function below is set up to test access to the global variable. Since
// JavaScript can't find a local variable named myGlobal it goes one level up
// and searches in the global scope. It finds the variable there and successfully
// sends its value to the console.
//
// The variable localVar, on the other hand, is defined locally within the function.
// JavaScript does not have leave the function to find its value.

function globalFunction() {
	var localVar;

	localVar = 'local value';

	console.log(myGlobal, localVar);
}

globalFunction();

// The console.log statement below will throw an error because localVar is defined
// only within the function globalFunction. Once the function is done executing
// localVar ceases to exist.

// console.log(localVar);



// ANONYMOUS FUNCTIONS

// An anonymous function is essentially a function definition without a name.
// The code block below is commented out because it throws a JavaScript if left as is.
// While it may not make sense to have a function without a name you'll soon see
// why and how they're used.

// function () {
// 	console.log('I don\'t have a name!');
// }



// FUNCTIONS AS EXPRESSIONS

// A basic function will look like this

var getRandomInt(rangeLength) {
	return Math.floor(Math.random() * rangeLength);
}

// You can also assign a function to a variable. It means the same thing.

var getRandomInt = function(rangeLength) {
	return Math.floor(Math.random() * rangeLength);
}

// Do you see the difference? The second definition of getRandomInt assigns the variable
// to an anonymous function on the right.

// The click handler below is another example if when you may want to use an anonymous
// function. The property "onclick" is set to function that will execute when the
// click happens.

document.getElementById('clickThis').onclick = function () {
	console.log(myGlobal, this.id);
}



// ANONYMOUS FUNCTIONS AS ARGUMENTS

// The function definition below demonstrates that functions can be passed as arguments
// to functions. While this may seem contrived in practice it is used quite often.
// Libraries like jQuery and even some native JavaScript functions expect you to pass
// functions as arguments.

var gizmo = function (gremlin1, gremlin2, globalTest) {
	// We're definining a local variable named myGlobal. The point is to see whether
	// or not the code in globalTest() will access the local myGlobal or the global
	// myGlobal.

	var myGlobal;

	myGlobal = 'hahaha';

	// The following lines execute the functions that were passed as arguments.

	gremlin1();
	gremlin2();

	// Which myGlobal value will console.log access?
	// The global myGlobal or the local myGlobal? The answer may surprise you.
	globalTest();
}

// We call the function gizmo by passing it three arguments. All three arguments are functions.
// We use white space to break up the arguments on to separate lines for readability's sake.
gizmo(
	function () {console.log('I am Stripe!');},
	function () {console.log('I am Poker Player!');},
	function () {console.log(myGlobal);}
);

// setTimeout will execute code after a certain period of time. It takes two arguments:
// 1) a function,
// 2) the number of milliseconds to wait
// setTimeout has a cousin named setInterval which executes repeatedly. Its syntax is
// almost identical.

setTimeout(function () {
	console.log('Thank you for your patience!');
}, 2000);



// OBJECTS

// Creating an empty object
var student1 = {};

// Populating the object one property at a time.
student1.name = 'Jane Doe';
student1.id = 0193013;
student1.age = 18;
student1.gender = 'F';
student1.phone = '(240) 555-5555';
student1['status'] = 'Freshman';
student1['007'] = 'James Bond';
student1.getStatus = function () {
	return this.status;
}

// Populating an object using an object literal
var student2 = {
	name : 'John Doe',
	id : 04939048,
	age : 19,
	gender: 'M',
	phone: '(301) 555-5555',
	status: 'Sophomore',
	getStatus: function () {
		return this.status;
	}
};

// This function will manipulate a student object passed to it
function graduate(student) {
	student.status = 'Party time!';
	console.log(student);
	return student;
}

// Execute function by sending object variables

graduate(student1);
graduate(student2);

// Execute by sending an object literal as the first argument
graduate({
	name : 'John Doe',
	id : 04939048,
	age : 19,
	gender: 'M',
	phone: '(301) 555-5555',
	status: 'Sophomore',
	getStatus: function () {
		return this.status;
	}
});
