const img = document.querySelectorAll("img");
const right = document.getElementById("right");
const left = document.getElementById("left");
var num = 0;

left.addEventListener("click", img_slider);

function img_slider() {
  img[num].classList.remove("active");
  img[num].classList.add("activeLeft");

  num++;
  img[num].classList.remove("activeRight");
  img[num].classList.add("active");

  num++;
  img[num].classList.remove("notActive");
  img[num].classList.add("activeRight");
  num--;

  console.log(num);
}
