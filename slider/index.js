let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updateSlidePosition() {
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide(step) {
    currentSlide = (currentSlide + step + totalSlides) % totalSlides;
    updateSlidePosition();
}

function autoSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlidePosition();
}

setInterval(autoSlide, 3000); // Change image every 3 seconds
