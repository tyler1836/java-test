var btnEl = document.getElementById("submit");
var questionsEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var timerEl = document.getElementById("timer");
var questions = [{
    question: "How do you display something in the console.",
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
    question: "True or False: You can use .html to change an element in the dom?",
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
var timeCount = 60;


var start = function () {
    var time = setInterval(() => {
        timerEl.textContent = "Time remaining: " + timeCount;
        timeCount--;
        

        if(timeCount < 0){
            clearInterval(time)
        }
    }, 1000);
    
    for (let i = 0; i < questions[questionsCounter].options.length; i++) {
        console.log(questions[i].question);
        console.log(questions[questionsCounter].options[i])
        var list = document.createElement("LI").innerHTML = questions[questionsCounter].options[i]
        //choicesEl.innerHTML = questions[questionsCounter].options[i]
        choicesEl.append(list);
    }
    questionsEl.innerHTML = questions[i].question;
    if(answer === questions.question.answer[i]){
        alert("Correct")
        score++
    }
    if(i > questions){
        alert("Congrats you've finished with a score of " + highScore)
        savedScore();
    }
    else {
        alert("Incorrect 10 seconds deducted")
        timeCount - 10;
    }

}

var savedScore = function(){
    localStorage.setItem("score", JSON.stringify(highScore));
}
btnEl.addEventListener("click", start);

console.log(questions[0].options[1]);






