const id_mybtn = document.getElementById("mybtn");
function getCoordinate() {
  var y = event.pageY - id_mybtn.offsetTop; // or offsety
  var x = event.pageX - id_mybtn.offsetLeft; // or offsetx
  console.log(y + " ; " + x);
  id_mybtn.style.setProperty("--aftertop", y + "px");
  id_mybtn.style.setProperty("--afterleft", x + "px");
  setTimeout(getCoordinate, 5000);
}
id_mybtn.addEventListener("mouseenter", getCoordinate);
