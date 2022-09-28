const btn = document.getElementById("myBtn");
const video = document.getElementById("trailer");
const div = document.querySelector("div");
const X = document.getElementById("X");

btn.onclick = () => {
  div.style.filter = "blur(5px)";
  video.style.display = "block";
  X.style.display = "block";
};
X.onclick = () => {
  div.style.filter = "blur(0px)";
  video.style.display = "none";
  X.style.display = "none";
};
