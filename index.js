window.addEventListener("load", function () {
    document.onclick = myClickHandler;
    function myClickHandler(e) {
        const parent = e.target.closest(".btn").classList.toggle("active");
        console.log("e.target: ", e.target);
    }
});
