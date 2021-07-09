import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import modalGalleryTpl from '../templates/modal-gallery.hbs';
import getRefs from './reference';
import api from '../js/service/api';

const refs = getRefs();

refs.gallery.addEventListener('click', onGalleryClick);
refs.closeBtn.addEventListener('click', closeOnClick);

// function onGalleryClick(e) {
//   e.preventDefault();

//   if (e.target === e.currentTarget) {
//     return;
//   }
//   const liCard = e.target.closest('.card-container');
//   const imgCard = liCard.querySelector('.photo-img');

//   const changeModalImage = `<img src=${imgCard.dataset.source} alt="icon" />`;
//   const instance = basicLightbox.create(changeModalImage);

//   instance.show();
// }

function onGalleryClick(e) {
  let card = e.target.closest('.card-container');
  if (!card) return;

  renderMarkup();
  refs.jsLightbox.classList.add('is-open');
  document.body.classList.add('is-hidden');
}

function closeOnClick() {
  refs.jsLightbox.classList.remove('is-open');
  document.body.classList.remove('is-hidden');
}

function renderMarkup() {
  refs.gallery.insertAdjacentHTML('beforeend', modalGalleryTpl);
}
