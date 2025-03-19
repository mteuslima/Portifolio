if (localStorage.getItem('color-theme') === 'dark' || 
                    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }

// JavaScript do Carrossel certificados

document.addEventListener("DOMContentLoaded", function () {
const prevButton = document.querySelector("[data-carousel-prev]");
const nextButton = document.querySelector("[data-carousel-next]");
const carousel = document.getElementById("carousel-items");
const slides = Array.from(carousel.children);
const indicators = document.querySelectorAll("[data-slide]");
let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;

    indicators.forEach((indicator, index) => {
        indicator.classList.toggle("bg-gray-300", index === currentIndex);
        indicator.classList.toggle("bg-gray-700", index !== currentIndex);
    });
}

prevButton.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", function () {
        currentIndex = index;
        updateCarousel();
    });
});

updateCarousel();
});

// JavaScript do Carrossel projetos

document.addEventListener("DOMContentLoaded", function () {
    const prevButtonProj = document.querySelector("[data-carousel-prev-projetos]");
    const nextButtonProj = document.querySelector("[data-carousel-next-projetos]");
    const carouselProj = document.getElementById("carousel-projetos");
    const slidesProj = Array.from(carouselProj.children);
    const indicatorsProj = document.querySelectorAll("[data-carousel-indicator-projetos]");
    let currentIndexProj = 0;

    function updateCarouselProj() {
        const offsetProj = -currentIndexProj * 100;
        carouselProj.style.transform = `translateX(${offsetProj}%)`;

        indicatorsProj.forEach((indicator, index) => {
            indicator.classList.toggle("bg-gray-300", index === currentIndexProj);
            indicator.classList.toggle("bg-gray-700", index !== currentIndexProj);
        });
    }

    prevButtonProj.addEventListener("click", function () {
        currentIndexProj = (currentIndexProj - 1 + slidesProj.length) % slidesProj.length;
        updateCarouselProj();
    });

    nextButtonProj.addEventListener("click", function () {
        currentIndexProj = (currentIndexProj + 1) % slidesProj.length;
        updateCarouselProj();
    });

    indicatorsProj.forEach((indicator, index) => {
        indicator.addEventListener("click", function () {
            currentIndexProj = index;
            updateCarouselProj();
        });
    });

    updateCarouselProj();
});