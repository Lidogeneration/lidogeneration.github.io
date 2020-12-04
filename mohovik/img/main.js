'use strict';


document.addEventListener("DOMContentLoaded", () => {

    const loadInit = () => {
        if(navBar) {
            if(document.documentElement.scrollTop > 1) {
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

    if(window.innerWidth <= 992)
    {
        AOS.init({
            disable: true
        });
    }
    
    
    
    const btnToltip = document.querySelectorAll('[data-rol="btnToltip"]');
    if(btnToltip) {
        btnToltip.forEach(key => {
            key.addEventListener('click', e => {
                btnToltip.forEach(key => {
                    let tiltipP = key.querySelector('p');
                    tiltipP.classList.remove('showToltip');
                });
                let tiltipP = e.target.querySelector('p');
                tiltipP.classList.add('showToltip');
            });
        });
    }
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

});
const nameScroll = document.getElementById('input_order');
const customTextFormSpan = document.getElementById('customTextForm');

function setNameScroll(namescroll, customTextFormSpanF) {
    nameScroll.value = namescroll;
    customTextFormSpan.textContent = customTextFormSpanF;
}