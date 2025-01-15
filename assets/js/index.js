const DARK_LIGHT_MODE = document.querySelector(".button-dark-light-mode");
const FOOTER = document.querySelector(".main-footer");
const HEADER = document.querySelector(".main-header");
const body = document.querySelector("body");

DARK_LIGHT_MODE.addEventListener('click', e => {
    if(!body.classList.contains("dark-mode")){
        
        body.classList.add("dark-mode");
        
        HEADER.classList.remove("glass-effect-light");
        HEADER.classList.add("glass-effect-dark");
        
        FOOTER.classList.remove("glass-effect-light");
        FOOTER.classList.add("glass-effect-dark");

    } else {
        body.classList.remove("dark-mode");
        
        HEADER.classList.remove("glass-effect-dark");
        HEADER.classList.add("glass-effect-light");

        FOOTER.classList.remove("glass-effect-dark");
        FOOTER.classList.add("glass-effect-light");

    }
});