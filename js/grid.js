let divGrid1 = document.getElementById("div1"),
    divGrid2 = document.getElementById("div2"),
    btnGrid = document.getElementById("btnGrid"),
    liGrid = document.querySelectorAll("section ul li"),
    divGrid = document.querySelectorAll(" section .card"),
    divAll = document.getElementById("all");
btnGrid.onclick = function () {
    if (divGrid1.classList.contains("none")) {
        divGrid1.classList.remove("none")

    } else {
        divGrid2.classList.remove("none")
        btnGrid.classList.add("none")
    }
}


liGrid.forEach((li) => {
    li.addEventListener("click", function (e) {
        liGrid.forEach(element => {
            element.classList.remove("active");
        });
        e.currentTarget.classList.add("active");

        if (e.currentTarget.dataset.select === ".all") {
            divGrid.forEach(element => { element.classList.remove("none"); });
            btnGrid.classList.remove("none");

            console.log("hi")
        }
        else {
            btnGrid.classList.add("none");
            divGrid1.classList.remove("none");
            divGrid2.classList.remove("none");
            divGrid.forEach(element => {
                element.classList.add("none");

            });
            document.querySelectorAll(e.currentTarget.dataset.select).forEach(element => {
                element.classList.remove("none");

            });
            divAll.classList.add("d-flex")
            console.log(document.querySelectorAll(e.currentTarget.dataset.select))
        }


    });
});
