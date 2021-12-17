let lis = document.querySelectorAll(".fram-ul li"),
    divs = document.querySelectorAll(".float > .w-100");

lis.forEach(element => {
    element.addEventListener("click", function (e) {
        lis.forEach(element => {
            element.classList.remove("active-li");
        });
        e.currentTarget.classList.add("active-li")
        divs.forEach(ele => {
            ele.style.top = "24rem";

        });
        document.querySelector(e.currentTarget.dataset.cont).style.cssText = "top:0rem ;z-index:2;";

        console.log(document.querySelector(e.currentTarget.dataset.cont))
    })
});



let counter = document.querySelector(".counter"),
    nums = document.querySelectorAll(".counter span"),
    check = false;

window.onscroll = function () {
    if (window.scrollY >= "200") {
        if (!check) {
            nums.forEach(element => {
                counterStart(element)
            });
        } check = true;
    }
    if (window.scrollY >= "1850") {

        spans.forEach(span => {
            let value = span.dataset.width;
            span.style.width = value;

            console.log(value)

        });


    }
}
function counterStart(e) {
    let goal = e.dataset.goal;
    let start = setInterval(() => {
        e.textContent++;
        if (e.textContent == goal) {
            clearInterval(start)
        }
    }, 1000 / goal);

}
let spans = document.querySelectorAll(".spans span")


let Nbtn = document.getElementById("NBtn"),
    Ndiv = document.getElementById("Ndiv");


Nbtn.addEventListener("click", function () {
    if (Ndiv.style.top === "0rem") {
        Ndiv.style.top = "100%";
        Nbtn.innerHTML = ` <span class="navbar-toggler-icon"></span>`
    } else {
        Ndiv.style.top = "0rem"
        Nbtn.innerHTML = "X"
    }
})


