import { error, alert } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

import contriesArray from '../json/countries.json';
import apiEvents from './service/api';
import galleryTmp from '../templates/galleryTmp.hbs';
import setPagination from './pagination';

import dropdownMenuTpl from '../templates/dropdownMenu.hbs';


const refs = {
    gallery: document.querySelector('#gallery-js'),

    formSearch: document.querySelector('#formSearch-js'),
    btnSearch: document.querySelector('#btnSearch-js'),

    searchCountryContainer: document.querySelector('#src-country-js'),
    dropdownMenu: document.querySelector('#dropdown-js'),
    dropdownBtn: document.querySelector('#dropdownBtn'),
    dropdownPlaceholder: document.querySelector('#dropdownPlaceholder-js'),
};

const refetchData = () => {
    apiEvents.fetchEvents().then(data => {
        const events = data._embedded.events;
        setPagination(data.page.totalElements);
        const markUp = galleryTmp(events);
        refs.gallery.innerHTML = markUp;
    }).catch(err => {
        error({
            text: 'Sorry, no event found 😭',
            delay: 2000,
        });
    });
    //  .catch(функция для ошибок);

};

// -------------------------------------Event search by keyword

const onSubmitRequestEvents = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const enteredKeyword = form.elements.formSearc.value;
    if (enteredKeyword === '') {
        alert({
            text: 'Please, enter the text ⚠',
            delay: 2000,
        });
    };
    apiEvents.keyword = enteredKeyword;

    refetchData();
    form.reset();
};

refs.formSearch.addEventListener('submit', onSubmitRequestEvents);

// --------------------------------------Event search by country

const closeOpenDropdownMenu = () => {
    refs.searchCountryContainer.classList.toggle('only-border-radius-top');
    refs.dropdownMenu.classList.toggle('is-hidden');
    refs.dropdownBtn.classList.toggle('transform-btn');
}

const onClickCountryName = (event) => {

    if (event.target.tagName !== 'P') return false;

    const getCountryCode = event.target.dataset.action;

    apiEvents.countryCode = getCountryCode;
    closeOpenDropdownMenu();
    refs.dropdownPlaceholder.textContent = event.target.textContent;

    refetchData();
    closeOpenDropdownMenu();
};

const markup = () => {
    const markupCountries = dropdownMenuTpl(contriesArray);
    refs.dropdownMenu.innerHTML = markupCountries;
};

const onClickDropdownMenu = (event) => {

    closeOpenDropdownMenu();
    markup();
};

refs.searchCountryContainer.addEventListener('click', onClickDropdownMenu);
refs.dropdownMenu.addEventListener('click', onClickCountryName);

// document.body.addEventListener('click', onCloseSelectionCountries);
// function onCloseSelectionCountries(event) {
//     refs.searchCountryContainer.classList.remove('only-border-radius-top');
//     refs.dropdownMenu.classList.remove('is-hidden');
//     refs.dropdownBtn.classList.remove('transform-btn');
// };