const total = document.getElementById("total");
const remaining = document.getElementById("remaining");
const txt = document.getElementById("txt");
let char_total = 0;
let char_remaining = 50;

// total charaters event
txt.addEventListener("keypress", totalCharaters);
function totalCharaters() {
  if (parseInt(total.innerHTML) == 50) {
    total.innerHTML = "50";
  } else {
    char_total += 1;
    total.innerHTML = char_total;
  }
}

// remainig charaters event
txt.addEventListener("keypress", remainingCharaters);
function remainingCharaters() {
  if (parseInt(remaining.innerHTML) == 0) {
    remaining.innerHTML = "0";
  } else {
    char_remaining -= 1;
    remaining.innerHTML = char_remaining;
  }
}

// check the backspace
txt.addEventListener("keydown", backspace);
function backspace() {
  if (event.key == "Backspace") {
    if (parseInt(total.innerHTML) == 0) {
      total.innerHTML = "0";
      remaining.innerHTML = "50";
    } else {
      char_total -= 1;
      char_remaining += 1;
      total.innerHTML = char_total;
      remaining.innerHTML = char_remaining;
    }
  }
}

// change the color
txt.addEventListener("focus", function () {
  document.getElementById("body").style.backgroundColor = "#fff";
  document.getElementsByClassName("container")[0].style.backgroundColor =
    "rgb(255, 123, 0)";
});
txt.addEventListener("blur", function () {
  document.getElementById("body").style.backgroundColor = "rgb(255, 123, 0)";
  document.getElementsByClassName("container")[0].style.backgroundColor =
    "#fff";
});

// the work of my teacher
// txt.addEventListener("keyup", function () {
//   total.innerHTML = txt.value.length;
//   remaining.innerHTML = txt.getAttribute("maxlength") - txt.value.length;
// });
