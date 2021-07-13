import refs from './reference';

const showLoader = () => {
    refs.preloader.classList.remove('visually-hidden');
}

const isHiddenLoader = () => {
    refs.preloader.classList.add('visually-hidden');
}

showLoader();

setTimeout(() => {
    isHiddenLoader();
}, 1000);

export { showLoader, isHiddenLoader };










