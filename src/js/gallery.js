// import { fetchEvents } from './service/api';

import articlesTpl from '../templates/galleryTmp.hbs';
import apiEvents from '../js/service/api';
import setPagination from './pagination';

// import articlesTpl from '../templates/galleryTmp.hbs';

const refs = {
  gallery: document.querySelector('#gallery-js'),
};

apiEvents.fetchEvents().then(data => {
  renderGallery(data);
  setPagination(data.page.totalElements);
});

function renderGallery(data) {
  const events = data._embedded.events;
  console.log(events);
  const markUp = articlesTpl(events);
  refs.gallery.innerHTML = markUp;

  // console.log(events.images);
}

export default renderGallery;
// .then(data => data.forEach(element => {
// }))

// // .then(data => data.forEach(element => {

// // }))
