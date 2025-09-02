import "../styles/reset.scss";
import "../styles/styles.scss";
import LazyLoad from "vanilla-lazyload";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation, Autoplay, Thumbs } from 'swiper/modules';
import { SlidersInit } from "./sliders";
import { InitModals } from "./modals";
Swiper.use([Pagination, Navigation, Autoplay, Thumbs]);

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


//filter opening/closing
document.querySelectorAll('.filter__header').forEach(header => {
    header.addEventListener('click', function() {
        const item = this.parentElement;
        const isActive = item.classList.contains('active');

        // Close all open elements
        document.querySelectorAll('.filter__item.active').forEach(activeItem => {
            if (activeItem !== item) {
                activeItem.classList.remove('active');
            }
        });

        // Switch the current element
        if (!isActive) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});


//Text copying
document.addEventListener('DOMContentLoaded', function() {
    const copyIcon = document.querySelector('.article_number .copy-icon');

    if (copyIcon) {
        copyIcon.style.cursor = 'pointer';
        copyIcon.style.transition = 'opacity 0.3s ease';

        copyIcon.addEventListener('click', function() {
            const text = this.parentNode.textContent
                .replace(this.alt, '')
                .trim();

            navigator.clipboard.writeText(text)
                .then(() => {
                    console.log('Артикул скопирован:', text);


                    this.style.opacity = '0.3';


                    setTimeout(() => {
                        this.style.opacity = '1';
                    }, 300);
                })
                .catch(err => {
                    console.error('Ошибка копирования:', err);
                });
        });
    }
});

//Switching tabs
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.product-tabs__btn');
    const tabPanes = document.querySelectorAll('.product-tabs__pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.dataset.tab;


            tabButtons.forEach(btn => {
                btn.classList.remove('product-tabs__btn--active');
            });


            tabPanes.forEach(pane => {
                pane.classList.remove('product-tabs__pane--active');
            });


            this.classList.add('product-tabs__btn--active');
            document.getElementById(tabId).classList.add('product-tabs__pane--active');
        });
    });
});


// Arrow click handler
document.addEventListener('click', function(e) {

    if (e.target.closest('.mobile-menu__item > img')) {
        e.preventDefault();
        const menuItem = e.target.closest('.mobile-menu__item');
        const sublist = menuItem.querySelector('.mobile-menu__sublist');

        if (sublist) {
            sublist.classList.toggle('active');
            menuItem.classList.toggle('active');
        }
    }


    else if (e.target.closest('.mobile-menu__subitem > img')) {
        e.preventDefault();
        const subitem = e.target.closest('.mobile-menu__subitem');
        const listAdd = subitem.querySelector('.mobile-menu__list_add');

        if (listAdd) {
            listAdd.classList.toggle('active');
            subitem.classList.toggle('active');
        }
    }


    else if (e.target.closest('.mobile-menu__link_sub img')) {
        e.preventDefault();
        const linkSub = e.target.closest('.mobile-menu__link_sub');
        const sublist = linkSub.nextElementSibling;

        if (sublist && sublist.classList.contains('mobile-menu__sublist')) {
            sublist.classList.toggle('active');
            linkSub.classList.toggle('active');
        }
    }
});

