import contriesArray from '../json/countries.json';
import dropdownMenuTpl from '../templates/dropdownMenu.hbs'
console.log("~ contriesArray", contriesArray)

const refs = {
    formSearch: document.querySelector('#formSearch-js'),
    btnSearch: document.querySelector('#btnSearch-js'),

    dropdownMenu: document.querySelector('#dropdown-js'),
    dropdownBtn: document.querySelector('#dropdownBtn'),
};

// refs.btnSearch.addEventListener('submit')


// selection-countries

const onClickDropdownMenu = (event) => {
    refs.dropdownMenu.classList.toggle('is-hidden')
    refs.dropdownBtn.classList.toggle('transform-btn');

    const murcupCountries = dropdownMenuTpl(contriesArray);
    refs.dropdownMenu.innerHTML = murcupCountries;
};

refs.dropdownBtn.addEventListener('click', onClickDropdownMenu);