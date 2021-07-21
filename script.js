var startEl = document.getElementById("submit")
var questionCardEl = document.getElementById("questions-card")
var nextEl = document.getElementById("next")
var questionsEl = document.getElementById("question")
var answerEl = document.getElementById("answer")
var answersEl = document.getElementById("answers")
var timerEl = document.getElementById("timer")

var questions = [{
    question: "How do you display something in the console?",
    options: [{ text: "display", correct: false },
    { text: "console.log()", correct: true },
    { text: "show()", correct: false },
    { text: "var =", correct: false }]
},
{
    question: "To add an event to a button click what built in function is used?",
    options: [{ text: "addEvent", correct: false },
    { text: "click", correct: false },
    { text: "buttonOn", correct: false },
    { text: "addEventListener", correct: true }]
},
{
    question: "What phrase is used to retrieve something out of localStorage?",
    options: [{ text: "getItem", correct: true },
    { text: "setItem", correct: false },
    { text: "retrieveStorage", correct: false },
    { text: "access-storage", correct: false }]
},
{
    question: "True or False: You can use .innerHtml to change an element in the dom?",
    options: [{ text: "True", correct: true },
    { text: "False", correct: false }]
},
{
    question: "What does document.getElementById() do?",
    options: [{ text: "Shows elements Id", correct: false },
    { text: "Adds a new element with an Id", correct: false },
    { text: "Links a javascript variable with a DOM element", correct: true },
    { text: "Tells you where an element is on the HTML page", correct: false }]
}
]

var currentQuestion = 0;
var timeCount = 60;

function startQuiz() {
    score = 0;
    startEl.classList.add("hide")
    questionCardEl.classList.remove("hide")
    var time = setInterval(function () {
        timerEl.textContent = "Time remaining: " + timeCount;
        timeCount--;

        if (timeCount <= 0) {
            clearInterval(time)
        }
    }, 1000);

    next()

}

function next() {
    reset();
    questionShow(questions[currentQuestion]);

}
function questionShow(question) {
    questionsEl.innerText = question.question
    question.options.forEach(options => {
        var button = document.createElement("button")
        button.innerText = options.text
        button.classList.add("answer")
        if (options.correct) {
            button.dataset.correct = options.correct
        }
        button.addEventListener("click", answer)
        answersEl.appendChild(button)
    })

}
function reset() {
    nextEl.classList.add("hide");
    while (answersEl.firstChild) {
        answersEl.removeChild(answersEl.firstChild)
    }
}
function answer(e) {
    var selected = e.target;
    var correct = selected.dataset.correct
    Array.from(answersEl.children).forEach(button => {
        right(button, button.dataset.correct)
    })
    if (questions.length > currentQuestion + 1) {
        nextEl.classList.remove("hide")
    }
  
    else {

        questionsEl.innerText = "Congrats you've finished! Your score is " + timeCount + "."
        saveScore();
        timeCount = 0;
        
    }


}

function right(correct) {
    if(correct){
        timeCount += 20;}
}

function saveScore() {
    localStorage.setItem("score", JSON.stringify(timeCount))
}



nextEl.addEventListener("click", () => {
    currentQuestion++;
    next()
})
startEl.addEventListener("click", startQuiz)