const DARK_LIGHT_MODE = document.querySelector(".button-dark-light-mode");
const HEADER = document.querySelector(".main-header");
const body = document.querySelector("body");

DARK_LIGHT_MODE.addEventListener('click', e => {
    if(!body.classList.contains("dark-mode")){
        body.classList.add("dark-mode");
        HEADER.classList.remove("glass-efect-light");
        HEADER.classList.add("glass-efect-dark");

    } else {
        body.classList.remove("dark-mode");
        HEADER.classList.remove("glass-efect-dark");
        HEADER.classList.add("glass-efect-light");
    }
});