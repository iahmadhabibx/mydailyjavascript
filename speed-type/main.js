window.addEventListener("load", init);

// Main global variables

// Levels
const levels = {
	easy: 5,
	medium: 3,
	hard: 2
};

// To change level
const currentLevel = levels.easy

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
	'lucky',
	'establishment',
	'revolver',
	'galaxy',
	'astonished',
	'symptoms',
	'concktail',
	'horrified',
	'tremendous',
	'selector',
	'statue',
	'mobile',
	'structure',
	'horrendous',
	'investigate',
	'siblings',
	'destination',
	'definition',
	'example',
	'console',
	'javascript',
	'challenge',
	'principle',
	'principal',
	'laughter',
	'nutrition',
	'space',
	'logic',
	'mentor',
	'ideal',
	'snooker',
	'cricket',
	'soccer',
	'badminton',
	'tennis',
	'perfect',
	'youtube',
	'facebook',
	'github'
];

// Initialize game
function init() {
	// showing number of seconds
	seconds.innerHTML = currentLevel;

	// Load word from array
	showWord(words);

	// Match user entered word
	wordInput.addEventListener('input', startMatch);

	// Countdown every second
	setInterval(countdown, 1000);

	// Check game status
	setInterval(checkStatus, 50);
}

// Matching
function startMatch() {
	if(matchWords()) {
		isPlaying = true;
		time = currentLevel + 1;
		showWord(words);
		wordInput.value = '';
		score++;
	}

	// Show 0 if score is 0
	if(score === -1) {
		scoreDisplay.innerHTML = 0;
	}
	else {
		scoreDisplay.innerHTML = score;
	}
}

// Match current word to wordInput
function matchWords() {
	if(wordInput.value === currentWord.innerHTML) {
		message.innerHTML = 'Sahi Khel gaya larkey';
		return true;
	}
	else {
		message.innerHTML = '';
		return false;
	}
}

// Show random words from array
function showWord(words) {
	const randIndex = Math.floor(Math.random() * words.length);

	// Output random word
	currentWord.innerHTML = words[randIndex];
}

// Countdown
function countdown() {
	// If time is not run out
	if(time > 0) {
		// Decrementing
		time--;
	}
	else if(time === 0) {
		isPlaying = false; //Game over
	}

	// Show Time
	timeDisplay.innerHTML = time;
}

// Checking status of game
function checkStatus() {
	if(!isPlaying && time === 0) {
		message.innerHTML = "Kat gaya tera";
		score = -1;
	}
}