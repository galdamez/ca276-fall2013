// wk6b.js

// Anonymous function
(function(){
	var numClicks;

	numClicks = 0;

	document.getElementById('clickThis').onclick = function () {
		numClicks += 1;
		console.log('Number of clicks: ', numClicks);
	}


// 
// 
// 
// 
// 
// 
// 
// 



	var numKeyStrokes;

	numKeyStrokes = 0;

	// document.getElementById('inputField').onkeypress = function () {
	// 	numKeyStrokes += 1;
	// 	console.log('Number of clicks: ', numKeyStrokes);
	// }

})();

