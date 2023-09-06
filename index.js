let allBtn = document.querySelectorAll(".btn");
allBtn[0].setAttribute("style", "position: absolute; top:66%; left: 23%;"); // Top714px Left:446px
allBtn[1].setAttribute("style", "position: absolute; top:30%; left: 30%;");
allBtn[2].setAttribute("style", "position: absolute; top:50%; left: 50%;");
allBtn.forEach(
    (btn) =>
        (btn.onclick = function () {
            this.classList.toggle("show-label");
            btn.style.top = "";
        }),
);

function inputPeriod() {
    let period = document.querySelector(".slider-period__input");

    /*  period.style.background =
    "-webkit-linear-gradient(left, #68b738 0%, #68b738 " + period.value + "%, #cacaca " + period.value + "%, #cacaca 0%"; */
}
