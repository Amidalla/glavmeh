import "../styles/reset.scss";
import "../styles/styles.scss";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
Swiper.use([Pagination, Navigation, Autoplay]);

// Инициализация
const swiper = new Swiper(".slider-main", {
    autoplay: true,
    pagination: {
        el: ".slider-main .swiper-pagination",
        clickable: true
    }
});

const swiper2 = new Swiper(".slider-brands", {
    slidesPerView: 5,
    loop: true,
    spaceBetween: 30,
    navigation: {
        nextEl: '.slider-brands .swiper-button-next',
        prevEl: '.slider-brands .swiper-button-prev'
    },
});

const swiper3 = new Swiper(".slider-popular", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: '.slider-popular .swiper-button-next',
        prevEl: '.slider-popular .swiper-button-prev'
    },
});

const swiper4 = new Swiper(".slider-new-items", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: '.slider-new-items .swiper-button-next',
        prevEl: '.slider-new-items .swiper-button-prev'
    },
});

const swiper5 = new Swiper(".slider-item-series", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: '.slider-item-series .swiper-button-next',
        prevEl: '.slider-item-series .swiper-button-prev'
    },
});

const swiper6 = new Swiper(".slider-main-reviews", {
    slidesPerView: 2,
    navigation: {
        nextEl: '.main-reviews__item .swiper-button-next',
        prevEl: '.main-reviews__item .swiper-button-prev'
    },
});