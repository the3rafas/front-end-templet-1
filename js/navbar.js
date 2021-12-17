let nav = document.getElementsByTagName("nav"),
    navBtn = document.getElementById("navBtn"),
    navUl = document.getElementById("navUl");
window.onscroll = function () {
    if (window.scrollY >= nav[0].offsetTop + 60) {
        nav[0].style.backgroundColor = "#1a1a1a"
    } else {
        nav[0].style.backgroundColor = "transparent"
    }
};

var x = window.matchMedia("(max-width: 991px)");
if (x.matches) {
    navBtn.onclick = function () {
        if (navUl.style.transform !== "translateX(70%)") {
            navUl.style.cssText = "transform: translateX(90%);";
            navBtn.innerHTML = `<span class="og"></span><span></span><span class="og"></span>`;

        } else {

            navBtn.innerHTML = "X";
            navUl.style.cssText = "transform: translateX(0%); "

        }

    };
}
else {
    navUl.style.cssText = "transform: translateX(0%);"
    navUl.style.cssText = " display: flex;gap: 2rem;cursor: pointer; margin-right: 3.6rem; "
}

