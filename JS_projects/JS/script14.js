const ChackNavbar = document.getElementById("checkNavbar");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");
let count = 1;

ChackNavbar.style.transform = "rotate(226deg)";
ChackNavbar.onclick = () => {
    if (count == 0) {
        ChackNavbar.style.transform = "rotate(226deg)"
        for (let i = 0; i < li.length; i++) {
            li[i].style.transform = "translateY(-50px)";
        }
        setTimeout(() => {
            ul.style.width = 10 + "px";
        }, 500)
        setTimeout(() => {
            ul.style.bottom = 27.5 + "px";
        }, 1000)

        count++;


    }
    else {
        ChackNavbar.style.transform = "rotate(0deg)"
        ul.style.bottom = 0 + "px";
        setTimeout(() => {
            ul.style.width = 80 + "%";
        }, 500)
        for (let i = 0; i < li.length; i++) {
            setTimeout(() => {
                li[i].style.transform = "translateY(0px)";
            }, 1000)
        }

        count--;

    }

}