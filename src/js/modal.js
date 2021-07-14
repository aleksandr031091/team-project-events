import apiEvents from '../js/service/api';
import refs from './reference';
import renderGallery from './gallery';
import setPagination from './pagination';
import modalGalleryTpl from '../templates/modal-gallery.hbs';
import { showLoader, hideLoader } from './preload';

refs.gallery.addEventListener('click', onGalleryClick);

refs.lightbox.addEventListener('click', closeOnBackdrop);

function onGalleryClick(e) {

  const liItem = e.target.closest('li');
  if (!liItem) return;

  const cardId = liItem.dataset.action;
  if (!cardId) return;

  showLoader();

  apiEvents
    .fetchEventsById(cardId)
    .then(data => {
      const markUp = modalGalleryTpl(data);

      refs.contentLightbox.innerHTML = markUp;
      refs.lightbox.classList.add('is-open');
      document.body.classList.add('modal-open');

      const author = document.querySelector('[data-action="more-info"]');
      author.addEventListener('click', () => {
        onClickAuthorInfo(data);
      });

      const button = document.querySelector('[data-action="close-lightbox"]');
      button.addEventListener('click', closeOnClick);
      document.addEventListener('keydown', closeOnEscape);
    })
    .finally(hideLoader);
}

function onClickAuthorInfo(data) {
  closeOnClick();
  apiEvents.keyword = data._embedded.attractions[0].name;
  apiEvents.resetPage();

  apiEvents.fetchEvents().then(data => {
    renderGallery(data);
    setPagination(data.page.totalElements);
    refs.formSearch.elements.formSearc.value = apiEvents.keyword;
  });
}

function closeOnClick() {
  document.removeEventListener('keydown', closeOnEscape);
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
