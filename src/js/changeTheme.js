import refs from './reference';

const checkboxChangeThemeRef = document.querySelector('#theme-switch-toggle');
const lightboxRef = document.querySelector('.lightbox');
// const modalStudentRef = document.querySelector('.modal-students');
const paginationRef = document.querySelector('#pagination');
const scrollRef = document.querySelector('.scroll.scroll-top');
const footerRef = document.querySelector('.footer__container');
const headerContainerRef = document.querySelector('.header-container');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

checkboxChangeThemeRef.addEventListener('change', onChangeTheme);

function onChangeTheme(e) {
  const darkThemeChange = document.body.classList.toggle(Theme.DARK);
  refs.lightbox.classList.toggle(Theme.DARK);
  refs.gallery.classList.toggle(Theme.DARK);
  //   const darkThemeModal = modalStudentRef.classList.toggle(Theme.DARK);
  paginationRef.classList.toggle(Theme.DARK);
  scrollRef.classList.toggle(Theme.DARK);
  footerRef.classList.toggle(Theme.DARK);
  headerContainerRef.classList.toggle(Theme.DARK);

  localStorage.setItem('darkTheme', darkThemeChange);
  //   localStorage.setItem('darkThemeBox', darkThemeLightbox);
  //   localStorage.setItem('darkThemeGallery', darkThemeGallery);
  //   //   localStorage.setItem('darkThemeModal', darkThemeModal);
  //   localStorage.setItem('darkThemePagination', darkThemePagination);
  //   localStorage.setItem('darkThemeScroll', darkThemeScroll);
  //   localStorage.setItem('darkThemeFooter', darkThemeFooter);
  //   localStorage.setItem('darkThemeHeader', darkThemeHeader);
}
populateTheme();

function populateTheme() {
  const savedPositionTheme = JSON.parse(localStorage.getItem('darkTheme'));

  if (savedPositionTheme) {
    checkboxChangeThemeRef.checked = true;
    document.body.classList.add(Theme.DARK);
    lightboxRef.classList.add(Theme.DARK);
    refs.gallery.classList.add(Theme.DARK);
    // modalStudentRef.classList.add(Theme.DARK);
    paginationRef.classList.add(Theme.DARK);
    scrollRef.classList.add(Theme.DARK);
    footerRef.classList.add(Theme.DARK);
    headerContainerRef.classList.add(Theme.DARK);
  }
}
