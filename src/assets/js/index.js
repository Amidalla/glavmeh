import "../styles/reset.scss";
import "../styles/styles.scss";
import LazyLoad from "vanilla-lazyload";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { SlidersInit } from "./sliders";
import { InitModals } from "./modals";
Swiper.use([Pagination, Navigation, Autoplay]);

// Initializing Lazy

const lazyLoadInstance = new LazyLoad({});

// Initializing sliders

SlidersInit();

// Modal functions

InitModals();

// Quantity counter functionality
window.addEventListener('DOMContentLoaded', () => {
    const minusButton = document.querySelector('.modal__btn-minus');
    const plusButton = document.querySelector('.modal__btn-plus');
    const quantityInput = document.querySelector('.modal__quantity input');

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
    const searchButton = document.querySelector(".btn-search");
    const searchForm = document.querySelector(".search__form");
    const searchInput = document.querySelector(".search__form input[type='search']");
    const searchSubmitButton = document.querySelector(".search__submit");
    const searchCloseButton = document.querySelector(".search__close");

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