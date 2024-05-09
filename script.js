let hamburgerMenu = document.getElementById("hamburger-menu");
let mobileNav = document.getElementById("mobile-nav-container");
let shopCartIcon = document.getElementById("shop-cart-icon");
let shopCart = document.getElementById("shop-cart")
let closingSymbol = document.getElementById("closing-symbol");
let body = document.body;

function slideMobileNav (){
    hamburgerMenu.classList.toggle("show");
    mobileNav.classList.toggle("show");
    body.classList.toggle("mobile-nav-active");
}

function slideShopCart(){
    shopCartIcon.classList.toggle("show");
    shopCart.classList.toggle("show");
    body.classList.toggle("shop-cart-active");
}

hamburgerMenu.addEventListener('click', slideMobileNav);
shopCartIcon.addEventListener('click', slideShopCart);
closingSymbol.addEventListener('click', slideShopCart);

