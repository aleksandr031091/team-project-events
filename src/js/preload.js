import refs from './reference';

const showLoader = () => {
    refs.preloader.classList.remove('visually-hidden');
}

const hideLoader = () => {
    refs.preloader.classList.add('visually-hidden');
}

showLoader();

setTimeout(() => {
    hideLoader();
}, 1000);

export { showLoader, hideLoader };










