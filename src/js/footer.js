import refs from './reference';
import team from './team';
import studentTpl from '../templates/students-modal.hbs';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

refs.footerButton.addEventListener('click', onClick);

function onClick(e) {
 
  const instance = basicLightbox.create(studentTpl(team), {
    onClose: () => {
      document.body.classList.remove('no-scroll');
    },
  });
  instance.show();
  document.body.classList.add('no-scroll');
  const crossButton = document.querySelector('#cross');
  crossButton.addEventListener('click', () => instance.close());
  const savedPositionTheme = JSON.parse(localStorage.getItem('lightTheme'));

  if (savedPositionTheme) {
    document.querySelector('.basicLightbox').classList.add('light-theme');
  }
}
