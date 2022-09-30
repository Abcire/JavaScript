const img = document.querySelectorAll("img");
const right = document.getElementById("right");
const left = document.getElementById("left");
var num = 0;

right.style.opacity = "0.2";
left.addEventListener("click", img_slider);
function img_slider() {
  if (num == 4) {
    left.style.opacity = "0.2";
    right.style.opacity = "1";
    return false;
  } else {
    left.style.opacity = "1";
    right.style.opacity = "1";
    img[num].classList.remove("active");
    img[num].classList.add("activeLeft");

    num++;
    img[num].classList.remove("activeRight");
    img[num].classList.add("active");
  }

  if (num == 4) {
    left.style.opacity = "0.2";
    right.style.opacity = "1";
    return false;
  } else {
    left.style.opacity = "1";
    right.style.opacity = "1";
    num++;
    img[num].classList.remove("notActive");
    img[num].classList.add("activeRight");

    num--;
  }
}

right.addEventListener("click", img_slider2);
function img_slider2() {
  if (num == 0) {
    left.style.opacity = "1";
    right.style.opacity = "0.2";
    return false;
  } else {
    right.style.opacity = "1";
    left.style.opacity = "1";
    img[num].classList.remove("active");
    img[num].classList.add("activeRight");

    num--;
    img[num].classList.remove("activeLeft");
    img[num].classList.add("active");
  }

  if (num == 0) {
    left.style.opacity = "1";
    right.style.opacity = "0.2";
    return false;
  } else {
    left.style.opacity = "1";
    right.style.opacity = "1";
  }
}
