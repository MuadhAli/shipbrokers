// code for video control
const video = document.querySelector('.custom-video-background');

video.addEventListener('loadedmetadata', () => {
    video.style.opacity = 1;
});


/* ==================
    TESTIMONIALS JS
   ==================*/
let currentSlide = 0;
const slides = document.querySelectorAll('.slide-un-cs');
const indicators = document.querySelectorAll('.indicator-un-cs'); // Add this line

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active'); // Add this line

    currentSlide = (currentSlide + direction + slides.length) % slides.length;

    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active'); // Add this line
}

function startAutoSlide() {
    setInterval(function () {
        changeSlide(1);
    }, 2000);
}
startAutoSlide();

// =============== TESTIMONIALS JS END ================