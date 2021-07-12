export default window.addEventListener('scroll', e => {
  const btn = document.querySelector('.scroll-top');
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
  btn.addEventListener('click', e => {
    return window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  });
});
