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
        slidesPerView: 2,
        loop: true,
        spaceBetween: 15,
        navigation: {
            nextEl: '.slider-brands .swiper-button-next',
            prevEl: '.slider-brands .swiper-button-prev'
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            678: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1391: {
                slidesPerView: 5,
                spaceBetween: 30
            }
        }
    });

    const popularSlider = new Swiper(".slider-popular", {
        slidesPerView: 1,
        spaceBetween: 15,
        navigation: {
            nextEl: '.slider-popular .swiper-button-next',
            prevEl: '.slider-popular .swiper-button-prev'
        },
        breakpoints: {
            480: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1000: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1391: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    });

    const newItemsSlider = new Swiper(".slider-new-items", {
        slidesPerView: 1,
        spaceBetween: 15,
        navigation: {
            nextEl: '.slider-new-items .swiper-button-next',
            prevEl: '.slider-new-items .swiper-button-prev'
        },
        breakpoints: {
            480: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1000: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1391: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    });

    const itemSeriesSlider = new Swiper(".slider-item-series", {
        slidesPerView: 1,
        spaceBetween: 15,
        navigation: {
            nextEl: '.slider-item-series .swiper-button-next',
            prevEl: '.slider-item-series .swiper-button-prev'
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1000: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1391: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    });

    const reviewsSlider = new Swiper(".slider-main-reviews", {
        slidesPerView: 2,
        spaceBetween: 0,
        navigation: {
            nextEl: '.main-reviews__item .swiper-button-next',
            prevEl: '.main-reviews__item .swiper-button-prev'
        },
        breakpoints: {
            0: {
                slidesPerView: 'auto',
                spaceBetween: 20,
                centeredSlides: false,
                navigation: false,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 25,
                navigation: {
                    nextEl: '.main-reviews__item .swiper-button-next',
                    prevEl: '.main-reviews__item .swiper-button-prev'
                }
            },
            1100: {
                spaceBetween: 30
            },
            480: {
                spaceBetween: 20
            }
        }
    });

    const recommendedSlider = new Swiper(".slider-recommended", {
        slidesPerView: 1,
        spaceBetween: 15,
        navigation: {
            nextEl: '.slider-recommended .swiper-button-next',
            prevEl: '.slider-recommended .swiper-button-prev'
        },
        breakpoints: {
            480: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1000: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1391: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    });

    const similarSlider = new Swiper(".slider-similar", {
        slidesPerView: 1,
        spaceBetween: 15,
        navigation: {
            nextEl: '.slider-similar .swiper-button-next',
            prevEl: '.slider-similar .swiper-button-prev'
        },
        breakpoints: {
            480: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1000: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1391: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    });
}


document.addEventListener('DOMContentLoaded', function() {
    const thumbSlider = new Swiper('.card-slider__thumbs', {
        slidesPerView: 2,
        spaceBetween: 12,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            480: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2
            }
        }
    });

    const mainSlider = new Swiper('.card-slider__main', {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: '.card-slider__arrow--next',
            prevEl: '.card-slider__arrow--prev',
        },
        thumbs: {
            swiper: thumbSlider
        }
    });
});