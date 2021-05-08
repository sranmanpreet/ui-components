var navItems = document.getElementById("nav-items");
var navButtonImg = document.getElementById("nav-button-img");

function openNavbar() {
    if (navItems.classList.contains("nav-mobile")) {
        navItems.classList.remove("nav-mobile");
        navItems.classList.add("overlay");
        navButtonImg.setAttribute("src", "images/icon-close.svg");
    } else {
        navItems.classList.add("nav-mobile");
        navItems.classList.remove("overlay");
        navButtonImg.setAttribute("src", "images/icon-hamburger.svg");
    }
    console.log(navItems.style.display);
}

var body = document.getElementsByTagName("body")[0];
body.onresize = function() { myFunction() };

function myFunction() {
    if (body.clientWidth > 600) {
        navItems.classList.remove("nav-mobile");
        navItems.classList.remove("overlay");
    } else {
        navItems.classList.add("nav-mobile");
        navItems.classList.remove("overlay");
    }
}