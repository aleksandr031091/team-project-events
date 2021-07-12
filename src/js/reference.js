export default function getRefs() {
  return {
    gallery: document.querySelector('#gallery-js'),
    closeModal: document.querySelector('[data-action="close-modal"]'),
    liCardGallery: document.querySelector('.card-container'),
    lightbox: document.querySelector('.js-lightbox'),
    closeLightbox: document.querySelector('section.js-lightbox'),
    button: document.querySelector('[data-action="close-lightbox"]'),
    contentLightbox: document.querySelector('.lightbox__content'),
    lightboxOverlay: document.querySelector('.lightbox__overlay'),
  };
}
