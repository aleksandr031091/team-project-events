import modalGalleryTpl from '../templates/modal-gallery.hbs';
import getRefs from './reference';
import apiEvents from '../js/service/api';
import renderGallery from './gallery';
import setPagination from './pagination';

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

refs.lightbox.addEventListener('click', closeOnBackdrop);
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
    //   получить ссылку на кнопочку, повесить на нее слушателя, в обработчике событий : закрыть модалку,
    // установить в аписервисе новое keyword с именем того артиста/звезды _embedded:
    // attractions :name , дальше вызываем фетчевентс
    //
    const author = document.querySelector('[data-action="more-info"]');
    author.addEventListener('click', onClickAuthorInfo);

    function onClickAuthorInfo(e) {
      e.preventDefault();
      closeOnClick();
      apiEvents.keyword = data._embedded.attractions[0].name;

      apiEvents.fetchEvents().then(data => {
        renderGallery(data);
        setPagination(data.page.totalElements);
      });
    }
  });

    const button = document.querySelector('[data-action="close-lightbox"]')

  button.addEventListener('click', closeOnClick);
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
