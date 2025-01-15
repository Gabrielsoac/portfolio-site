const DARK_LIGHT_MODE = document.querySelector(".button-dark-light-mode");
const HEADER = document.querySelector(".main.header");
const body = document.querySelector("body");

DARK_LIGHT_MODE.addEventListener('click', e => {
    if(!body.classList.contains("dark-mode")){
        body.classList.add("dark-mode");
    } else{
        body.classList.remove("dark-mode");
    }
});