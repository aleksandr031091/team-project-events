import refs from './reference';
import team from './team';

import studentTpl from '../templates/students-modal.hbs';

import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/dist/basicLightbox.min.css';


refs.footerButton.addEventListener('click', onClick);

function onClick(e) {
  console.log(e.target);
  const instance = basicLightbox.create(studentTpl(team), {
    onClose: () => {
      document.body.classList.remove('no-scroll');
    },
  });
  instance.show();
  document.body.classList.add('no-scroll');
  const crossButton = document.querySelector('#cross');
  crossButton.addEventListener('click', () => instance.close());
}

// function onClick(e) {
//   console.log(e.target);
//   const instance = basicLightbox.create(studentTpl(team), {
//     onClose: () => {
//       document.body.style.overflow = 'initial';
//     },
//   });
//   instance.show();
//   document.body.style.overflow = 'hidden';
//   const crossButton = document.querySelector('#cross');
//   console.log(crossButton);
//   crossButton.addEventListener('click', () => instance.close());
// }
