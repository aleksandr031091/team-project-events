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
};

checkboxChangeThemeRef.addEventListener('change', onChangeTheme);

function onChangeTheme(e) {
  const lightThemeChange = document.body.classList.toggle(Theme.LIGHT);

  toggleClassList();
  localStorage.setItem('lightTheme', lightThemeChange);
}
populateTheme();

function populateTheme() {
  const savedPositionTheme = JSON.parse(localStorage.getItem('lightTheme'));

  if (savedPositionTheme) {
    checkboxChangeThemeRef.checked = true;
    document.body.classList.toggle(Theme.LIGHT);
    toggleClassList();
  }
}

function toggleClassList() {
  refs.lightbox.classList.toggle(Theme.LIGHT);
  refs.gallery.classList.toggle(Theme.LIGHT);
  //   const darkThemeModal = modalStudentRef.classList.toggle(Theme.DARK);
  paginationRef.classList.toggle(Theme.LIGHT);
  scrollRef.classList.toggle(Theme.LIGHT);
  footerRef.classList.toggle(Theme.LIGHT);
  headerContainerRef.classList.toggle(Theme.LIGHT);
}
