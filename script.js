document.addEventListener("DOMContentLoaded", function () {
    const resume = document.getElementById("resume");
    const colorButton = document.getElementById("colorButton");
    let index = 1 

    const colors = ["#2e2e2e", "#3498db"]

    colorButton.addEventListener("click", function () {
        resume.style.backgroundColor =  colors[index]

        index = index >= colors.length - 1 ? 0 : index + 1;
    });
});
