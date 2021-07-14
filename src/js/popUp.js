import refs from './reference';

const wasMessageshow = localStorage.getItem('wasMessageshow');

function onPopUp() {
  if (wasMessageshow) return;
  const showTime = setTimeout(e => {
    refs.popUp.style.display = 'block';
    refs.popUp.addEventListener('click', e => {
      if (e.target.tagName !== 'A') return false;
      localStorage.setItem('wasMessageshow', 'true');
      e.currentTarget.style.display = 'none';
    });
    setTimeout(z => {
      clearTimeout(showTime);
      refs.popUp.style.display = 'none';
    }, 5000);
  }, 5000);
}
onPopUp();
