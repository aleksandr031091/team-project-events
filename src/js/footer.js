import studentTpl from '../templates/students-modal.hbs';
import team from './team';
import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/dist/basicLightbox.min.css';

const footerButton = document.querySelector('#footer-button-js');
const crossButton = document.querySelector('#cross');
console.log(footerButton);

footerButton.addEventListener('click', onKlick);

function onKlick(e) {
  console.log(e.target);
  basicLightbox.create(studentTpl(team)).show();
}
