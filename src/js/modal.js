import modalGalleryTpl from '../templates/modal-gallery.hbs';
import getRefs from './reference';
import apiEvents from '../js/service/api';

// import * as basicLightbox from 'basiclightbox';
// import 'basicLightbox/dist/basicLightbox.min.css';

// function openStudent(event) {
//   event.preventDefault();
//   if (event.target !== event.target.dataset.students)
// basicLightbox
//   .create(footerModal(icons), {
//     onClose: () => document.body.removeAttribute('style'),
//   })
//   .show();
//   document.body.setAttribute('style', 'overflow:hidden');
// }

const refs = getRefs();

refs.gallery.addEventListener('click', onGalleryClick);
refs.button.addEventListener('click', closeOnClick);
refs.closeLightbox.addEventListener('click', closeOnBackdrop);
document.addEventListener('keydown', closeOnEscape);

function onGalleryClick(e) {
  // e.preventDefault();
  const cardId = e.target.closest('li').dataset.action;
  if (!cardId) return;
  apiEvents.fetchEventsById(cardId).then(data => {
    const markUp = modalGalleryTpl(data);
    console.log(data);
    // basicLightbox.create(modalGalleryTpl(data)).show();
    // document.body.classList.add('modal-open');
    //
    refs.contentLightbox.innerHTML = markUp;
    refs.lightbox.classList.add('is-open');
    document.body.classList.add('modal-open');
  });
}

function closeOnClick() {
  refs.lightbox.classList.remove('is-open');
  document.body.classList.remove('modal-open');
}

function closeOnBackdrop(e) {
  if (e.target === e.currentTarget) {
    closeOnClick();
  }
}

function closeOnEscape(e) {
  if (e.code === 'Escape') {
    closeOnClick();
  }
}
