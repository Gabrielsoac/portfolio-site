const DARK_LIGHT_MODE = document.querySelector(".button-dark-light-mode");
const FOOTER = document.querySelector(".main-footer");
const HEADER = document.querySelector(".main-header");
const BUTTON_LINK_PORTFOLIO = document.querySelector(".link-button");
const BUTTON_LINK_PROJECT = document.querySelectorAll(".link-button-project");
const body = document.querySelector("body");
const subtitle = document.querySelectorAll(".sub-title");
const SUPER_NAME = document.querySelector(".super-name");
const FOOTER_NAME = document.querySelector(".footer-name");
const ME_IMAGE = document.querySelector(".image-button");

DARK_LIGHT_MODE.addEventListener('click', e => {

    if(!body.classList.contains("dark-mode")){
        setDarkMode();
    } else {
        setLightMode();
    }
}
);

function setDarkMode(){

    DARK_LIGHT_MODE.src = "./assets/images/light-mode.png"; 
    
    ME_IMAGE.classList.add("image-button-dark-mode");

    SUPER_NAME.src = "https://readme-typing-svg.herokuapp.com?font=Playfair+Display&size=30&pause=1000&color=AA73DD&center=true&repeat=false&width=435&lines=Gabriel+Soares";
    FOOTER_NAME.classList.add("footer-name-dark");

    body.classList.add("dark-mode");
    
    HEADER.classList.remove("glass-effect-light");
    HEADER.classList.add("glass-effect-dark");
    
    FOOTER.classList.remove("glass-effect-light");
    FOOTER.classList.add("glass-effect-dark");

    BUTTON_LINK_PORTFOLIO.classList.remove("glass-effect-light");
    BUTTON_LINK_PORTFOLIO.classList.add("glass-effect-dark");

    BUTTON_LINK_PROJECT.forEach(e => {
        e.classList.remove("glass-effect-light");
        e.classList.add("glass-effect-dark");
    })

    subtitle.forEach(e => {
        e.classList.remove("sub-title");
        e.classList.add("sub-title-dark-mode");
    });
}

function setLightMode(){

    DARK_LIGHT_MODE.src = "./assets/images/night-mode.png"

    ME_IMAGE.classList.remove("image-button-dark-mode");

    SUPER_NAME.src = "https://readme-typing-svg.herokuapp.com?font=Playfair+Display&size=30&pause=1000&color=6E2AAD&center=true&repeat=false&width=435&lines=Gabriel+Soares";

    body.classList.remove("dark-mode");
    FOOTER_NAME.classList.remove("footer-name-dark");
    
    HEADER.classList.remove("glass-effect-dark");
    HEADER.classList.add("glass-effect-light");

    FOOTER.classList.remove("glass-effect-dark");
    FOOTER.classList.add("glass-effect-light");

    BUTTON_LINK_PROJECT.forEach(e => {
        e.classList.remove("glass-effect-dark");
        e.classList.add("glass-effect-light");
    })

    subtitle.forEach(e => {
        e.classList.remove("sub-title-dark-mode");
        e.classList.add("sub-title");
    });

    BUTTON_LINK_PORTFOLIO.classList.remove("glass-effect-dark");
    BUTTON_LINK_PORTFOLIO.classList.add("glass-effect-light");
}