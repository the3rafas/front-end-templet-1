let btnWork = document.querySelector(".works .btn "),
    section = document.getElementById("sec-work"),
    elementWork1 = document.querySelectorAll(" .click-1"),
    elementWork2 = document.querySelectorAll(" .click-2"),
    liWork = document.querySelectorAll(".works ul li"),
    divWork = document.querySelectorAll(".main-container div");




btnWork.addEventListener("click", function () {
    section.style.cssText = "grid-template-rows: repeat(7,16rem);"
    elementWork1.forEach((el) => {
        el.classList.remove("none")
    });
})

btnWork.addEventListener("click", function () {
    section.style.cssText = "grid-template-rows: repeat(10,16rem);"
    elementWork2.forEach((el) => {
        el.classList.remove("none")
    });
    btnWork.style.display = "none";
})
liWork.forEach((li) => {
    li.addEventListener("click", function (e) {
        liWork.forEach(element => {
            element.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        let special = document.querySelectorAll(e.currentTarget.dataset.select);


        if (e.currentTarget.dataset.select === ".all") {
            divWork.forEach(element => { element.classList.remove("none"); });
            btnWork.style.display = "";
            section.style.cssText = "grid-template-rows:repeat(3,16rem);"
        } else {
            section.style.cssText = "grid-template-rows: repeat(3,16rem) !important;"
            btnWork.style.display = "none";
            divWork.forEach(element => {
                element.classList.add("none");
                element.classList.remove("specil-box", "specil-box-2", "specil-box-3", "specil-box-4", "specil-box-7", "specil-box-5", "specil-box-6")
            });
            document.querySelectorAll(e.currentTarget.dataset.select).forEach(element => {
                element.classList.remove("none");
            });
        }




    })
});
let clientBtnR = document.querySelector(".clients .r-btn"),
    clientBtnL = document.querySelector(".clients .l-btn"),
    clientdiv = document.querySelector(".client-logo> div"),
    clientImg = document.querySelectorAll(".client-logo  img");


clientBtnL.addEventListener("click", () => clientdiv.style.cssText = " transform: translateX(0%);");
// clientBtnR.addEventListener("click", () => clientdiv.style.cssText = " transform: translateX(-20%);");
clientBtnR.addEventListener("click", () => clientdiv.style.cssText = " transform: translateX(-38%);")












