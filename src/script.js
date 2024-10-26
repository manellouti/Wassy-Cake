function toggleMenu() {
  document.querySelector("nav ul").classList.toggle("open");
}

document.getElementById('burgerMenu').addEventListener('click', toggleMenu);


let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.remove('active');

    currentSlide = (currentSlide + direction + slides.length) % slides.length;

    slides[currentSlide].classList.add('active');
    updateSlidePosition();
}

function updateSlidePosition() {
    const slides = document.querySelector('.slides');
    const slideWidth = slides.clientWidth;
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

