// variables to keep track of quiz state
var currentQuestionIndex = 0;
// var time = questions.length * 15;
var timerId;
var timeCounter = 0;
var timeLeft = 30;
//window.store = [];
var highScor = 0;

// variables to reference DOM elements
var startScreen = document.getElementById("start-screen");
var endScreen = document.getElementById("end-screen");
var questionsEl = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choicesEl = document.getElementById("choices");
var btnChoices = document.getElementById("btn-choices");
var nextBtn = document.getElementById("nextBtn");
var timerEl = document.getElementById("time");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var finalScore = document.getElementById("final-score");


startBtn.addEventListener("click", startQuiz)
nextBtn.addEventListener("click", nextQuestion)
submitBtn.addEventListener("click", saveHighscore)

console.log(localStorage)
function nextQuestion() {
  currentQuestionIndex++;
  getQuestion();
}


function startQuiz() {
  // hide start screen
  startBtn.classList.add("hide")
  startScreen.classList.add("hide")
  console.log('aref')
  // un-hide questions section
  questionsEl.classList.remove("hide")
  // start timer
  timerId = setInterval(startTime, 1000)
  // show starting time
  getQuestion();
}

function startTime() {
  // update time
  timeCounter++;
  timerEl.textContent = timeLeft - timeCounter;
  // check if user ran out of time
  if(timeLeft - timeCounter <= 0){
    quizEnd()
  }
}

function getQuestion() {
  // get current question object from array
  questions[currentQuestionIndex]
  // update title with current question
  questionTitle.innerText = questions[currentQuestionIndex].question
  // clear out any old question choices
  resetState()
  nextBtn.classList.add('hide')
  timerEl.style.backgroundColor  = "white";
  // loop over choices
  questions[currentQuestionIndex].answers.forEach(answer => {
    // create new button for each choice
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    // attach click event listener to each choice
    button.addEventListener('click', selectAnswer)
    // display on the page
    choicesEl.appendChild(button)
  })
}

function resetState() {
 // clearStatusClass(document.body)
  btnChoices.classList.add('hide')
  while (choicesEl.firstChild) {
    choicesEl.removeChild(choicesEl.firstChild)
  }
}

function selectAnswer(e) {
  var selectedButton = e.target
  var correct = selectedButton.dataset.correct
  console.log(correct)

  if (correct == "true" ){
    highScor++;
    console.log("AREF KHARE")
  }else{
    timeLeft-=10
    timerEl.style.backgroundColor  = "red";
    console.log("Gholam")
  }
  if (questions.length > currentQuestionIndex + 1) {
    nextBtn.classList.remove('hide')
    //timerEl.style.backgroundColor  = "white";
  } else {
    quizEnd()
  }
}

function quizEnd() {
  // stop timer
  clearInterval(timerId);
  timerEl.style.backgroundColor  = "white";
  timerEl.textContent = 0
  // hide questions section
  nextBtn.classList.add('hide')
  questionTitle.classList.add('hide')
  resetState()
  // show end screen
  endScreen.classList.remove('hide')
  // show final score
  finalScore.append(highScor + ' out of ' + questions.length)
}


function saveHighscore() {
  // get value of input box
  // console.log(localStorage)
  var initials2 = document.getElementById("initials").value
  // var score;
  var score = highScor

  // make sure value wasn't empty
  if (initials !== "") {
    //store.push(myObj)
    //console.log(store)
    // save to localstorage
    //myObj2 = JSON.stringify(myObj)
    // get saved scores from localstorage, or if not any, set to empty array
    // format new score object for current user
    localStorage.setItem(initials2,score)
    console.log(localStorage)
    // redirect to next page
    location.replace("highscores.html")
  }
}


//TODO add list of questions
const questions = [
  {
    question: 'Which one is NOT true about HTML?',
    answers: [
      { text: 'HTML stands for Hyper Text Markup Language', correct: false },
      { text: 'HTML does not have elements', correct: true },
      { text: 'HTML describes the structure of a Web page', correct: false }
    ]
  },
  {
    question: 'Which one does not privide cloud services?',
    answers: [
      { text: 'Amazon', correct: false },
      { text: 'Google', correct: false },
      { text: 'Microsoft', correct: false },
      { text: 'Apple', correct: true }
    ]
  },
  {
    question: 'Which one is NOT true about .css file?',
    answers: [
      { text: 'CSS stands for Cascading Style Sheets', correct: false },
      { text: 'CSS describes how HTML elements are to be displayed', correct: false },
      { text: 'It can control the layout of multiple web pages all at once', correct: false },
      { text: 'can not be internally added to HTML elements', correct: true }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  }
]

