var questions = [{
	"question": "How many letters are in the Alphabet ?",
	"option1": "16",
	"option2": "26",
	"option3": "27",
	"option4": "20",
	"answer": "3"
}, {
	"question": "How many colors in the Rainbow",
	"option1": "9",
	"option2": "8",
	"option3": "7",
	"option4": "6",
	"answer": "3"
}, {
	"question": "What is the color of pikachu?",
	"option1": "yellow",
	"option2": "musterd yellow ",
	"option3": "light-yellow",
	"option4": "yellowish",
	"answer": "1"
}, {
	"question": "What is the biggest bone in the body?",
	"option1": "Femur",
	"option2": "Spine",
	"option3": "Humor bone",
	"option4": "All of the above",
	"answer": "1"
}, {
	"question": "what is the largest freshwater lake in the US",
	"option1": "Pacific",
	"option2": "Lake Thaoe",
	"option3": "Lake superior",
	"option4": "Atlantic",
	"answer": "3"
}, {
	"question": "what does the term piano mean",
	"option1": "To be played sofly",
	"option2": "To to just Plain ",
	"option3": "Louad",
	"option4": "To be played fast",
	"answer": "1"
}, {
	"question": "What is sushi traditionally wrapped in?",
	"option1": "Green stuff",
	"option2": "Lettuce",
	"option3": "SeaWeed",
	"option4": "Kale",
	"answer": "3"

}];





var currentQuestion = 0;   //this is certent starting point in the qestions and 0 is the first slide
var score = 0; // this is my starting score
var totQuestions = questions.length; //this grabs the questions in the index


var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1'); //defineing radio option button
var opt2 = document.getElementById('opt2'); //defineing radio option button
var opt3 = document.getElementById('opt3'); //defineing radio option button
var opt4 = document.getElementById('opt4'); //defineing radio option button
var nextButton = document.getElementById('nextButton'); //defineing the next buttonm
var resultCont = document.getElementById('result'); // this is my lodaing container for the score

//starting the function's



function loadQuestion (questionIndex) {  //this is the method to load the qestion
	var q = questions[questionIndex];    //this grabs the questions from the array in the qestions index
questionEl.textContent = (questionIndex + 1) + '. ' + q.question; //settting the text qestion
	opt1.textContent = q.option1;  //setting the text qestion option
	opt2.textContent = q.option2;  //setting the text qestion option
opt3.textContent = q.option3;  //setting the text qestion option
	opt4.textContent = q.option4;  //setting the text qestion option
};


function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked'); // check to see it the radio button is selected
	if(!selectedOption){  // if not selected
		alert('Please select your answer!');  //display the alert text
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){ //compairing the answers with the selectedOption.value to see if its rite or wrong
		score += 10;  //this will add 10 to the cerrent score  or what ever the number you wish to change it too
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){ //see if its ture if not it cahnges the button
		nextButton.textContent = 'Finish'; // this will change the button text to finsih at the end
	}
	if(currentQuestion == totQuestions){ //just ended the quiz
		container.style.display = 'none'; //hide the container of the option
		resultCont.style.display = '';  // now this container will show
		resultCont.textContent = 'Your Score: ' + score;  //this is the text of your score + the score of the quiz

		return;
	}
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);    // loads the qestion
