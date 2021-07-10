// import * as basicLightbox from 'basiclightbox';
// import 'basiclightbox/dist/basicLightbox.min.css';

import modalGalleryTpl from '../templates/modal-gallery.hbs';
import getRefs from './reference';
import apiEvents from '../js/service/api';

const refs = getRefs();

refs.gallery.addEventListener('click', onGalleryClick);
refs.button.addEventListener('click', closeOnClick);

function onGalleryClick(e) {
  const cardId = e.target.closest('li').dataset.source;
  if (!cardId) return;
  apiEvents.fetchEventsById(cardId).then(data => {
    const markUp = modalGalleryTpl(data);
    console.log(data);
    refs.contentLightbox.innerHTML = markUp;
    refs.lightbox.classList.add('is-open');
    document.body.classList.add('is-hidden');
  });
}

function closeOnClick() {
  refs.lightbox.classList.remove('is-open');
  document.body.classList.remove('is-hidden');
}

// function renderEventMarkup() {
//   apiEvents.fetchEventsById().then(data => {
//     console.log(data);
//   });
// }

// function renderEvent(events) {
//   const markUp = modalGalleryTpl(events);
//   refs.lightboxCard.innerHTML = markUp;
// }
