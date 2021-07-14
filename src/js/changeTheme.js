import refs from './reference';

const Theme = {
  LIGHT: 'light-theme',
};

refs.checkboxChangeThemeRef.addEventListener('change', onChangeTheme);

function onChangeTheme(e) {
  const lightThemeChange = document.body.classList.toggle(Theme.LIGHT);
  toggleClassList();
  localStorage.setItem('lightTheme', lightThemeChange);
}
populateTheme();

function populateTheme() {
  const savedPositionTheme = JSON.parse(localStorage.getItem('lightTheme'));

  if (savedPositionTheme) {
    refs.checkboxChangeThemeRef.checked = true;
    document.body.classList.toggle(Theme.LIGHT);
    toggleClassList();
  }
}

function toggleClassList() {
  refs.logo.classList.toggle('is-hidden');
  refs.logoLight.classList.toggle('is-hidden');
  refs.lightbox.classList.toggle(Theme.LIGHT);
  refs.gallery.classList.toggle(Theme.LIGHT);

  refs.paginationRef.classList.toggle(Theme.LIGHT);
  refs.scrollRef.classList.toggle(Theme.LIGHT);
  refs.footerRef.classList.toggle(Theme.LIGHT);
  refs.headerContainerRef.classList.toggle(Theme.LIGHT);
}
