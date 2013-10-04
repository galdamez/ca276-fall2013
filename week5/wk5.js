var eightBallBtn = document.getElementById('eightBall');

function magicEightBall() {
	var responses = [
		'It is certain',
		'It is decidedly so',
		'Without a doubt',
		'Yes definitely',
		'You may rely on it',
		'As I see it yes',
		'Most likely',
		'Outlook good',
		'Yes',
		'Signs point to yes',
		'Reply hazy try again',
		'Ask again later',
		'Better not tell you now',
		'Cannot predict now',
		'Concentrate and ask again',
		'Don\'t count on it',
		'My reply is no',
		'My sources say no',
		'Outlook not so good',
		'Very doubtful'
	];
	var question;
	var responsePosition;
	var responseText;

	question = document.getElementById('question').value;
	// get the random integer
	responsePosition = getRandomInt(responses.length);
	// get the random response
	responseText = responses[responsePosition];

	// Validate the question

	// if question is valid then send back response
	if (isValidQuestion(question) === true) {
		displayAnswer(responseText);
	}
	// else display error
	else {
		displayAlert('Invalid question');
	}
}

function getRandomInt(rangeLength) {
	var randomInt;

	randomInt = Math.random() * rangeLength;
	randomInt = Math.floor(randomInt);

	return randomInt;
}

function displayAnswer(answer) {
	// Write to to the page
	document.getElementById('answer').innerHTML = answer;
}

function displayAlert(alert) {
	// Write to to the page
	document.getElementById('answer').innerHTML = '<span style="color: DarkRed">' + alert + '</span>';
}

function isValidQuestion(question) {
	return question.indexOf('?') !== -1;
}

// Set the magic eight ball click event
eightBallBtn.onclick = magicEightBall;