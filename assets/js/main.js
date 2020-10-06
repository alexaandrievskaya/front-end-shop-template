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

let cartCounterLabel = document.querySelector('#cart-counter');
let buttonsContainer = document.querySelector('#content-container');
let cartCounter = 0;
let cartPrice = 0;

//const btnClickHandler = () => {
//    console.log('clicked')
//}
//buttons.forEach(item => item.addEventListener('click', btnClickHandler));
const btnClickHandler = (e) => {
    let target = e.target;

    if (target.classList.contains('item-actions__cart')){
        cartCounterLabel.innerHTML = `${++cartCounter}`;

        if (cartCounter === 1) cartCounterLabel.style.display = 'block';
    }
    // $599 <sup>25</sup>
    const mockData = +target.parentElement.previousElementSibling.innerHTML.replace(/^\$(\d+)\s\D+(\d+).*$/u, '$1.$2');

    //('$', '').replace(' <sup>', '.').replace('</sup>', '');

    cartPrice = Math.round((cartPrice + mockData) * 100) / 100;

    let restoreHTML = target.innerHTML;

    target.innerHTML = `Added ${cartPrice.toFixed(2)} $`;

    buttonsContainer.removeEventListener('click', btnClickHandler);
    target.disabled = true;

    setTimeout(() => {
        target.innerHTML = restoreHTML;
        buttonsContainer.addEventListener('click', btnClickHandler);
        target.disabled = false;
    }, 2000)
};

buttonsContainer.addEventListener('click', btnClickHandler);

// (/^\$(\d+)\s\D+(\d+).*$/u) replace $1.$2
