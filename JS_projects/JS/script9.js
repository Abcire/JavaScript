const header = document.querySelector("header");

window.onscroll = () => {
  header.style.opacity = 1 - window.pageYOffset / 700;
  header.style.backgroundSize = 150 - window.pageYOffset / 40 + "%";
};
