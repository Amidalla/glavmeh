import "../styles/reset.scss";
import "../styles/styles.scss";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
Swiper.use([Pagination, Navigation, Autoplay]);

// Инициализация
const swiper = new Swiper(".slider-main", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});

const swiper2 = new Swiper(".slider-brands", {
    slidesPerView: 5,
    loop: true,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
});

const swiper3 = new Swiper(".slider-popular", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
});
