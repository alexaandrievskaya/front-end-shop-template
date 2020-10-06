(function(time) {
    let container = document.querySelector('#header-carousel');
    let slides = container.querySelectorAll('.carousel-item');

    let currentSlide = 0;
    let timerID = null;
    let slidesCount = slides.length;
    let interval = time;


    function gotoNth(n) {
        slides[currentSlide].classList.toggle('active');
        currentSlide = (slidesCount + n) % slidesCount;
        slides[currentSlide].classList.toggle('active');
    }

    function gotoNext() {
        gotoNth(currentSlide + 1);
    }

    function init() {
        timerID = setInterval(gotoNext, interval);
    }
}(2000));