import "../styles/reset.scss";
import "../styles/styles.scss";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
Swiper.use([Pagination, Navigation, Autoplay]);

const modal = document.querySelector(".modal-catalog");
const modal2 = document.querySelector(".modal-order-call");
const modal3 = document.querySelector(".modal-one-click");
const modal4 = document.querySelector(".product-added-modal");
const overlay = document.querySelector(".overlay");
const openButton = document.querySelector(".header__button_catalog");
const openButton2 = document.querySelector(".header__button_order-call");
const openButton3 = document.querySelectorAll(".popular__one-click-btn");
const openButton4 = document.querySelectorAll(".new-items__btn");
const openButton5 = document.querySelector(".contacts__button");
const closeButton = document.querySelector(".modal-order-call__close");
const closeButton2 = document.querySelector(".modal-one-click__close");


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


function openModal(modalElement, buttonElement = null, useOverlay = true) {
    modalElement.classList.add('opened');
    if (buttonElement) {
        buttonElement.classList.add('opened');
    }
    if (useOverlay) {
        overlay.classList.add('opened');
    }
}

function closeModal(modalElement, buttonElement = null, useOverlay = true) {
    modalElement.classList.remove('opened');
    if (buttonElement) {
        buttonElement.classList.remove('opened');
    }
    if (useOverlay) {
        overlay.classList.remove('opened');
    }
}

function toggleModal(modalElement, buttonElement = null, useOverlay = true) {
    if (modalElement.classList.contains('opened')) {
        closeModal(modalElement, buttonElement, useOverlay);
    } else {
        openModal(modalElement, buttonElement, useOverlay);
    }
}

openButton.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal(modal, openButton, false);
});

openButton2.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal(modal2, openButton2, true);
});

openButton5.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal(modal2, openButton2, true);
});

closeButton.addEventListener('click', () => closeModal(modal2, openButton2, true));

openButton3.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        toggleModal(modal3, null, true);
    });
});
closeButton2.addEventListener('click', () => closeModal(modal3, null, true));

openButton4.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        toggleModal(modal4, null, true);
    });
});

document.addEventListener('click', (event) => {
    if (modal.classList.contains('opened') &&
        !modal.contains(event.target) &&
        !openButton.contains(event.target)) {
        closeModal(modal, openButton, false);
    }

    if (modal2.classList.contains('opened') &&
        !modal2.contains(event.target) &&
        !openButton2.contains(event.target) &&
        !openButton5.contains(event.target)) {
        closeModal(modal2, openButton2, true);
    }

    if (modal3.classList.contains('opened') &&
        !modal3.contains(event.target) &&
        !Array.from(openButton3).some(btn => btn.contains(event.target))) {
        closeModal(modal3, null, true);
    }

    if (modal4.classList.contains('opened') &&
        !modal4.contains(event.target) &&
        !Array.from(openButton4).some(btn => btn.contains(event.target))) {
        closeModal(modal4, null, true);
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        if (modal.classList.contains('opened')) {
            closeModal(modal, openButton, false);
        } else if (modal2.classList.contains('opened')) {
            closeModal(modal2, openButton2, true);
        } else if (modal3.classList.contains('opened')) {
            closeModal(modal3, null, true);
        } else if (modal4.classList.contains('opened')) {
            closeModal(modal4, null, true);
        }
    }
});

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        if (modal2.classList.contains('opened')) {
            closeModal(modal2, openButton2, true);
        } else if (modal3.classList.contains('opened')) {
            closeModal(modal3, null, true);
        } else if (modal4.classList.contains('opened')) {
            closeModal(modal4, null, true);
        }
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const minusButton = document.querySelector('.minus');
    const plusButton = document.querySelector('.plus');
    const input = document.querySelector('.quantity-items input');

    minusButton.addEventListener('click', function(e) {
        e.preventDefault(); // Блокируем отправку формы
        let count = parseInt(input.value) - 1;
        count = Math.max(count, 1);
        input.value = count;
    });

    plusButton.addEventListener('click', function(e) {
        e.preventDefault(); // Блокируем отправку формы
        let count = parseInt(input.value) + 1;
        const maxValue = 100;
        count = Math.min(count, maxValue);
        input.value = count;
    });
});



document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#!') return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.querySelector('.header__button_search');
    const searchForm = document.querySelector('.search__form');
    const searchInput = document.querySelector('.form_search input[type="search"]');
    const searchSubmit = document.querySelector('.form_search__btn');
    const searchClose = document.querySelector('.search__close');


    searchBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (!searchForm.classList.contains('active')) {
            searchForm.classList.add('active');
            setTimeout(() => {
                searchInput.focus();
            }, 300);
        }
    });


    searchSubmit.addEventListener('click', function(e) {
        e.preventDefault();
        if (searchInput.value.trim() !== '') {
            searchInput.closest('form').submit();
        }
    });


    searchClose.addEventListener('click', function(e) {
        e.stopPropagation();
        closeSearch();
    });


    function closeSearch() {
        searchForm.classList.remove('active');
        searchInput.value = '';
    }


    document.addEventListener('click', function(e) {
        if (!searchForm.contains(e.target) && !searchBtn.contains(e.target) && searchForm.classList.contains('active')) {
            closeSearch();
        }
    });


    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchForm.classList.contains('active')) {
            closeSearch();
        }
    });


    searchForm.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});



