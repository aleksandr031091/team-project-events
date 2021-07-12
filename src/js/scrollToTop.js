export default window.addEventListener('click', scrollToTop);
function scrollToTop() {
  return window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}
