"use strict";

document.addEventListener("DOMContentLoaded", function() {
    let iconMenu = document.querySelector(".icon-menu");
    let menuBody = document.querySelector(".menu-body");
    let body = document.querySelector("body");
    let shadow = document.querySelector(".shadow");
    let boolMenu = false;

    let listLink = document.querySelectorAll(".list-link");

    iconMenu.addEventListener("click", function() {
        if (boolMenu === false) {
            addClass();
        } else if (boolMenu === true) {
            removeClass();
        }
    });
    shadow.addEventListener("click", function() {
        if (boolMenu === false) {
            addClass();
        } else if (boolMenu === true) {
            removeClass();
        }
    });

    const addClass = () => {
        iconMenu.classList.add("active");
        menuBody.classList.add("active");
        shadow.classList.add("active");
        body.classList.add("lock");

        for (let i = 0; i < listLink.length; i++) {
            setTimeout(() => {
                listLink[i].classList.add("active");
            }, 100 * i);
        }

        boolMenu = true;
    };
    const removeClass = () => {
        iconMenu.classList.remove("active");
        menuBody.classList.remove("active");
        shadow.classList.remove("active");
        body.classList.remove("lock");

        for (let i = 0; i < listLink.length; i++) {
            listLink[i].classList.remove("active");
        }

        boolMenu = false;
    };
});