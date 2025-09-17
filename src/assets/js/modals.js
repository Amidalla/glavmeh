export function InitModals() {
    // Modal elements
    const catalogModal = document.querySelector(".modal-catalog");
    const modalCall = document.querySelector(".modal-call");
    const modal = document.querySelector(".modal");
    const notification = document.querySelector(".notification");
    const modalDelivery = document.querySelector(".modal-delivery");
    const modalDeliveryMobile = document.querySelector(".modal-delivery_mobile");
    const modalFilter = document.querySelector(".modal-filter");
    const overlay = document.querySelector(".overlay");
    const mobileNavigation = document.querySelector(".mobile-navigation");
    const btnMenu = document.querySelector(".btn-menu");
    const mobileMenuClose = document.querySelector(".mobile-menu__close");

    // Open buttons
    const catalogButton = document.querySelector(".btn-catalog");
    const orderCallButtons = document.querySelectorAll(".btn-call");
    const purchaseInfoLink = document.querySelector(".purchase-info__link");
    const purchaseInfoButtons = document.querySelectorAll(".purchase-info__btn");
    const contactsButton = document.querySelector(".contacts__button");
    const oneClickButtons = document.querySelectorAll(".popular__one-click-btn");
    const addToCartButtons = document.querySelectorAll(".new-items__btn");
    const recommendedOneClickButtons = document.querySelectorAll(".recommended__one-click-btn");
    const similarOneClickButtons = document.querySelectorAll(".similar__one-click-btn");
    const catalogTableButtons = document.querySelectorAll(".catalog-table__button");
    const newItemsOneClickButtons = document.querySelectorAll(".new-items__one-click-btn");
    const filterMobileButtons = document.querySelectorAll(".filter-mobile_btn");
    const productCardMobileButtons = document.querySelectorAll(".product-card__btn_mobile");

    // Close buttons
    const modalCallCloseButton = document.querySelector(".modal-call__close");
    const modalCloseButton = document.querySelector(".modal__close");
    const modalDeliveryClose = document.querySelector(".modal-delivery__close");
    const modalDeliveryMobileClose = document.querySelector(".modal-delivery_mobile__close");
    const modalFilterClose = document.querySelector(".modal-filter__close");
    const mobileBtnClose = document.querySelector(".mobile-btn-close");


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


    function openMobileMenu() {
        mobileNavigation?.classList.add('opened');
        overlay?.classList.add('opened');
    }

    function closeMobileMenu() {
        mobileNavigation?.classList.remove('opened');
        overlay?.classList.remove('opened');
    }


    btnMenu?.addEventListener('click', (event) => {
        event.preventDefault();
        openMobileMenu();
    });

    mobileMenuClose?.addEventListener('click', (event) => {
        event.preventDefault();
        closeMobileMenu();
    });


    catalogButton?.addEventListener('click', (event) => {
        event.preventDefault();
        toggleModal(catalogModal, catalogButton, false);
    });


    orderCallButtons?.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            toggleModal(modalCall, button, true);
        });
    });

    purchaseInfoLink?.addEventListener('click', (event) => {
        event.preventDefault();
        toggleModal(modalDelivery, null, true);
    });


    purchaseInfoButtons?.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            toggleModal(notification, null, true);
        });
    });

    contactsButton?.addEventListener('click', (event) => {
        event.preventDefault();
        toggleModal(modalCall, null, true);
    });

    modalCallCloseButton?.addEventListener('click', () => {
        closeModal(modalCall, null, true);
    });

    modalDeliveryClose?.addEventListener('click', () => {
        closeModal(modalDelivery, null, true);
    });

    modalDeliveryMobileClose?.addEventListener('click', () => {
        closeModal(modalDeliveryMobile, null, true);
    });


    mobileBtnClose?.addEventListener('click', () => {
        closeModal(modalDeliveryMobile, null, true);
    });

    modalFilterClose?.addEventListener('click', () => {
        closeModal(modalFilter, null, true);
    });


    const allOneClickButtons = [
        ...oneClickButtons,
        ...recommendedOneClickButtons,
        ...similarOneClickButtons,
        ...catalogTableButtons,
        ...newItemsOneClickButtons
    ];

    allOneClickButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            toggleModal(modal, null, true);
        });
    });


    filterMobileButtons?.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            toggleModal(modalFilter, null, true);
        });
    });


    productCardMobileButtons?.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();

            if (window.innerWidth <= 1250) {

                const useOverlay = window.innerWidth <= 767;
                toggleModal(modalDeliveryMobile, null, useOverlay);
            }
        });
    });

    modalCloseButton?.addEventListener('click', () => {
        closeModal(modal, null, true);
    });

    addToCartButtons?.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            toggleModal(notification, null, true);
        });
    });

    // Close modals on outside click
    document.addEventListener('click', (event) => {

        if (mobileNavigation?.classList.contains('opened') &&
            !mobileNavigation.contains(event.target) &&
            !btnMenu?.contains(event.target)) {
            closeMobileMenu();
        }

        if (catalogModal?.classList.contains('opened') &&
            !catalogModal.contains(event.target) &&
            !catalogButton?.contains(event.target)) {
            closeModal(catalogModal, catalogButton, false);
        }

        if (modalCall?.classList.contains('opened') &&
            !modalCall.contains(event.target) &&
            !Array.from(orderCallButtons).some(btn => btn.contains(event.target)) &&
            !contactsButton?.contains(event.target)) {
            closeModal(modalCall, null, true);
        }

        if (modal?.classList.contains('opened') &&
            !modal.contains(event.target) &&
            !allOneClickButtons.some(btn => btn.contains(event.target))) {
            closeModal(modal, null, true);
        }

        if (notification?.classList.contains('opened') &&
            !notification.contains(event.target) &&
            !Array.from(addToCartButtons).some(btn => btn.contains(event.target)) &&
            !Array.from(purchaseInfoButtons).some(btn => btn.contains(event.target))) {
            closeModal(notification, null, true);
        }

        if (modalDelivery?.classList.contains('opened') &&
            !modalDelivery.contains(event.target) &&
            !purchaseInfoLink?.contains(event.target)) {
            closeModal(modalDelivery, null, true);
        }

        if (modalDeliveryMobile?.classList.contains('opened') &&
            !modalDeliveryMobile.contains(event.target) &&
            !Array.from(productCardMobileButtons).some(btn => btn.contains(event.target)) &&
            !mobileBtnClose?.contains(event.target)) {
            closeModal(modalDeliveryMobile, null, window.innerWidth <= 767);
        }

        if (modalFilter?.classList.contains('opened') &&
            !modalFilter.contains(event.target) &&
            !Array.from(filterMobileButtons).some(btn => btn.contains(event.target))) {
            closeModal(modalFilter, null, true);
        }
    });

    // Close modals on Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const openedModals = [
                { modal: mobileNavigation, callback: closeMobileMenu },
                { modal: catalogModal, callback: () => closeModal(catalogModal, catalogButton, false) },
                { modal: modalCall, callback: () => closeModal(modalCall, null, true) },
                { modal: modal, callback: () => closeModal(modal, null, true) },
                { modal: notification, callback: () => closeModal(notification, null, true) },
                { modal: modalDelivery, callback: () => closeModal(modalDelivery, null, true) },
                { modal: modalDeliveryMobile, callback: () => closeModal(modalDeliveryMobile, null, window.innerWidth <= 767) },
                { modal: modalFilter, callback: () => closeModal(modalFilter, null, true) }
            ];

            for (const { modal, callback } of openedModals) {
                if (modal?.classList.contains('opened')) {
                    callback();
                    break;
                }
            }
        }
    });

    // Close modals on overlay click
    overlay?.addEventListener('click', (event) => {
        if (event.target === overlay) {
            const openedModals = [
                { modal: mobileNavigation, callback: closeMobileMenu },
                { modal: modalCall, callback: () => closeModal(modalCall, null, true) },
                { modal: modal, callback: () => closeModal(modal, null, true) },
                { modal: notification, callback: () => closeModal(notification, null, true) },
                { modal: modalDelivery, callback: () => closeModal(modalDelivery, null, true) },
                { modal: modalDeliveryMobile, callback: () => closeModal(modalDeliveryMobile, null, window.innerWidth <= 767) },
                { modal: modalFilter, callback: () => closeModal(modalFilter, null, true) }
            ];

            for (const { modal, callback } of openedModals) {
                if (modal?.classList.contains('opened')) {
                    callback();
                    break;
                }
            }
        }
    });
}