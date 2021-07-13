export default function getRefs() {
  return {
    gallery: document.querySelector('#gallery-js'),
    closeModal: document.querySelector('[data-action="close-modal"]'),
    liCardGallery: document.querySelector('.card-container'),
    lightbox: document.querySelector('.js-lightbox'),
    button: document.querySelector('[data-action="close-lightbox"]'),
    contentLightbox: document.querySelector('.lightbox__content'),
    lightboxOverlay: document.querySelector('.lightbox__overlay'),

    // header nodes
    formSearch: document.querySelector('#formSearch-js'),
    btnSearch: document.querySelector('#btnSearch-js'),

    searchCountryContainer: document.querySelector('#src-country-js'),
    dropdownMenu: document.querySelector('#dropdown-js'),
    dropdownBtn: document.querySelector('#dropdownBtn'),
    dropdownPlaceholder: document.querySelector('#dropdownPlaceholder-js'),
  };
}
