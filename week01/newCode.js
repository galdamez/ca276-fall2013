console.log('newCode.js loaded');

/*
 * @author Jose Galdamez
 * @date 8/29/2013
 */

/* 
	grocery list
	apples 
	oragnes
*/

// reference a DOM node
var header = document.getElementById('myTitle');
// console.log(header);

// create a variable that contains a string
var somebodysName = "John";
// console.log(somebodysName);

// string using single quotes
var someHTML = '<a href="mywebsite.com">Some link</a>';
// console.log(someHTML);

// pizza restaurant
var myFavoritePizza = 'Papa John\'s';
// console.log(myFavoritePizza);

// my lucky number
var myLuckyNum = 100;
// console.log(myLuckyNum);

// write it to the page using string concatentation
header.innerHTML = 'Hello,' + somebodysName;

var myScore = 85;
var myGrade;
var myMoney;

function score(myScore) {
	if (myScore >= 90) {
		// gte 90 -> A
		myGrade = 'A';
		myMoney = 3000000000;
	} else if (myScore >= 80) {
		// gte 80 -> B
		myGrade = 'B';
		myMoney = 200;
	} else if (myScore >= 70) {
		// gte 70 -> C
		myGrade = 'C';
		myMoney = 10;
	}

	return myGrade;
}

console.log(score(100));
console.log(score(90));
console.log(score(72));

console.log('I got a ' + myGrade + '!');
console.log('I now have this much money: $' + myMoney + '!');

// Student class

var Student = function(name, major) {
	this.name = name;
	this.major = major;
}
