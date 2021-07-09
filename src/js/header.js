const refs = {
    dropdownMenu: document.querySelector('#dropdown-js'),
    dropdownBtn: document.querySelector('#dropdownBtn'),
};

console.log("~ refs.dropdownBtn", refs.dropdownBtn)
console.log("~ refs.dropdownMenu", refs.dropdownMenu)



const onClickDropdownMenu = (event) => {
    refs.dropdownMenu.classList.toggle('is-hidden')
    refs.dropdownBtn.classList.toggle('transform-btn');
};

refs.dropdownBtn.addEventListener('click', onClickDropdownMenu);