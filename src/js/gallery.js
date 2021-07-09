// import { fetchEvents } from './service/api';

import articlesTpl from '../templates/galleryTmp.hbs';
import apiEvents from '../js/service/api';
=======
// import articlesTpl from '../templates/galleryTmp.hbs';


// const refs = {
//   gallery: document.querySelector('#gallery-js'),
// };

// fetchEvents().then(data => {
//   const events = data._embedded.events;
//   console.log(events);
//   const markUp = articlesTpl(events);
//   refs.gallery.innerHTML = markUp;
//   // console.log(events.images);
// });


// .then(data => data.forEach(element => {
// }))

window.addEventListener('load', fetchEvents);

function fetchEvents() {
  apiEvents.fetchEvents().then(data => {
    const events = data._embedded.events;
    renderEvent(events);
  });
}

function renderEvent(events) {
  refs.gallery.insertAdjacentHTML('beforeend', articlesTpl(events));
}
=======
// // .then(data => data.forEach(element => {

// // }))

