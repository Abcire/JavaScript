const div = document.querySelectorAll(".random_color");
window.onload = randomColor1();
// function random_color() {
//   for (let i = 0; i < div.length; i++) {
//     div[i].style.backgroundColor =
//       "rgba(" +
//       Math.floor(Math.random() * 256) +
//       ", " +
//       Math.floor(Math.random() * 256) +
//       ", " +
//       Math.floor(Math.random() * 256) +
//       ")";
//     div[i].innerHTML = div[i].style.backgroundColor;
//   }
// }

// other solution
function randomColor2() {
  const hexa_color = "123456789abcdef";
  var color = "#";
  for (let i = 0; i < 6; i++) {
    var random_color = Math.floor(Math.random() * hexa_color.length);
    color += hexa_color.charAt(random_color);
  }
  return color;
}
function randomColor1() {
  for (let i = 0; i < div.length; i++) {
    var color = randomColor2();
    div[i].style.backgroundColor = color;
    div[i].innerHTML = color;
  }
}
