
const bNav = document.getElementById('b_nav_id');
const dNavBar = document.getElementById('navbarTogglerId');
const nNavBar = document.getElementById('nav_bar_id');
const aLogo = document.getElementsByName('nALogo');
const arrNavLinks = document.getElementsByClassName('nav-link');

// Input name service
const nameScroll = document.getElementById('name_scroll_id');
const nameService = document.getElementById('name_service_id');

$(document).ready(() => {
  clickNavMenu();
  goPopUpYoutube();
  popUpContactForm();
  changeNavColor();
  ValidPhone();
  if(window.innerWidth < 992){
    $('.tab_popup').magnificPopup();
  }
});

$(window).resize(() => {
});

function setNameScroll(namescroll="-", nameservice="-") {
  nameScroll.value = namescroll;
  nameService.value = nameservice;
};

function tabPopUpDesc(link_id) {
  
}

function popUpContactForm() {
  $('.contact_popup').magnificPopup();
};
 
function goPopUpYoutube() {
  $('.popup-youtube').magnificPopup({
		type: 'iframe'
	});
};

const arrInputName = document.getElementsByName('name');
const arrInputPhone = document.getElementsByName('phone');
const arrBtnSendForm = document.getElementsByName('send');

for(let i = 0; i < arrInputName.length; i++) {
  arrInputName[i].oninput = inputNameChange;
}

for(let i = 0; i < arrInputPhone.length; i++) {
  arrInputPhone[i].oninput = inputNumberChange;
}

function inputNumberChange(event) {
}; 

function inputNameChange(event) {
 // if(event.target.value.length > 0) arrBtnSendFormFalse();
 // event.target.value передает текущий объект/элемент
};


function arrBtnSendFormFalse() {
  for(let i = 0; i < arrBtnSendForm.length; i++) {
    arrBtnSendForm[i].disabled = false;
    arrBtnSendForm[i].classList.remove('btn_disabled');
  }
};

function arrBtnSendFormTrue() {
  for(let i = 0; i < arrBtnSendForm.length; i++) {
    arrBtnSendForm[i].disabled = true;
    arrBtnSendForm[i].classList.add('btn_disabled');
  }
};

function ValidPhone() {
  $('.telephone').inputmask('+38(999) 999-99-99', { "oncomplete": () => { 
    arrBtnSendFormFalse();
  }, "onincomplete": () => { 
    arrBtnSendFormTrue();
  } }); 
};

$(document).click(function(event) { 
  checkClickOutSide(event);
});

function checkClickOutSide(event) {
  if(!$(event.target).closest(dNavBar).length && dNavBar.classList.contains('show')) bNav.click();
};

bNav.onclick = () => {
  if($(window).scrollTop() <= 30 && !dNavBar.classList.contains('show')) {
    nNavBar.style.backgroundColor= 'white';
    nNavBar.style.boxShadow = "0px 2px 3px 0px rgba(0,0,0,.4)";
  //  aLogo[0].style.color = 'black';
    $('.nav-link').removeClass('color_white');
  } else if($(window).scrollTop() <= 30 && dNavBar.classList.contains('show')) {
    nNavBar.style.backgroundColor = 'transparent';
    nNavBar.style.boxShadow = "none";
   // aLogo[0].style.color = 'white';
  }
};

window.onscroll = function() {
  changeNavColor();
};

function changeNavColor() {
  if($(window).scrollTop() > 30) {
    nNavBar.style.backgroundColor= 'white';
    nNavBar.style.boxShadow = "0px 2px 3px 0px rgba(0,0,0,.4)";
   // aLogo[0].style.color = 'black';
    $('.nav-link').removeClass('color_white');
  }
  else {
    nNavBar.style.boxShadow = 'none';
    if(dNavBar.classList.contains('show'))
      $('.nav-link').removeClass('color_white');
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

function clickNavMenu() {
  $(".a_menu").on("click", function (event) {
		event.preventDefault();
		let id = $(this).attr('href'),
			top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
      if(window.innerWidth < 992 && $("#b_nav_id").attr("aria-expanded")) bNav.click();
	});
};