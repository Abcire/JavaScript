// creation of variables
let score_number = document.getElementById("score_number");
let random_number1 = document.getElementById("random_number1");
let random_number2 = document.getElementById("random_number2");
let true_false = document.getElementsByClassName("bi");
let loss = document.getElementById("nbr_loss");
let profit = document.getElementById("nbr_profit");

// edit the numbers random
random_number1.innerHTML = Math.floor(Math.random() * 10) + 1;
random_number2.innerHTML = Math.floor(Math.random() * 10) + 1;

function check_answer() {
  let answer = document.getElementById("answer").value;
  let result = random_number1.innerHTML * random_number2.innerHTML;
  // check the result
  if (answer == result) {
    score_number.innerHTML = parseInt(score_number.innerHTML) + 1;
    random_number1.innerHTML = Math.floor(Math.random() * 10) + 1;
    random_number2.innerHTML = Math.floor(Math.random() * 10) + 1;
    document.getElementById("answer").value = "";
    // change a color of the body
    document.getElementById("body").style.backgroundColor = "#06c200";
    // change color of icon
    true_false[0].style.color = "#06c200";
    true_false[1].style.color = "#000";
    // the profit
    profit.innerHTML = parseInt(profit.innerHTML) + 1;
  } else {
    score_number.innerHTML = parseInt(score_number.innerHTML) - 1;
    random_number1.innerHTML = Math.floor(Math.random() * 10) + 1;
    random_number2.innerHTML = Math.floor(Math.random() * 10) + 1;
    document.getElementById("answer").value = "";
    // change a color of the body
    document.getElementById("body").style.backgroundColor = "#ff0800";
    // change color of icon
    true_false[1].style.color = "#ff0800";
    true_false[0].style.color = "#000";
    // the loss
    loss.innerHTML = parseInt(loss.innerHTML) + 1;
  }
  //check nomber of the score and change his color
  let div_score = document.getElementById("score");
  let p_score = div_score.getElementsByTagName("p");
  if (score_number.innerHTML > 0) {
    for (let i = 0; i < p_score.length; i++) {
      p_score[i].style.color = "#046b00";
    }
  } else if (score_number.innerHTML < 0) {
    for (let i = 0; i < p_score.length; i++) {
      p_score[i].style.color = "#960500";
    }
  } else {
    for (let i = 0; i < p_score.length; i++) {
      p_score[i].style.color = "#000";
    }
  }
}
