import apiEvents from '../js/service/api';
import refs from './reference';
import setPagination from './pagination';

import articlesTpl from '../templates/galleryTmp.hbs';

import { showLoader, hideLoader } from './preload';


// import articlesTpl from '../templates/galleryTmp.hbs';


showLoader();
apiEvents.fetchEvents().then(data => {
  renderGallery(data);
  setPagination(data.page.totalElements);
}).finally(hideLoader);

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
