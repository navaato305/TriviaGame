var time = 20;
var intervalId = "";
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var arrayFinder = 0;


var question01 = {
	question: "What is the first character you play with in 'Kingdom Hearts 2'?",
	answers: ["Sora", "Roxas", "Kairi", "Riku"],
	values: ["incorrect", "correct", "incorrect", "incorrect"],
	correct: "Roxas",
	image: "./assets/Images/roxas.png"
};
var question02 = {
	question: "Which person possessed Riku after he came to Maleficent?",
	answers: ["Ansem", "Namine", "Sora", "Roxas"],
	values: ["correct", "incorrect", "incorrect", "incorrect"],
	correct: "Ansem",
	image: "./assets/Images/ansem.png"
};
var question03 = {
	question: "What happens between Sora and Kairi after Riku/Ansem is defeated in 'Kingdom Hearts 1'?",
	answers: ["Sora gives his Keblade to Kairi", "They kiss", "Kairi kills Sora", "Sora unlocks both his heart and Kairi's"],
	values: ["incorrect", "incorrect", "incorrect", "correct"],
	correct: "Sora unlocks both his heart and Kairi's",
	image: "./assets/Images/kh.png"
};
var question04 = {
	question: "Who isn't a 'Princess of Heart'",
	answers: ["Aurora", "Alice", "Ariel", "Belle"],
	values: ["incorrect", "incorrect", "correct", "incorrect"],
	correct: "Ariel",
	image: "./assets/Images/ariel.png"
};
var question05 = {
	question: "Who composes the music for 'Kingdom Hearts'?",
	answers: ["Yoko Shimomura", "Kaoru Wada", "Utada Hikaru", "Ayumi Hamasaki"],
	values: ["correct", "incorrect", "incorrect", "incorrect"],
	correct: "Yoko Shimomura",
	image: "./assets/Images/yoko.png"
};
var question06 = {
	question: "Who is the final boss in 'Kingdom Hearts 2'?",
	answers: ["Axel", "Leon", "Cloud", "Xemnas"],
	values: ["incorrect", "incorrect", "incorrect", "correct"],
	correct: "Xemnas",
	image: "./assets/Images/xemnas.png"
};
var question07 = {
	question: "How many worlds appear in both 'Kingdom Hearts 1 and 2' (including Disney Castle)?",
	answers: ["Five", "Eight", "All of Them", "Three"],
	values: ["incorrect", "correct", "incorrect", "incorrect"],
	correct: "Eight",
	image: "./assets/Images/disney.png"
};
var question08 = {
	question: "What is the name Kairi interpreted as?",
	answers: ["Sea", "Sky", "Light", "Land"],
	values: ["correct", "incorrect", "incorrect", "incorrect"],
	correct: "Sea",
	image: "./assets/Images/kairi.png"
};
var question09 = {
	question: "What is the first line in Kairi's letter to Sora?",
	answers: ["Thinking of you wherever you are", "Thinking of you wherever you may go", "Thinking of us wherever you are", "Where are you?"],
	values: ["correct", "incorrect", "incorrect", "incorrect"],
	correct: "Thinking of you wherever you are",
	image: "./assets/Images/destiny.png"
};
var question10 = {
	question: "How old is Sora in 'Kingdom Hearts 1'?",
	answers: ["Eleven", "Fourteen", "Thirteen", "Twelve"],
	values: ["incorrect", "correct", "incorrect", "incorrect"],
	correct: "Fourteen",
	image: "./assets/Images/sora.png"
};


var questionsArray = [question01, question02, question03, question04, question05, question06, question07, question08, question09, question10];

function start () {
    $(".content-div").empty();
    var startButton = $("<button>");
    startButton.text("Start");
    startButton.addClass("start btn btn-default answerBtn");
    $(".content-div").append(startButton);
};

function run() {
  intervalId = setInterval(decrement, 1000);
};

function decrement() {
  time--;
  $(".timer-div").html("Time Remaining: " + time + " Seconds");
  if (time == 0) {
    if (arrayFinder < questionsArray.length-1) {
        setTimeout(function () {questionWrite(questionsArray[arrayFinder])}, 2000);
        solutionWrite(questionsArray[arrayFinder]);
        $(".question-div").html("Incorrect!");
        stop();
        unanswered++;
      }
      else if (arrayFinder < questionsArray.length) {
          setTimeout(function () {endWrite(questionsArray[arrayFinder])}, 2000);
          solutionWrite(questionsArray[arrayFinder]);
        $(".question-div").html("Incorrect!");
        stop();
        unanswered++;
      }
  };
};

function stop() {
  clearInterval(intervalId);
};

function questionWrite (obj) {
    time = 20;
    $(".timer-div").empty();
    $(".timer-div").html("Time Remaining: " + time + " Seconds");
    $(".question-div").empty();
    $(".content-div").empty();
    run ();
    $(".question-div").html(obj.question);
    for (var i = 0; i < obj.answers.length; i++) {
        var answerButton = $("<button>");
        answerButton.addClass("answer btn btn-default answerBtn");
        answerButton.text(obj.answers[i]);
        answerButton.attr("value", obj.values[i]);
        $(".content-div").append(answerButton);
        $(".content-div").append("<br>");
    };
};

function solutionWrite (obj) {
    $(".question-div").empty();
    $(".content-div").empty();
    $(".content-div").html("The correct answer was " + obj.correct + "<br>");
    var characterImage = $("<img>");
    characterImage.attr("height", "250");
    characterImage.attr("src", obj.image);
    characterImage.addClass("character")
    $(".content-div").append(characterImage);
    arrayFinder++;
};

function startWrite () {
    questionWrite(question01);
};

function answerSelect () {
    stop();
    if ($(this).attr("value") == "correct") {
        solutionWrite(questionsArray[arrayFinder]);
        $(".question-div").html("Correct!");
        correct++;
        if (arrayFinder < questionsArray.length) {
            setTimeout(function () {questionWrite(questionsArray[arrayFinder])}, 2000);
        }
        else if (arrayFinder < questionsArray.length+1) {
            setTimeout(function () {endWrite(questionsArray[arrayFinder])}, 2000);
          }
    }
    else if ($(this).attr("value") == "incorrect") {
        solutionWrite(questionsArray[arrayFinder]);
        $(".question-div").html("Incorrect!");
        incorrect++;
        if (arrayFinder < questionsArray.length) {
            setTimeout(function () {questionWrite(questionsArray[arrayFinder])}, 2000);
        }
        else if (arrayFinder < questionsArray.length+1) {
            setTimeout(function () {endWrite(questionsArray[arrayFinder])}, 2000);
          }
    }
};

function endWrite () {
    $(".question-div").empty();
    $(".content-div").empty();
    $(".question-div").html("Here's how you did!");
    $(".content-div").html("<p> Correct: " + correct + "</p>" + "<p> Incorrect: " + incorrect + "</p>" + "<p> Unanswered: " + unanswered + "</p>");
    var resetButton = $("<button>");
    resetButton.addClass("reset btn btn-default answerBtn");
    resetButton.text("Start Over?");
    $(".content-div").append(resetButton);
}

function resetClick () {
    arrayFinder = 0;
    incorrect = 0;
    correct = 0;
    unanswered = 0;
    startWrite();
}

$(document).on("click", ".start", startWrite);

$(document).on("click", ".answer", answerSelect);

$(document).on("click", ".reset", resetClick);

start();