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
