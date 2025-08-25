import Swiper from "swiper";

export function SlidersInit() {
    const mainSlider = new Swiper(".slider-main", {
        autoplay: true,
        pagination: {
            el: ".slider-main .swiper-pagination",
            clickable: true
        }
    });

    const brandsSlider = new Swiper(".slider-brands", {
        slidesPerView: 5,
        loop: true,
        spaceBetween: 30,
        navigation: {
            nextEl: '.slider-brands .swiper-button-next',
            prevEl: '.slider-brands .swiper-button-prev'
        },
    });

    const popularSlider = new Swiper(".slider-popular", {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.slider-popular .swiper-button-next',
            prevEl: '.slider-popular .swiper-button-prev'
        },
    });

    const newItemsSlider = new Swiper(".slider-new-items", {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.slider-new-items .swiper-button-next',
            prevEl: '.slider-new-items .swiper-button-prev'
        },
    });

    const itemSeriesSlider = new Swiper(".slider-item-series", {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.slider-item-series .swiper-button-next',
            prevEl: '.slider-item-series .swiper-button-prev'
        },
    });

    const reviewsSlider = new Swiper(".slider-main-reviews", {
        slidesPerView: 2,
        navigation: {
            nextEl: '.main-reviews__item .swiper-button-next',
            prevEl: '.main-reviews__item .swiper-button-prev'
        },
    });
}
