export function InitModals() {
    // Modal elements
    const catalogModal = document.querySelector(".modal-catalog");
    const modalCall = document.querySelector(".modal-call");
    const modal = document.querySelector(".modal");
    const notification = document.querySelector(".notification");
    const overlay = document.querySelector(".overlay");

    // Open buttons
    const catalogButton = document.querySelector(".btn-catalog");
    const orderCallButton = document.querySelector(".btn-call");
    const contactsButton = document.querySelector(".contacts__button");
    const oneClickButtons = document.querySelectorAll(".popular__one-click-btn");
    const addToCartButtons = document.querySelectorAll(".new-items__btn");

    // Close buttons
    const modalCallCloseButton = document.querySelector(".modal-call__close");
    const modalCloseButton = document.querySelector(".modal__close");

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
        toggleModal(modalCall, orderCallButton, true);
    });

    contactsButton?.addEventListener('click', (e) => {
        e.preventDefault();
        toggleModal(modalCall, orderCallButton, true);
    });

    modalCallCloseButton?.addEventListener('click', () => closeModal(modalCall, orderCallButton, true));

    oneClickButtons?.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            toggleModal(modal, null, true);
        });
    });

    modalCloseButton?.addEventListener('click', () => closeModal(modal, null, true));

    addToCartButtons?.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            toggleModal(notification, null, true);
        });
    });

    // Close modals on outside click
    document.addEventListener('click', (event) => {
        if (catalogModal?.classList.contains('opened') &&
            !catalogModal.contains(event.target) &&
            !catalogButton?.contains(event.target)) {
            closeModal(catalogModal, catalogButton, false);
        }

        if (modalCall?.classList.contains('opened') &&
            !modalCall.contains(event.target) &&
            !orderCallButton?.contains(event.target) &&
            !contactsButton?.contains(event.target)) {
            closeModal(modalCall, orderCallButton, true);
        }

        if (modal?.classList.contains('opened') &&
            !modal.contains(event.target) &&
            !Array.from(oneClickButtons).some(btn => btn.contains(event.target))) {
            closeModal(modal, null, true);
        }

        if (notification?.classList.contains('opened') &&
            !notification.contains(event.target) &&
            !Array.from(addToCartButtons).some(btn => btn.contains(event.target))) {
            closeModal(notification, null, true);
        }
    });

    // Close modals on Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            if (catalogModal?.classList.contains('opened')) {
                closeModal(catalogModal, catalogButton, false);
            } else if (modalCall?.classList.contains('opened')) {
                closeModal(modalCall, orderCallButton, true);
            } else if (modal?.classList.contains('opened')) {
                closeModal(modal, null, true);
            } else if (notification?.classList.contains('opened')) {
                closeModal(notification, null, true);
            }
        }
    });

    // Close modals on overlay click
    overlay?.addEventListener('click', (event) => {
        if (event.target === overlay) {
            if (modalCall?.classList.contains('opened')) {
                closeModal(modalCall, orderCallButton, true);
            } else if (modal?.classList.contains('opened')) {
                closeModal(modal, null, true);
            } else if (notification?.classList.contains('opened')) {
                closeModal(notification, null, true);
            }
        }
    });
}