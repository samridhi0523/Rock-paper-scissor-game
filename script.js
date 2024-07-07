let userScore = 0;
let compScore = 0;
let para = document.querySelector("#msg");
let bg = document.querySelector(".msg_container");
let userPara = document.querySelector("#user_score");
let compPara = document.querySelector("#comp_score");

const choice = document.querySelectorAll(".choice");

choice.forEach((option) => {
  option.addEventListener("click", () => {
    bg.style.color = "white";
    const user_choice = option.getAttribute("id");
    playGame(user_choice);
  });
});

const computer_choice = () => {
  const ar = ["rock", "paper", "scissor"];
  const compVal = Math.floor(Math.random() * 3);
  return ar[compVal];
};

const playGame = (userVal) => {
  let compVal = computer_choice();
  // console.log(compVal+" "+userVal);
  let userRes = true;
  if (userVal === compVal) {
    userRes = 2;
  } else if (userVal == "rock") {
    // paper,scissor
    userRes = compVal === "paper" ? 0 : 1;
  } else if (userVal == "paper") {
    //scissor,rock
    userRes = compVal === "scissor" ? 0 : 1;
  } else {
    //rock,paper
    userRes = compVal === "rock" ? 0 : 1;
  }

  result(userRes, userVal, compVal);
};

let caseDraw = (userVal) => {
  para.innerText = `Both selected ${userVal}. It's a draw!!!!!`;
  bg.style.backgroundColor = "yellow";
  bg.style.color = "black";
};

const result = (resVal, userVal, compVal) => {
  if (resVal === 1) {
    para.innerText = `You win, ${userVal} beats ${compVal}`;
    bg.style.backgroundColor = "green";
    userScore++;
    userPara.innerText = userScore;
  } else if (resVal == 2) {
    caseDraw(userVal);
  } else {
    para.innerText = `You lost, ${compVal} beats ${userVal}`;
    bg.style.backgroundColor = "red";
    compScore++;
    compPara.innerText = compScore;
  }
};
