import apiEvents from '../js/service/api';
import refs from './reference';
import setPagination from './pagination';

import articlesTpl from '../templates/galleryTmp.hbs';

import { showLoader, hideLoader } from './preload';

showLoader();
apiEvents.fetchEvents().then(data => {
  renderGallery(data);
  setPagination(data.page.totalElements);
}).finally(hideLoader);

function renderGallery(data) {
  const events = data._embedded.events;
  const markUp = articlesTpl(events);
  refs.gallery.innerHTML = markUp;
}

export default renderGallery;

