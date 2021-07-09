export default function getRefs() {
  return {
    gallery: document.querySelector('#gallery-js'),
    closeModal: document.querySelector('[data-action="close-modal"]'),
    liCardGallery: document.querySelector('.card-container'),
    jsLightbox: document.querySelector('.js-lightbox'),
    lightboxCard: document.querySelector('.lightbox-card'),
    closeBtn: document.querySelector('[data-action="close-modal"]'),
  };
}
