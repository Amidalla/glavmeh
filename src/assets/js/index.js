import "../styles/reset.scss";
import "../styles/styles.scss";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
Swiper.use([Pagination, Navigation, Autoplay]);

// Modal elements
const catalogModal = document.querySelector(".modal-catalog");
const orderCallModal = document.querySelector(".modal-order-call");
const oneClickModal = document.querySelector(".modal-one-click");
const productAddedModal = document.querySelector(".product-added-modal");
const overlay = document.querySelector(".overlay");

// Open buttons
const catalogButton = document.querySelector(".header__button_catalog");
const orderCallButton = document.querySelector(".header__button_order-call");
const contactsButton = document.querySelector(".contacts__button");
const oneClickButtons = document.querySelectorAll(".popular__one-click-btn");
const addToCartButtons = document.querySelectorAll(".new-items__btn");

// Close buttons
const orderCallCloseButton = document.querySelector(".modal-order-call__close");
const oneClickCloseButton = document.querySelector(".modal-one-click__close");

// Initializing sliders
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

// Modal functions
function openModal(modalElement, buttonElement = null, useOverlay = true) {
    modalElement?.classList.add('opened');
    buttonElement?.classList.add('opened');
    if (useOverlay) {
        overlay?.classList.add('opened');
    }
}

function closeModal(modalElement, buttonElement = null, useOverlay = true) {
    modalElement?.classList.remove('opened');
    buttonElement?.classList.remove('opened');
    if (useOverlay) {
        overlay?.classList.remove('opened');
    }
}

function toggleModal(modalElement, buttonElement = null, useOverlay = true) {
    if (modalElement?.classList.contains('opened')) {
        closeModal(modalElement, buttonElement, useOverlay);
    } else {
        openModal(modalElement, buttonElement, useOverlay);
    }
}

// Event listeners for modals
catalogButton?.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal(catalogModal, catalogButton, false);
});

orderCallButton?.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal(orderCallModal, orderCallButton, true);
});

contactsButton?.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal(orderCallModal, orderCallButton, true);
});

orderCallCloseButton?.addEventListener('click', () => closeModal(orderCallModal, orderCallButton, true));

oneClickButtons?.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        toggleModal(oneClickModal, null, true);
    });
});

oneClickCloseButton?.addEventListener('click', () => closeModal(oneClickModal, null, true));

addToCartButtons?.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        toggleModal(productAddedModal, null, true);
    });
});

// Close modals on outside click
document.addEventListener('click', (event) => {
    if (catalogModal?.classList.contains('opened') &&
        !catalogModal.contains(event.target) &&
        !catalogButton?.contains(event.target)) {
        closeModal(catalogModal, catalogButton, false);
    }

    if (orderCallModal?.classList.contains('opened') &&
        !orderCallModal.contains(event.target) &&
        !orderCallButton?.contains(event.target) &&
        !contactsButton?.contains(event.target)) {
        closeModal(orderCallModal, orderCallButton, true);
    }

    if (oneClickModal?.classList.contains('opened') &&
        !oneClickModal.contains(event.target) &&
        !Array.from(oneClickButtons).some(btn => btn.contains(event.target))) {
        closeModal(oneClickModal, null, true);
    }

    if (productAddedModal?.classList.contains('opened') &&
        !productAddedModal.contains(event.target) &&
        !Array.from(addToCartButtons).some(btn => btn.contains(event.target))) {
        closeModal(productAddedModal, null, true);
    }
});

// Close modals on Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        if (catalogModal?.classList.contains('opened')) {
            closeModal(catalogModal, catalogButton, false);
        } else if (orderCallModal?.classList.contains('opened')) {
            closeModal(orderCallModal, orderCallButton, true);
        } else if (oneClickModal?.classList.contains('opened')) {
            closeModal(oneClickModal, null, true);
        } else if (productAddedModal?.classList.contains('opened')) {
            closeModal(productAddedModal, null, true);
        }
    }
});

// Close modals on overlay click
overlay?.addEventListener('click', (event) => {
    if (event.target === overlay) {
        if (orderCallModal?.classList.contains('opened')) {
            closeModal(orderCallModal, orderCallButton, true);
        } else if (oneClickModal?.classList.contains('opened')) {
            closeModal(oneClickModal, null, true);
        } else if (productAddedModal?.classList.contains('opened')) {
            closeModal(productAddedModal, null, true);
        }
    }
});

// Quantity counter functionality
window.addEventListener('DOMContentLoaded', () => {
    const minusButton = document.querySelector('.minus');
    const plusButton = document.querySelector('.plus');
    const quantityInput = document.querySelector('.quantity-items input');

    minusButton?.addEventListener('click', function(e) {
        e.preventDefault();
        let count = parseInt(quantityInput?.value || 1) - 1;
        count = Math.max(count, 1);
        if (quantityInput) quantityInput.value = count;
    });

    plusButton?.addEventListener('click', function(e) {
        e.preventDefault();
        let count = parseInt(quantityInput?.value || 1) + 1;
        const maxValue = 100;
        count = Math.min(count, maxValue);
        if (quantityInput) quantityInput.value = count;
    });
});

// Smooth scroll for anchor links
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

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('.header__button_search');
    const searchForm = document.querySelector('.search__form');
    const searchInput = document.querySelector('.form_search input[type="search"]');
    const searchSubmitButton = document.querySelector('.form_search__btn');
    const searchCloseButton = document.querySelector('.search__close');

    searchButton?.addEventListener('click', function(e) {
        e.stopPropagation();
        if (!searchForm?.classList.contains('active')) {
            searchForm?.classList.add('active');
            setTimeout(() => {
                searchInput?.focus();
            }, 300);
        }
    });

    searchSubmitButton?.addEventListener('click', function(e) {
        e.preventDefault();
        if (searchInput?.value.trim() !== '') {
            searchInput?.closest('form')?.submit();
        }
    });

    searchCloseButton?.addEventListener('click', function(e) {
        e.stopPropagation();
        closeSearch();
    });

    function closeSearch() {
        searchForm?.classList.remove('active');
        if (searchInput) searchInput.value = '';
    }

    document.addEventListener('click', function(e) {
        if (!searchForm?.contains(e.target) &&
            !searchButton?.contains(e.target) &&
            searchForm?.classList.contains('active')) {
            closeSearch();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchForm?.classList.contains('active')) {
            closeSearch();
        }
    });

    searchForm?.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});