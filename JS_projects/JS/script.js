// creat a variables
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let am_pm = document.getElementById("am_pm");

// creat a function
function myTimer() {
  const date = new Date();
  hours.innerHTML = date.getHours();
  minutes.innerHTML = date.getMinutes();
  seconds.innerHTML = date.getSeconds();

  // check the time (AM & PM)
  let hour = date.getHours();
  if (hour > 12) {
    am_pm.innerHTML = "pm";
  } else if (hour < 23) {
    am_pm.innerHTML = "am";
  }

  //   add zero to houres and seconds and time
  let minute = date.getMinutes();
  let second = date.getSeconds();
  if (hour < 10) {
    hours.innerHTML = "0" + date.getHours();
  }
  if (minute < 10) {
    minutes.innerHTML = "0" + date.getMinutes();
  }
  if (second < 10) {
    seconds.innerHTML = "0" + date.getSeconds();
  }
}

// excute and repeat myTimer function every one second
setInterval(myTimer, 1000);
