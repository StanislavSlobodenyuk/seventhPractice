
"use strict"

let ourPartners = new Swiper('.our-partners-slider', {
    navigation: {
        nextEl: ".our-partners__swiperButtonNext",
        prevEl: ".our-partners__swiperButtonPrev",
    },
    // увімкнути/вимкнути захват та рух слайдів мишею на ПК
    simulateTouch: true,
    // чутливість
    touchRatio: 1,
    // кут роботи властивості
    touchAngle: 45,
    // курсор при переміщені
    grabCursor: true,
    // перемикання при кліку на слайд
    slideToClickedSlide: true,
    // управління клавіатурою 
    keyboard: {
        // ввімкнути/вимкнути 
        enabled: true,
        // ввімкнути тільки тоді коли слайдер видно
        onlyInViewport: true,
        // ввімкнути керування за допомогою page up/down
        pageUpDown: true,
    },
    // кількість слайдів для показу читатти там відключення функціоналу якщо слайдів менше чим порібно 
    slidesPerView: 6,
    watchOverflow: false,
    // кількісь слайдів для листання
    slidesPerGroup: 1,
    // відступи між слайдами
    spaceBetween: 0,
    // швидкість перемикання слайдів
    speed: 1000,
    breakpoints: {
        320: {
            slidesPerView: 3.2,
            slidesPerGroup: 3,
            slidesPerColumn: 2,
    
        },
        768: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
        1300: {
            slidesPerView: 5,
            slidesPerGroup: 2,
        },
        1400: {
            slidesPerView: 6,
            slidesPerGroup: 3,
        },
    }
})

let reviews = new Swiper('.reviews-slider', {
    navigation: {
        nextEl: ".reviews__swiperButtonNext",
        prevEl: ".reviews__swiperButtonPrev",
    },
    pagination: {
        el: ".reviews__swiper-pagination",
            clickable: true,
    },
    // увімкнути/вимкнути захват та рух слайдів мишею на ПК
    simulateTouch: true,
    // чутливість
    touchRatio: 1,
    // кут роботи властивості
    touchAngle: 45,
    // курсор при переміщені
    grabCursor: true,
    // перемикання при кліку на слайд
    slideToClickedSlide: true,
    // управління клавіатурою 
    keyboard: {
        // ввімкнути/вимкнути 
        enabled: true,
        // ввімкнути тільки тоді коли слайдер видно
        onlyInViewport: true,
        // ввімкнути керування за допомогою page up/down
        pageUpDown: true,
    },
    // кількість слайдів для показу читатти там відключення функціоналу якщо слайдів менше чим порібно 
    slidesPerView: 3,
    watchOverflow: true,
    // кількісь слайдів для листання
    slidesPerGroup: 3,
    // відступи між слайдами
    spaceBetween: 30,
    // швидкість перемикання слайдів
    speed: 1000,
    breakpoints: {
        992: {
            slidesPerView: 3,
        },
        769: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        }
    }
});