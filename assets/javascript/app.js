$(document).ready(function() {
// DEFINE VARIABLES
    var userGuess;
    var questionNumber = 0;
    var correctAnswer = 0;
    var wrongAnswer = 0;
    var unanswered = 0;
    var timer = 10;
    var intervalId;
    
//TRIVIA QUESTIONS ARRAY
    var currentQuestion = [
        {
          question: "Who are Harry's best friends?",
          options: ["Fred & George", "Ginny & Neville", "Ron & Hermione", "Draco & Crabbe"],
          answer: "Ron & Hermione",
          image: "<img id='img' src='assets/images/ronhermione.gif'/>"
        },
        {
          question: "Who was Headmaster of Hogwarts when Harry started?",
          options: ["McGonagle", "Umbridge", "Dumbledore", "Snape"],
          answer: "Dumbledore",
          image: "<img id='img' src='assets/images/dumbledore.gif'/>"
        },
        {
          question: "What Hogwarts house was Cedric Diggory in?",
          options: ["Hufflepuff", "Gryffindor", "Ravenclaw", "Slytherin"],
          answer: "Hufflepuff",
          image: "<img id='img' src='assets/images/hufflepuff.gif'/>"
        },
        {
          question: "Who is referred to as He Who Must Not Be Named?",
          options: ["Severus Snape", "Mad-Eye Moody", "Lord Voldemort", "Sirius Black"],
          answer: "Lord Voldemort",
          image: "<img id='img' src='assets/images/voldemort.gif'/>"
        },
        {
          question: "What type of magical creature is Buckbeak?",
          options: ["Hippogriff", "Basilisk", "Goblin", "Centaur"],
          answer: "Hippogriff",
          image: "<img id='img' src='assets/images/buckbeak.gif'/>"
        },
        {
          question: "What popular sport is played in the wizarding world?",
          options: ["Seeker", "Quaffle", "Wizard's Chess", "Quidditch"],
          answer: "Quidditch",
          image: "<img id='img' src='assets/images/quidditch.gif'/>"
        },
        {
          question: "What kind of pet does Harry take to school?",
          options: ["Cat", "Owl", "Rat", "Frog"],
          answer: "Owl",
          image: "<img id='img' src='assets/images/hedwig.gif'/>"
        },
        {
          question: "What does Harry give to Dobby to free him from his master?",
          options: ["His sock", "The Elder Wand", "His Invisibility Cloak", "A Portkey"],
          answer: "His sock",
          image: "<img id='img' src='assets/images/dobby.gif'/>"
        },
        {
          question: "What is the name of the sulking ghost who lives in a bathroom at Hogwarts?",
          options: ["Sulky Sam", "Moaning Myrtle", "Debbie Downer", "Crying Carl"],
          answer: "Moaning Myrtle",
          image: "<img id='img' src='assets/images/moaningmyrtle.gif'/>"
        },
        {
          question: "What is Snape's Patronus?",
          options: ["Otter", "Stag", "Snake", "Doe"],
          answer: "Doe",
          image: "<img id='img' src='assets/images/snapepatronus.gif'/>"
        },
    ];
    
    
//TIMER FUNCTIONS
    
    //The run function sets an interval that runs the decrement function once a second.
    //Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        };
        
    //Decrement function
        function decrement() {
            timer--;
            $("#show-time").html("<h3>" + "Time Remaining: " + timer + "</h3>");
            if (timer === 0) {
                stop();
                outOfTime();
            };
        };
    
    //Stop function
        function stop() {
            clearInterval(intervalId);
        };

//AUDIO FUNCTIONS   
        // function aud() {
        //     var themesong = $("#themesong");
        //     themesong.play();
        // }
 
    
    
//STARTING SCREEN
        function gameStart() {
            $("#starting-screen").show();
            $("#gameplay-screen").hide();
            $("#results-screen").hide();
            questionNumber = 0;
            correctAnswer = 0;
            wrongAnswer = 0;
            unanswered = 0;
            timer = 10;
        };

//GAMEPLAY SCREEN
    //Start game by user click
        $(".start").click(function() {
            // aud();
            $("#starting-screen").hide();
            $("#gameplay-screen").show();
            displayQuestions();
            $("#answerA").show();
            $("#answerB").show();
            $("#answerC").show();
            $("#answerD").show();
            $("#image").hide();
        });

    //Display first question and answer options
        function displayQuestions() {
            intervalId = setInterval(decrement, 1000);
            decrement();
            $("#question").html("<h2>" + currentQuestion[questionNumber].question + "</h2>");
            $("#answerA").html("<h3>" + currentQuestion[questionNumber].options[0] + "</h3");
            $("#answerB").html("<h3>" + currentQuestion[questionNumber].options[1] + "</h3");
            $("#answerC").html("<h3>" + currentQuestion[questionNumber].options[2] + "</h3");
            $("#answerD").html("<h3>" + currentQuestion[questionNumber].options[3] + "</h3");
        };
    
    //Determine right, wrong, or unanswered answers for each question
        $("#answerA").click(function() {
            stop();
            userGuess = currentQuestion[questionNumber].options[0];
            if (userGuess === currentQuestion[questionNumber].answer) {
                correct();
            }
            else if (userGuess != currentQuestion[questionNumber].answer) {
                incorrect();
            }
            else {
                outOfTime();
            }
        });
    
        $("#answerB").click(function() {
            stop();
            userGuess = currentQuestion[questionNumber].options[1];
            if (userGuess === currentQuestion[questionNumber].answer) {
                correct();
            }
            else if (userGuess != currentQuestion[questionNumber].answer) {
                incorrect();
            }
            else {
                outOfTime();
            }
        });
    
        $("#answerC").click(function() {
            stop();
            userGuess = currentQuestion[questionNumber].options[2];
            if (userGuess === currentQuestion[questionNumber].answer) {
                correct();
            }
            else if (userGuess != currentQuestion[questionNumber].answer) {
                incorrect();
            }
            else {
                outOfTime();
            }
        });
        $("#answerD").click(function() {
            stop();
            userGuess = currentQuestion[questionNumber].options[3];
            if (userGuess === currentQuestion[questionNumber].answer) {
                correct();
            }
            else if (userGuess != currentQuestion[questionNumber].answer) {
                incorrect();
            }
            else {
                outOfTime();
            }
        });
        
    //Function to display when uswer answers correctly
        function correct() {
            stop();
            $("#question").html("<h3>" + "CORRECT!" + "</h3>");
            $("#answerA").hide();
            $("#answerB").hide();
            $("#answerC").hide();
            $("#answerD").hide();
            $("#image").show();
            $("#image").html(currentQuestion[questionNumber].image);
            questionNumber++;
            correctAnswer++;
            setTimeout(nextQuestion, 3000);
        };
        
    //Function to display when uswer answers incorrectly
        function incorrect() {
            stop();
            $("#question").html("<h3>" + "WRONG! The correct answer was " + currentQuestion[questionNumber].answer + "</h3>");
            $("#answerA").hide();
            $("#answerB").hide();
            $("#answerC").hide();
            $("#answerD").hide();
            $("#image").show();
            $("#image").html(currentQuestion[questionNumber].image);
            questionNumber++;
            wrongAnswer++;
            setTimeout(nextQuestion, 3000);
        };
        
    //Function to display when uswer runs out of time
        function outOfTime() {
            stop();
            $("#question").html("<h3>" + "Time's up! The correct answer was " + currentQuestion[questionNumber].answer + "</h3>");
            $("#answerA").hide();
            $("#answerB").hide();
            $("#answerC").hide();
            $("#answerD").hide();
            $("#image").show();
            $("#image").html(currentQuestion[questionNumber].image);
            questionNumber++;
            unanswered++;
            setTimeout(nextQuestion, 3000);
        };
    
    //Function should bring up the next question and answers after 5 seconds
        function nextQuestion() {
            if (questionNumber < 10) {
            $("#gameplay-screen").show();
            $("#image").hide();
            timer = 10;
            run();
            decrement();
            for (i = 0; i < 10; i++) {
                $("#answerA").show();
                $("#answerB").show();
                $("#answerC").show();
                $("#answerD").show();
                $("#question").html("<h2>" + currentQuestion[questionNumber].question + "</h2>");
                $("#answerA").html("<h3>" + currentQuestion[questionNumber].options[0] + "</h3");
                $("#answerB").html("<h3>" + currentQuestion[questionNumber].options[1] + "</h3");
                $("#answerC").html("<h3>" + currentQuestion[questionNumber].options[2] + "</h3");
                $("#answerD").html("<h3>" + currentQuestion[questionNumber].options[3] + "</h3");
            }
            } else {
            results();
            };
        };
    
//RESULTS SCREEN
        function results() {
            $("#gameplay-screen").hide();
            $("#results-screen").show();
            $("#correct-answers").html("<h4>" + "Correct Answers: " + correctAnswer + "</h4>");
            $("#wrong-answers").html("<h4>" + "Wrong Answers: " + wrongAnswer + "</h4>");
            $("#unanswered").html("<h4>" + "Unanswered: " + unanswered + "</h4>");
        }
        
//RESTART
        $("#play-again").click(function() {
            gameStart();
    });
    gameStart();
    
    });
