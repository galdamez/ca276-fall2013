// wk6.js

// Up until now we've been creating all variables as global variables.
// Generally speaking, this is bad practice because global variables can
// be overwritten by unsuspecting code. They are also difficult to maintain.
// If all your variables are global you are likely to run into a "spaghetti code"
// situation.

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

// FUNCTIONS AS EXPRESSIONS

// A basic function will look like this

var getRandomInt(rangeLength) {
	return Math.floor(Math.random() * rangeLength);
}

// You can also assign a function to a variable. It means the same thing.

var getRandomInt = function(rangeLength) {
	return Math.floor(Math.random() * rangeLength);
}

// See the difference?

// The click handler below

document.getElementById('clickThis').onclick = function () {
	console.log(myGlobal, this.id);
}

var gizmo = function (gremlin1, gremlin2, globalTest) {
	var myGlobal;

	myGlobal = 'hahaha';

	gremlin1();
	gremlin2();

	// Which myGlobal value will it console.log access?
	// The global myGlobal or the local myGlobal? The answer may surprise you.
	globalTest();
}

gizmo(
	function () {console.log('I am Stripe!');},
	function () {console.log('I am Poker Player!');},
	function () {console.log(myGlobal);}
);

setTimeout(function () {
	console.log('Thank you for your patience!');
}, 2000);

var student = {};

student.name = 'Jane Doe';
student.id = 0193013;
student.age = 18;
student.gender = 'F';
student.phone = '(240) 555-5555';
student['status'] = 'Freshman';
student['007'] = 'James Bond';
student.getStatus = function () {
	return this.status;
}

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

function graduate(student) {
	student.status = 'Party time!';
	console.log(student);
	return student;
}

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
