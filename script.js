import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

if (document.documentElement.clientWidth < 768) {
    let swiperContainer = document.querySelector('.brands-repair__content');
    let swiperWrapper = document.querySelector('.brands-repair__list');
    let swiperSlides = document.querySelectorAll('.brands-repair__item');

    swiperContainer.classList.add('swiper');
    swiperWrapper.classList.add('swiper-wrapper');
    for (let i = 0; i < swiperSlides.length; i++) {
        swiperSlides[i].classList.add('swiper-slide');
    }

    const swiper = new Swiper('.brands-repair__content', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        simulateTouch: true,
        grabCursor: true,
        slideToClickedSlide: true,
        spaceBetween: 16,
        slidesOffsetAfter: 32,
        slidesPerView: 1.2,
        breakpoints: {
            320: {
                slidesPerView: 1.2,
            },
            400: {
                slidesPerView: 1.4,
            },
            480: {
                slidesPerView: 1.6,
            },
            560: {
                slidesPerView: 1.8,
            },
            640: {
                slidesPerView: 2,
            },
            720: {
                slidesPerView: 2.2,
            },
        },
    });
}


let list = document.querySelector('.brands-repair__list');
let expandButton = document.querySelector('.brands-repair__expand-button');
let expandButtonText = document.querySelector('.brands-repair__expand-description');

expandButton.addEventListener('click', function () {
    if (list.classList.contains('brands-repair__list--expanded')) {
        list.classList.remove('brands-repair__list--expanded');
        expandButton.classList.remove('brands-repair__expand-button--rotated');
        expandButtonText.textContent = 'Показать все';
    } else {
        list.classList.add('brands-repair__list--expanded');
        expandButton.classList.add('brands-repair__expand-button--rotated');
        expandButtonText.textContent = 'Скрыть';
    }
});