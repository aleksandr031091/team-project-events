import refs from './reference';

window.addEventListener('scroll', e => {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    refs.btnToTop.style.display = 'block';
  } else {
    refs.btnToTop.style.display = 'none';
  }
  refs.btnToTop.addEventListener('click', e => {
    return window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  });
});
