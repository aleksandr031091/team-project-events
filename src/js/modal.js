// import * as basicLightbox from 'basiclightbox';
// import 'basiclightbox/dist/basicLightbox.min.css';

import modalGalleryTpl from '../templates/modal-gallery.hbs';
import getRefs from './reference';
import apiEvents from '../js/service/api';

const refs = getRefs();

refs.gallery.addEventListener('click', onGalleryClick);
refs.closeBtn.addEventListener('click', closeOnClick);

function onGalleryClick(e) {
  const card = e.target.closest('.card-container');
  if (!card) return;

  renderEventMarkup(card);
  refs.jsLightbox.classList.add('is-open');
  document.body.classList.add('is-hidden');
}

function closeOnClick() {
  refs.jsLightbox.classList.remove('is-open');
  document.body.classList.remove('is-hidden');
}

function renderEventMarkup(card) {
  apiEvents.id = card.parentNode.dataset.id;
  apiEvents.fetchEventsById().then(data => {
    // const events = data._embedded.events;
    // console.log(events);
    renderEvent(events);
  });
}

function renderEvent(events) {
  refs.lightboxCard.insertAdjacentHTML('afterbegin', modalGalleryTpl(events));
}

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
