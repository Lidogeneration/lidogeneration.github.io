'use strict';

document.addEventListener("DOMContentLoaded", () => {

    const navBtn = document.querySelector('[data-rol="navBtn"]'),
    navList = document.querySelector('[data-rol="navList"]'),
    navLiHide = document.querySelectorAll('[data-rol="navLiHide"]'),
    navBar = document.querySelector('[data-rol="navBar"]');
    if(navBtn && document.documentElement.clientWidth <= 992) {
        navBtn.addEventListener('click', () => {
            navBtn.classList.toggle('mobileBtnIn');
            navList.classList.toggle('showMenuList');
        });
        navLiHide.forEach( key => {
            key.addEventListener('click', () => {
                navBtn.classList.toggle('mobileBtnIn');
                navList.classList.toggle('showMenuList');
            });
        });
    }

    const loadInit = () => {
        if(navBar) {
            if(document.documentElement.scrollTop > 1 || document.documentElement.clientWidth <= 992) {
                navBar.classList.add('navbarwhite');
            }
            else {
                navBar.classList.remove('navbarwhite');
            }
        }
    };

    window.addEventListener('scroll', () => {
        loadInit();
    });
    window.addEventListener('load', () => {
        loadInit();
    });
    window.addEventListener('resize', () => {
        loadInit();
    });

    // const callButton = document.querySelector('#callButton');
    // callButton.addEventListener('click', () => {
    // callButton.classList.toggle('callBtnOn');
    // });
    
});

const nameScroll = document.getElementById('input_order');
const customTextFormSpan = document.getElementById('customTextForm');

function setNameScroll(namescroll, customTextFormSpanF) {
    nameScroll.value = namescroll;
    customTextFormSpan.textContent = customTextFormSpanF;
}