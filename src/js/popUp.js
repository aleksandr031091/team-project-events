import refs from './reference';

const isHave = localStorage.getItem('wasClick');

function onPopUp() {
  const showTime = setTimeout(e => {
    if (!isHave) {
      refs.popUp.style.display = 'block';
      refs.popUp.addEventListener('click', e => {
        if (e.target.tagName !== 'A') return false;
        localStorage.setItem('wasClick', '1');
        e.currentTarget.style.display = 'none';
      });
    }
  }, 5000);
  setTimeout(z => {
    clearTimeout(showTime);
    refs.popUp.style.display = 'none';
  }, 10000);
}
onPopUp();
