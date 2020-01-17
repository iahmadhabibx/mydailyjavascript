function checkQuiz() {

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;

	var correct=0; //Results
	var message = ["Well Done! Plus Get a Life Bro", "You are just normal", "Focus on your IQ bruh!"]; //Store message accorind to results
	var gifs = ["responses/success.gif", "responses/meh.gif", "responses/fail.gif"]; //Store message accorind to results
	var score;

	// Checking results
	if(question1 == "Providence" || question1 == "providence")
		correct++;
	if(question2 == "Hartford")
		correct++;
	if(question3 == "notaquestion")
		correct++;

	if(correct < 1)
		score = 2;
	if(correct > 0 && correct < 3)
		score = 1;
	if(correct == 3)
		score = 0

	//Enabling result div
	document.getElementById("after_submit").style.visibility = "visible";

	//Showing score and status
	document.getElementById("message").innerHTML = message[score];
	document.getElementById("number_correct").innerHTML = "You got all <b>" + correct + "</b> correct.";

	// Getting gifs according to result
	document.getElementById("gifs").src = gifs[score];
}