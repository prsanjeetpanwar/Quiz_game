const quizDB = [
  {
    question: "Q1: What is the full form of HTML?",
    a: "Hello to my Land",
    b: "Hey text markup language ",
    c: " Hooko muko luko",
    d: "Hyper markup language",
    ans: "ans4",
  },
  {
    question: "Who is primeminister of india?",
    a: "Rahul gandhi",
    b: "Nranedra modi",
    c: "Manmohan singh",
    d: "Arvind kejriwal",
    ans: "ans1",
  },
  {
    question: "Who is best actor of bollywood?",
    a: "Sahrukh khan",
    b: "Susant singh rajput",
    c: "vicky kusal",
    d: "salman khan",
    ans: "ans2",
  },
  {
    question: "Which is best bollywood movie among them",
    a: "laggan",
    b: "DDLJ",
    c: "MS dhoni ",
    d: "sardar udam singh",
    ans: "ans3",
  },
];
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScore=document.querySelector('#showScore');

let questionCount = 0;

let score=0;

const loadQuestion = () => {
  const questionList = quizDB[questionCount];
  question.innerHTML = questionList.question;
  option1.innerHTML = questionList.a;
  option2.innerHTML = questionList.b;
  option3.innerHTML = questionList.c;
  option4.innerHTML = questionList.d;
};

loadQuestion();

getCheckAnswer = () => {
  let answer;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);
  if(checkedAnswer=== quizDB[questionCount].ans){
   score++;
  }
  questionCount++;
  if(questionCount<quizDB.length){
   loadQuestion();
  }
  else{
   showScore.innerHTML = `
    <h3> You scored ${score}/${quizDB.length} ⭐⭐⭐⭐⭐</h3>
    <button class="btn" onclick="location.reload()">Play again<button/>

   `;
   showScore.classList.remove('scoreArea');

  }
});
