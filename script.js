var btnEl = document.getElementById("submit");
var questionsEl = document.getElementById("question");
var choicesEl = document.getElementById("list");
var timerEl = document.getElementById("timer");


var questions = [{
    question: "How do you display something in the console?",
    options: ["display", "console.log()", "show()", "var ="],
    answer: 2,
},
{
    question: "To add an event to a button click what built in function is used?",
    options: ["addEvent", "click", "buttonOn", "addEventListener"],
    answer: 4,
},
{
    question: "What phrase is used to retrieve something out of localStorage?",
    options: ["getItem", "setItem", "retrieveStorage", "access-storage"],
    answer: 1,
},
{
    question: "True or False: You can use .innerHtml to change an element in the dom?",
    options: ["True", "False"],
    answer: 1,
},
{
    question: "What does getElementById do?",
    options: ["Shows elements Id", "Adds a new element with an Id", "Links a javascript variable with a DOM element", "Tells you where an element is on the HTML page"],
    answer: 3,
}
]

var questionsCounter = 0;
var score = 0;
var highScore = score + timeCount;
var timeCount = 120;
var quizOver = false;



function displayQuestions() {
    console.log(questions[questionsCounter].question);
    var q = document.createElement("h3");
    var q2 = document.createTextNode(questions[questionsCounter].question);
    q.append(q2);
    questionsEl.append(q);

   
    for (let value of questions[questionsCounter].options ) {

        var check = document.createElement("input");
        check.type = "checkbox";
        check.id = "answer";
    
        var list = document.createElement("LI");
        var listItems = document.createTextNode(questions[questionsCounter].options);
        list.append(check);
        list.append(listItems);
        choicesEl.append(list);
    }

    // if(answer === questions.question.answer){
    //     alert("Correct")
    //     score++
    // }
    // if(questionsCounter > questions){
    //     alert("Congrats you've finished with a score of " + highScore)
    //     savedScore();
    // }
    // else {
    //     alert("Incorrect 10 seconds deducted")
    //     timeCount - 10;
    // }
}


$("#next").on("click", function () {
    //event.preventDefault();
    
    questionsCounter++;
    console.log(questionsCounter)
    if (questionsCounter >= 5) {

        $("#next").attr('disabled', 'disabled')
    }
    displayQuestions();
});

$("#prev").on("click", function () {

    questionsCounter--;

    if (questionsCounter <= 0) {
        $("#prev").attr('disabled', 'disabled')
    }
    else {
        $("#prev").removeAttr('disabled', 'disabled')
    }
    displayQuestions();
});

var timer = function time() {
    var time = setInterval(function () {
        timerEl.textContent = "Time remaining: " + timeCount;
        timeCount--;

        if (timeCount <= 0) {
            clearInterval(time)
        }
    }, 1000);
displayQuestions();
}


var start = function () {
    timer();

}

var savedScore = function () {
    localStorage.setItem("score", JSON.stringify(highScore));
}
btnEl.addEventListener("click", start);








