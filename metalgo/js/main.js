'use strict';

document.addEventListener('DOMContentLoaded', () => {
    ///mobileMenu
    const btnOpen = document.querySelector('#btnOpen'),
        menuList = document.querySelector('#menuList'),
        btnClose = document.querySelector('#btnClose'),
        overlay = document.querySelector('#overlay');

    const closeMenu = () => {
            menuList.classList.remove('open-menu');
            overlay.classList.remove('open-menu');
    };
    const openMenu = () => {
        menuList.classList.add('open-menu');
        overlay.classList.add('open-menu');
    };
    btnOpen.addEventListener('click', () => {
        openMenu();
    });
    btnClose.addEventListener('click', () => {
        closeMenu();
    });
    
    menuList.addEventListener('click', e => {
        if(menuList.contains(e.target)) {
            closeMenu();
        }
    });
    document.addEventListener('click', e => {
        if(menuList.classList.contains('open-menu')) {
            if(e.target === overlay) {
                closeMenu();
            }
        }
    });
});