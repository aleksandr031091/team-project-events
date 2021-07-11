import studentTpl from '../templates/students-modal.hbs';

import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/dist/basicLightbox.min.css';

const button = document.querySelector('#footer-button-js');

console.log(button);

button.addEventListener('click', onKlick);

function onKlick(e) {
  console.log(e.target);
  basicLightbox.create(studentTpl()).show();
}

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();
