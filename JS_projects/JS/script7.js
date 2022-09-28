const body = document.getElementById("body");
const heart = document.getElementById("heart");
body.addEventListener("mousemove", function () {
  animationFun();
});
alert("Move the mouse over the document or Swipe fingers to start animation ");
function animationFun() {
  var y = event.pageY;
  var x = event.pageX;
  const new_img = document.createElement("img");
  body.appendChild(new_img);
  var randomSize = Math.floor(Math.random() * 101);

  new_img.style.top = y + "px";
  new_img.style.left = x + "px";
  new_img.classList.add("heart");
  new_img.src = "https://cdn-icons-png.flaticon.com/128/210/210545.png";
  new_img.style.width = randomSize + "px";
  setTimeout(function () {
    new_img.remove();
    body.removeChild(new_img);
  }, 4000);
}
