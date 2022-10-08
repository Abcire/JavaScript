const h2 = document.getElementById("autoText");
let autoText = 1;
let text1 = "web developer";
let i = 0;

function autoText1() {
  setInterval(() => {
    if (i == text1.length && autoText == 1) {
      i = 0;
      h2.innerHTML = "i am a ";
      text1 = "freelancer";
      autoText--;
    } else if (i == text1.length && autoText == 0) {
      i = 0;
      h2.innerHTML = "i am a ";
      text1 = "web developer";
      autoText++;
    }
    h2.innerHTML += text1.charAt(i);
    i++;
  }, 250);
}

autoText1();
