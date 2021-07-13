const preloader = document.querySelector('#preload');

const showLoader = () => {
    preloader.classList.remove('visually-hidden');
}
const isHiddenLoader = () => {
    preloader.classList.add('visually-hidden');
}

showLoader();

setTimeout(() => {
    isHiddenLoader();
}, 1000);

export { showLoader, isHiddenLoader };










