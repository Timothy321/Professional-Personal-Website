let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function beDribbled() {
    let basketball = document.getElementById("basketball");
    basketball.classList.add("dribbling");
    setTimeout(() => {
        basketball.classList.remove("dribbling");
    }, 1000);
}

basketball.addEventListener("click", function() {
    if (!basketball.classList.contains("dribbling")) {
        console.log("detected click")
        basketball.classList.add("dribbling");
        basketball.addEventListener("animationend", () => {
            basketball.classList.remove("dribbling");

        }, {once: true});
    }
})