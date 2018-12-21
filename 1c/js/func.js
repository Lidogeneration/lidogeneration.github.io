
const bNav = document.getElementById('gamburger-id');
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
  
});

function myFunctionClickGamburger() {
  bNav.classList.toggle("change");
}

if(window.innerWidth < 992){
  $('.tab_popup').magnificPopup();
}

const arrTabPopup = document.getElementsByClassName('tab_popup');

function tabPopUpDesc(link_id) {
  
};

$(window).resize(() => {
});

function setNameScroll(namescroll="-", nameservice="-") {
  nameScroll.value = namescroll;
  nameService.value = nameservice;
};

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

const btnConsultForm = document.getElementById('b-consultation-id');

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
  arrBtnSendForm[0].disabled = false;
  arrBtnSendForm[0].classList.remove('btn_disabled');
  btnConsultForm.disabled = false;
};

function arrBtnSendFormTrue() {
  arrBtnSendForm[0].disabled = true;
  arrBtnSendForm[0].classList.add('btn_disabled');
  btnConsultForm.disabled = true;
};

function ValidPhone() {
  $('.telephone').inputmask('+38(999) 999-99-99', { "oncomplete": () => { 
    arrBtnSendFormFalse();
  }, "onincomplete": () => { 
    arrBtnSendFormTrue();
  } }); 
};

$(document).click((event) => { 
  checkClickOutSide(event);
});

function checkClickOutSide(event) {
  if(!$(event.target).closest(dNavBar).length && dNavBar.classList.contains('show')) bNav.click();
};

bNav.onclick = () => {
  myFunctionClickGamburger();
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
  startAdvantages();
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

$(window).click(() => {
  
});

// НАВИГАТОР
// navigator.geolocation.getCurrentPosition(function(position) {
  //   console.log(position.coords.latitude + " " + position.coords.longitude);
  // });

$(document).mouseup((e) => {
});

function clickNavMenu() {
  $(".a_menu").on("click", function (event) {
		event.preventDefault();
		let id = $(this).attr('href'),
			top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
      if(window.innerWidth < 992 && $("#gamburger-id").attr("aria-expanded")) bNav.click();
	});
};

const advScroll = document.getElementById('advantages_id');
const reviewsScroll = document.getElementById('reviews_id');
const arrCounterSpanAdv = document.getElementsByClassName('counter-span-advantages');
const arrLevelDivAdv = document.getElementsByClassName('level-div-advantages');

let checkScrollY = false;

window.onload = () => {
  checkScrollY = false;
  startAdvantages();
};

function startAdvantages() {
  if(window.scrollY >= (advScroll.offsetTop - 200) && window.scrollY < (reviewsScroll.offsetTop - 200) && !checkScrollY) {
    checkScrollY = true;

    let counterLevel=[0,0,0,0];
    const fps = 40; 
    let timer = setInterval(function() {
        if(arrCounterSpanAdv[3].innerHTML === '100') clearInterval(timer);
        if(arrCounterSpanAdv[0].innerHTML !== '45') {
          ++arrCounterSpanAdv[0].innerHTML;
          counterLevel[0]+=1.5;
          arrLevelDivAdv[0].style.height = counterLevel[0].toString() + 'px';
        } 
        if(arrCounterSpanAdv[1].innerHTML !== '30') {
          ++arrCounterSpanAdv[1].innerHTML;
          counterLevel[1]+=1.5;
          arrLevelDivAdv[1].style.height = counterLevel[1].toString() + 'px';
        }
        if(arrCounterSpanAdv[2].innerHTML !== '80') {
          ++arrCounterSpanAdv[2].innerHTML;
          counterLevel[2]+=1.5;
          arrLevelDivAdv[2].style.height = counterLevel[2].toString() + 'px';
        }
        if(arrCounterSpanAdv[3].innerHTML !== '100') {
          ++arrCounterSpanAdv[3].innerHTML;
          counterLevel[3]+=1.5;
          arrLevelDivAdv[3].style.height = counterLevel[3].toString() + 'px';
        }
    }, 1000 / fps);
  }
};