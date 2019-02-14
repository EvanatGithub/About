let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("userscore");
const compScore_span = document.getElementById("computerscore");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice(){
  const choices = ["r", "p", "s"];
  //math.random() selects a random # between 0->1
  const random = Math.floor(Math.random() * 3);
  return choices[random];
}
function convert(letter){
  if (letter === "r") return "ROCK";
  if (letter === "p") return "PAPER";
  if (letter === "s") return "SCISSORS";
}
function win(u, c){
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = convert(u) + " > " + convert(c) + "! You win!";
}
function lose(u, c){
  compScore++;
  compScore_span.innerHTML = compScore;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = convert(c) + " > " + convert(u) + "! You Lose!";
}
function draw(){
  result_p.innerHTML = "Draw!";
}
function game(userChoice){
  const compChoice = getCompChoice();
  switch (userChoice + compChoice){
    //user win
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, compChoice);
      break;
    //user lose
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, compChoice);
      break;
    //draw
    case "rr":
    case "pp":
    case "ss":
      draw();
      break;
  }
}
main();
function main(){
  rock_div.addEventListener("click", function(){
    //console.log("HEY YOU CLICKED ON ROCK!")
    game("r");
  })
  paper_div.addEventListener("click", function(){
    game("p");
  })
  scissors_div.addEventListener("click", function(){
    game("s");
  })

}
