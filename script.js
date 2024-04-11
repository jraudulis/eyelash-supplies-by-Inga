let hamburgerMenu = document.getElementById("hamburger-menu");
let mobileNav = document.getElementById("mobile-nav-container");
let body = document.body;

function slideMobileNav (){
    hamburgerMenu.classList.toggle("show");
    mobileNav.classList.toggle("show");
    body.classList.toggle("mobile-nav-active");
}

hamburgerMenu.addEventListener('click', slideMobileNav);

