const body = document.querySelector("body");
const container = document.getElementById("container");
const mode = document.getElementById("mode");

container.addEventListener("click", () => {
  mode.classList.toggle("darkMode");
  body.classList.toggle("body_darkMode");
});
