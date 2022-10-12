const email = document.getElementById("email");
const validationPara = document.getElementById("validation");
const val1 = "@";
const val2 = ".com";
const valide = document.querySelector(".bi-check2");
const echec = document.querySelector(".bi-x-lg");

email.addEventListener("keyup", function checkEmail() {
  // email.value.substring(email.value.length - val2.length)
  if (email.value.indexOf(val1) != -1 && email.value.slice(-4) == val2) {
    validationPara.innerHTML= "your email address is valid";
    validationPara.style.color = "#09ff00";
    valide.style.display = "block";
    valide.style.color = "#09ff00";
    echec.style.display = "none";
  } else {
    validationPara.innerHTML= "please enter valid email adress";
    validationPara.style.color = "#ff0000";
    valide.style.display = "none";
    echec.style.display = "block";
    echec.style.color = "#ff0000";
  }
});
