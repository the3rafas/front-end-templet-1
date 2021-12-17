let inputFooter = document.querySelector("[type = 'email']"),
    spanInput = document.getElementById("bar")
inputFooter.onfocus = () => {
    spanInput.style.width = "100%"
};
inputFooter.onblur = () => {
    spanInput.style.width = "0%"
};