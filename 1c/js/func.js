
const bNav = document.getElementById('b_nav_id');
const dNavBar = document.getElementById('navbarTogglerId');
const nNavBar = document.getElementById('nav_bar_id');
const aLogo = document.getElementsByName('nALogo');
const arrNavLinks = document.getElementsByClassName('nav-link');

$(document).ready(()=> {
  ClickNavMenu();
});

$(document).click(function(event) { 
  CheckClickOutSide();
});

function CheckClickOutSide() {
  if(!$(event.target).closest(dNavBar).length && dNavBar.classList.contains('show')) bNav.click();
};

$(window).resize(()=> {

});

bNav.onclick = function() {
  if($(window).scrollTop() <= 30 && !dNavBar.classList.contains('show')) {
    nNavBar.style.backgroundColor= 'white';
  //  aLogo[0].style.color = 'black';
    $('.nav-link').removeClass('color_white');
  }else if($(window).scrollTop() <= 30 && dNavBar.classList.contains('show')) {
    nNavBar.style.backgroundColor = 'transparent';
   // aLogo[0].style.color = 'white';
  }
};

window.onscroll = function() {
  ChangeInNavbar();
};

function ChangeInNavbar() {
  if($(window).scrollTop() > 30){
    nNavBar.style.backgroundColor= 'white';
   // aLogo[0].style.color = 'black';
    $('.nav-link').removeClass('color_white');
  }
  else {
    if(dNavBar.classList.contains('show')){
      $('.nav-link').removeClass('color_white');
    }
    else{
      nNavBar.style.backgroundColor = 'transparent';
    //  aLogo[0].style.color = 'white';
      $('.nav-link').addClass('color_white');
    }
  }
};

$(window).click(()=>{
});


$(document).mouseup(function (e) {
});

function ClickNavMenu() {
  $(".a_menu").on("click", function (event) {
		event.preventDefault();
		let id = $(this).attr('href'),
			top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
      if(window.innerWidth < 992 && 
        $("#b_nav_id").attr("aria-expanded")) bNav.click();
	});
};