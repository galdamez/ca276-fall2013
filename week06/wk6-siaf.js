// wk6b.js

// Below is what is referred to as a self-invoking anonymous function
// The function is anonymous because it does not have a name.
// It is self-invoking because it executes itself.
(function() {
	var numClicks;

	numClicks = 0;

	document.getElementById('clickThis').onclick = function() {
		numClicks += 1;
		console.log('Number of clicks: ', numClicks);
	}


	// Pretend there are many lines of code between what's above and what's below
	// 
	// 
	// 
	// 
	// 
	// 
	// 


	// It may be preferred style to place your var statement here as opposed to the 
	// top of the function scope
	var numKeyStrokes;

	numKeyStrokes = 0;

	document.getElementById('inputField').onkeypress = function() {
		numKeyStrokes += 1;
		console.log('Number of key strokes: ', numKeyStrokes);
	}

})();