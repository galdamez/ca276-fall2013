// wk6.js

var myGlobal;

myGlobal = 'global value';
console.log(myGlobal);

globalFunction();

function globalFunction() {
	var localVar;

	localVar = 'local value';

	console.log(myGlobal, localVar);
}

// console.log(localVar);

document.getElementById('clickThis').onclick = function () {
	console.log(myGlobal, this.id);
}

var gizmo = function (gremlin1, gremlin2) {
	var myGlobal;

	myGlobal = 'hahaha';

	gremlin1();
	gremlin2();
}

gizmo(
	function () {console.log('I am the leader!', myGlobal);},
	function () {console.log('I am #2');}
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
