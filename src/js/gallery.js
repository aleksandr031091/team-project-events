// import { fetchEvents } from './service/api';

import articlesTpl from '../templates/galleryTmp.hbs';
import apiEvents from '../js/service/api';
import pagination from './pagination';

// import articlesTpl from '../templates/galleryTmp.hbs';

const refs = {
  gallery: document.querySelector('#gallery-js'),
};

apiEvents.fetchEvents().then(data => {
  const events = data._embedded.events;
  console.log(events);
  const markUp = articlesTpl(events);
  refs.gallery.innerHTML = markUp;
  // console.log(events.images);
});

// .then(data => data.forEach(element => {
// }))

// // .then(data => data.forEach(element => {

// // }))
