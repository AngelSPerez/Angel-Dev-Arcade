const answers = ["Yes", "No", "Maybe", "Probably yes", "Probably yes", "Try again"];
const askBtn = document.getElementById("askBtn");
const answerText = document.getElementById("answerText");
const questionInput = document.getElementById("question");
const ball = document.getElementById("ball");
const emoji = document.querySelector(".emo");

askBtn.addEventListener("click", () => {
  const question = questionInput.value.trim();
  if(question === "") {
    alert("Write closed question");
    return;
  }


  const randomIndex = Math.floor(Math.random() * answers.length);
  answerText.textContent = answers[randomIndex];


  emoji.style.display = "none";


  questionInput.value = "";

  ball.classList.remove("show");
  void ball.offsetWidth; 
  ball.classList.add("show");
});
