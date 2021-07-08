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


btnEl.addEventListener("click", start)
var start = function () {
    timerEl.setTimeout(() => {
        
    }, 6000);
    for (let i = 0; i < questions[questionsCounter].options.length; i++) {
        questionsEl.innerText = questions.question[i];
        choicesEl.innerText = questions[questionsCounter].options[i]
        console.log(questions[i].options[1]);
    }
}







