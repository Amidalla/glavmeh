import "../styles/reset.scss";
import "../styles/styles.scss";
import LazyLoad from "vanilla-lazyload";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import IMask from 'imask';
import { Pagination, Navigation, Autoplay, Thumbs } from 'swiper/modules';
import { SlidersInit } from "./sliders";
import { InitModals } from "./modals";
Swiper.use([Pagination, Navigation, Autoplay, Thumbs]);


// Quantity counter functionality
window.addEventListener('DOMContentLoaded', () => {
    // Initializing Lazy
    const lazyLoadInstance = new LazyLoad({});

    // Initializing sliders
    SlidersInit();

    // Modal functions
    InitModals();


    const quantityElements = document.querySelectorAll('.modal__quantity');

    quantityElements.forEach(quantityElement => {
        const minusButton = quantityElement.querySelector('.modal__btn-minus');
        const plusButton = quantityElement.querySelector('.modal__btn-plus');
        const quantityInput = quantityElement.querySelector('input');

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


        quantityInput?.addEventListener('change', function() {
            let count = parseInt(this.value) || 1;
            count = Math.max(1, Math.min(count, 100));
            this.value = count;
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const element = document.querySelector('.product-card__info.purchase-info.purchase-fixed');
    if (!element) return;

    const scrollThreshold = 200;
    let isVisible = false;

    function handleScroll() {
        const shouldBeVisible = window.scrollY > scrollThreshold;

        if (shouldBeVisible !== isVisible) {
            isVisible = shouldBeVisible;

            if (shouldBeVisible) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        }
    }

    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    handleScroll();
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


        document.querySelectorAll('.filter__item.active').forEach(activeItem => {
            if (activeItem !== item) {
                activeItem.classList.remove('active');
            }
        });


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

// Fixed purchase info functionality
document.addEventListener('DOMContentLoaded', function() {
    const element = document.querySelector('.product-card__info.purchase-info.purchase-fixed');


    if (!element) return;

    const scrollThreshold = 300;
    let isVisible = false;

    function handleScroll() {
        const shouldBeVisible = window.scrollY > scrollThreshold;

        if (shouldBeVisible !== isVisible) {
            isVisible = shouldBeVisible;

            if (shouldBeVisible) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        }
    }

    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    handleScroll();

    Fancybox.bind("[data-fancybox]", {

        infinite: false,


        autoFocus: false,
        trapFocus: false,
        placeFocusBack: false,
        hideScrollbar: false,


        parentEl: document.body,

        Toolbar: {
            display: {
                left: ["infobar"],
                middle: [],
                right: ["close"],
            },
        },
        Thumbs: {
            autoStart: true,
        },
    });

    // Класс HardnessSelect
    class HardnessSelect {
        constructor(container) {
            this.container = container;
            this.header = container.querySelector('.hardness-select__header');
            this.currentValue = container.querySelector('.hardness-select__value');
            this.dropdown = container.querySelector('.hardness-select__dropdown');
            this.options = container.querySelectorAll('.hardness-select__option');
            this.hiddenInput = container.querySelector('.hardness-select__input');

            this.init();
        }

        init() {
            this.header.addEventListener('click', () => this.toggle());

            this.options.forEach(option => {
                option.addEventListener('click', () => {
                    this.selectOption(option);
                });
            });

            // Закрытие при клике вне
            document.addEventListener('click', (e) => {
                if (!this.container.contains(e.target)) {
                    this.close();
                }
            });
        }

        toggle() {
            if (this.dropdown.classList.contains('active')) {
                this.close();
            } else {
                this.open();
            }
        }

        open() {
            this.dropdown.classList.add('active');
            this.header.classList.add('active');
        }

        close() {
            this.dropdown.classList.remove('active');
            this.header.classList.remove('active');
        }

        selectOption(option) {
            const value = option.dataset.value;
            const displayValue = option.querySelector('.hardness-select__option-value').textContent;

            // Обновляем отображаемое значение
            this.currentValue.textContent = displayValue;

            // Обновляем скрытый инпут
            if (this.hiddenInput) {
                this.hiddenInput.value = value;
            }

            // Снимаем выделение со всех опций
            this.options.forEach(opt => {
                opt.removeAttribute('data-selected');
            });

            // Выделяем выбранную опцию
            option.setAttribute('data-selected', '');

            // Закрываем dropdown
            this.close();

            // Триггерим событие изменения
            this.container.dispatchEvent(new CustomEvent('hardness-change', {
                detail: { value, displayValue },
                bubbles: true
            }));
        }
    }

    // Инициализация всех hardness-select на странице
    document.querySelectorAll('.hardness-select').forEach(container => {
        new HardnessSelect(container);
    });
});

function initPhoneMasks() {
    const phoneInputs = document.querySelectorAll(`
        input[type="tel"],
        input[name="tel"],
        input[name="phone"],
        input[data-phone-input]
    `);

    phoneInputs.forEach(input => {
        let mask = null;

        const initMask = () => {
            if (!mask) {
                input.classList.add('phone-mask-active');
                mask = IMask(input, {
                    mask: '+{7} (000) 000-00-00',
                    lazy: false
                });

                if (!input.value) {
                    input.value = '+7 (';
                }
            }
        };

        const destroyMask = () => {
            if (mask) {
                const phoneNumber = input.value.replace(/\D/g, '');
                if (phoneNumber.length < 11 || phoneNumber === '7') {
                    input.value = '';
                }
                input.classList.remove('phone-mask-active');
                mask.destroy();
                mask = null;
            }
        };

        input.addEventListener('focus', initMask);
        input.addEventListener('blur', destroyMask);

        input.addEventListener('input', (e) => {
            if (mask && input.value === '+7 (' && e.inputType === 'deleteContentBackward') {
                destroyMask();
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initPhoneMasks();
});