let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  const slidesContainer = document.querySelector('.slides');
  const slideWidth = slides[0].clientWidth;
  slidesContainer.style.transform = `translateX(${-index * slideWidth}px)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}


setInterval(nextSlide, 3000);
