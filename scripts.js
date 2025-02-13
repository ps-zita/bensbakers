document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active');
});

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dot');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;
let autoScrollInterval;

function showSlide(index) {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    if (window.innerWidth <= 768) {
        sliderWrapper.style.transform = `translateX(${-index * 100}%)`;
    } else {
        sliderWrapper.style.transform = `translateX(${-index * 50}%)`;
    }
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function updateIndex(delta) {
    currentIndex += delta;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

function startAutoScroll() {
    autoScrollInterval = setInterval(() => updateIndex(1), 3000);
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(index);
        stopAutoScroll();
        startAutoScroll();
    });
});

prevButton.addEventListener('click', () => {
    updateIndex(-1);
    stopAutoScroll();
    startAutoScroll();
});

nextButton.addEventListener('click', () => {
    updateIndex(1);
    stopAutoScroll();
    startAutoScroll();
});

showSlide(currentIndex);
startAutoScroll();