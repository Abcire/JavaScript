const nav = document.getElementById("nav");
const body = document.getElementById("body");
const a = document.getElementsByTagName("a");
const section = document.querySelector("section");
window.onscroll = function () {
  if (
    document.documentElement.scrollTop >
    section.offsetTop - nav.offsetHeight
  ) {
    nav.style.backgroundColor = "#000";
    nav.style.boxShadow = "0px 5px  10px rgb(0, 0, 0, 0.7)";
    for (let i = 0; i < a.length; i++) {
      a[i].style.color = "#fff";
    }
  } else {
    nav.style.backgroundColor = "#fff";
    nav.style.boxShadow = "0px 5px  10px rgb(0, 0, 0, 0.3)";
    for (let i = 0; i < a.length; i++) {
      a[i].style.color = "red";
    }
  }
};
