const popUp = document.querySelector('#notify-popUp');
const isHave = localStorage.getItem('wasClick');

function onPopUp() {
  const showTime = setTimeout(e => {
    if (!isHave) {
      popUp.style.display = 'block';
      popUp.addEventListener('click', e => {
        if (e.target.tagName !== 'A') return false;
        localStorage.setItem('wasClick', '1');
        e.currentTarget.style.display = 'none';
      });
    }
  }, 5000);
  setTimeout(z => {
    clearTimeout(showTime);
    popUp.style.display = 'none';
  }, 10000);
}
onPopUp();
