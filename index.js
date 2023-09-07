window.addEventListener("load", function () {
    document.onclick = myClickHandler;
    let prevButton = null;

    function myClickHandler(e) {
        const button = e.target.closest(".btn");
        if (button) {
            if (button === prevButton) {
                button.classList.toggle("active");
            } else {
                button.classList.add("active");
                if (prevButton) prevButton.classList.remove("active");
                prevButton = button;
            }
        } else {
            if (prevButton) prevButton.classList.remove("active");
        }
    }
});
