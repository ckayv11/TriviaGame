// DEFINE VARIABLES
var userGuess;
var questionNumber = 0;
var correctAnswer = 0;
var wrongAnswer = 0;
var unanswered = 0;
var timer = 10;
var intervalId;

//TRIVIA QUESTIONS ARRAY
currentQuestion = [
    {
      question: "",
      options: [],
      answer: "",
      image: "<img id='img' src='assets/images/image.jpg'/>"
    },
    {
      question: "",
      options: [],
      answer: "",
      image: "<img id='img' src='assets/images/image.jpg'/>"
    },
    {
      question: "",
      options: [],
      answer: "",
      image: "<img id='img' src='assets/images/image.jpg'/>"
    },
    {
      question: "",
      options: [],
      answer: "",
      image: "<img id='img' src='assets/images/image.jpg'/>"
    },
    {
      question: "",
      options: [],
      answer: "",
      image: "<img id='img' src='assets/images/image.jpg'/>"
    },
    {
      question: "",
      options: [],
      answer: "",
      image: "<img id='img' src='assets/images/image.jpg'/>"
    },
    {
      question: "",
      options: [],
      answer: "",
      image: "<img id='img' src='assets/images/image.jpg'/>"
    },
    {
      question: "",
      options: [],
      answer: "",
      image: "<img id='img' src='assets/images/image.jpg'/>"
    },
    {
      question: "",
      options: [],
      answer: "",
      image: "<img id='img' src='assets/images/image.jpg'/>"
    },
    {
      question: "",
      options: [],
      answer: "",
      image: "<img id='img' src='assets/images/image.jpg'/>"
    },
];

//TIMER FUNCTIONS

//The run function sets an interval that runs the decrement function once a second.
    //Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

//Decrement function
function decrement() {
    timer--;
    $("#show-time").html("<h3>" + "Time Remaining: " + timer + "</h3>");
    if (timer === 0) {
        stop();
        // alert("Time's Up!");
    }
}

//Stop function
function stop() {
    clearInterval(intervalId);
}
run();
console.log(run);

//GAMEPLAY SCREEN




//RESULTS SCREEN
// function results() {
//     if (timer === 0) {
//     $("#results-screen").html("<p>" + "Correct Answers" + correctAnswer + "</p>")
//     }
// }



