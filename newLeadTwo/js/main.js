$(function(){ 
    var navMain = $(".navbar-collapse"); // avoid dependency on #id
    // "a:not([data-toggle])" - to avoid issues caused
    // when you have dropdown inside navbar
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });
});
$(document).click(function(event) {
    $(event.target).closest(".navbar").length || $(".navbar-collapse.show").length && $(".navbar-collapse.show").collapse("hide")
  });

$(function () {
    $('.nav-link-new').mPageScroll2id();
    $('.mpopup').magnificPopup();
    $('.phoneidcl').inputmask('+38(999) 999-99-99', {
        "oncomplete": function () {
            $(".disbutt").prop("disabled", false);
        },
        "onincomplete": function () {
            $(".disbutt").prop("disabled", true);
        }
    });
});

$(document).ready(function () {
    $('.order-main').submit(function (e) {
        e.preventDefault();
        $.magnificPopup.close();
        $.ajax({
            type: 'POST',
            url: '/wp-content/themes/led/tele_order.php',
            data: $(this).serialize()
        }).done(function () {
            $.magnificPopup.close();
            setTimeout(function () {
                window.location = 'done';
            }, 1);
        });
    });
});

const navBarMy = document.getElementById('nav');   
const customTextFormEmailS = document.getElementById('customTextFormEmail');
const nameScrollEmail = document.getElementById('input_orderEmail');

const nameScroll = document.getElementById('input_order');
const customTextFormSpan = document.getElementById('customTextForm');
const navBar = document.getElementById('navMy');

function setNameScroll(namescroll, customTextFormSpanF) {
    nameScroll.value = namescroll;
    customTextFormSpan.textContent = customTextFormSpanF;
};

function setNameScrollEmail(namescrollEmailS, customTextFormEmailF) {
    nameScrollEmail.value = namescrollEmailS;
    customTextFormEmailS.textContent = customTextFormEmailF;
};

document.addEventListener("DOMContentLoaded", ready);

function ready() {
    if (window.innerWidth <= 1200) {
        AOS.init({
            disable: true,
        });
        navBarMy.classList.add('fixed-nav');
    } else {
        AOS.init({
            disable: false,
        });
    }
};

window.onload = function () {
    changeHeadText();
    navbarFix();
    aboutScroll();
    prodScroll();
    offerScroll();
    steps();
    team();
    
};

window.onscroll = function () {
    changeHeadText();
    navbarFix();
    aboutScroll();
     prodScroll();
     offerScroll();
     steps();
     team();
};

window.onresize = function () {
    navbarFix();
};

const bgM = document.getElementById('bgMain');
const headC = document.getElementById('headerC');
const headAnimWrapOne = document.getElementById('headAnimWrapOne');
const headAnimWrapTwo = document.getElementById('headAnimWrapTwo');
const trigger01 = document.getElementById('trigger01');
const trigger02 = document.getElementById('trigger02');
const trigger03 = document.getElementById('trigger03');
const mainHeight = window.innerHeight;

function changeHeadText()
{
    const headTop = headC.getBoundingClientRect().top;
    if( headTop >= -100 )
    {
        bgM.style.transform = 'scale(1.2)';
        headAnimWrapOne.style.width = '0';
        headAnimWrapTwo.style.width = '0';
        trigger01.style.transform = 'scaleX(1)';
        trigger02.style.transform = 'scaleX(1)';
        trigger03.style.transform = 'scaleX(1)';
    }
    else
    {
        bgM.style.transform = 'scale(1)';
        headAnimWrapOne.style.width = '100' + '%';
        headAnimWrapTwo.style.width = '100' + '%';
        trigger01.style.transform = 'scaleX(0)';
        trigger02.style.transform = 'scaleX(0)';
        trigger03.style.transform = 'scaleX(0)';
    }

};
function navbarFix()
{
    if (document.documentElement.scrollTop > 0 || window.innerWidth <= 1200) {
        navBarMy.classList.add('fixed-nav');
    } else {
        navBarMy.classList.remove('fixed-nav');
    }
};
function aboutScroll(){
    const aboutC = document.getElementById('aboutC');
    const aboutTop = aboutC.getBoundingClientRect().top;
    const aboutTxtBg = document.getElementById('aboutTxtBg');
    const txtWrapAbout = document.getElementById('txtWrapAbout');
    const imgAboutVideo = document.getElementById('imgAboutVideo');
    const aboutLineOne = document.getElementById('aboutLineOne');
    const aboutLineTwo = document.getElementById('aboutLineTwo');

    if(aboutTop <= (mainHeight/2) && aboutTop >= (-mainHeight*2)){
        aboutTxtBg.style.width = '100' + '%';
        txtWrapAbout.style.opacity = 1;
        imgAboutVideo.style.transform = 'translateX(0)';
        aboutLineOne.style.width = '60' + '%';
        aboutLineTwo.style.width = '60' + '%';
        aboutLineOne.style.height = '40' + 'px';
        aboutLineTwo.style.height = '40' + 'px';
    }else{
        aboutTxtBg.style.width = '0';
        txtWrapAbout.style.opacity = 0;
        imgAboutVideo.style.transform = 'translateX(110%)';
        aboutLineOne.style.width = '0';
        aboutLineTwo.style.width = '0';
        aboutLineOne.style.height = '0';
        aboutLineTwo.style.height = '0';
    }
};

function prodScroll(){
    const prodC = document.getElementById('prodC');
    const prodTop = prodC.getBoundingClientRect().top;
    const headerProd1 = document.getElementById('headerProd1');
    const headerProd2 = document.getElementById('headerProd2');
    const headerProd3 = document.getElementById('headerProd3');
    if(prodTop <= (mainHeight/1.5) && prodTop >= (-mainHeight*1.5)){
        headerProd1.style.transform = 'translateY(0)';
        headerProd2.style.transform = 'translateY(0)';
        headerProd3.style.transform = 'translateY(0)';
    }else{
        headerProd1.style.transform = 'translateY(-150%)';
        headerProd2.style.transform = 'translateY(-150%)';
        headerProd3.style.transform = 'translateY(-150%)';
    }
};
function offerScroll(){
    const offerC = document.getElementById('offerC');
    const offerTop = offerC.getBoundingClientRect().top;
    const bOffer1 = document.getElementById('bOffer1');
    const bOffer2 = document.getElementById('bOffer2');
    if(offerTop <= (mainHeight/2) && offerTop >= (-mainHeight*2)){
        bOffer1.style.width = '0';
        bOffer2.style.width = '0';
    }else{
        bOffer1.style.width = '100' + '%';
        bOffer2.style.width = '100' + '%';
    }
};


function steps(){
    const stepsC = document.getElementById('stepsC');
    const stepsTop = stepsC.getBoundingClientRect().top;
    const lineSteps1 = document.getElementById('lineSteps1');
    const lineSteps2 = document.getElementById('lineSteps2');
    const logoSteps = document.getElementById('logoSteps');
    if(stepsTop <= (mainHeight/2) && stepsTop >= (-mainHeight*2)){
        lineSteps1.style.width = '60' + '%';
        lineSteps2.style.width = '60' + '%';
    }else{
        lineSteps1.style.width = '0';
        lineSteps2.style.width = '0';
    }
};

function team(){
    const teamC = document.getElementById('teamC');
    const teamTop = teamC.getBoundingClientRect().top;
    const teamWrapId = document.getElementById('teamWrapId');
    if(teamTop <= (mainHeight/2) && teamTop >= (-mainHeight*2)){
        teamWrapId.style.borderTopRightRadius = '50' + '%';
        teamWrapId.style.borderBottomLeftRadius = '50' + '%';
    }else{
        teamWrapId.style.borderTopRightRadius = '0';
        teamWrapId.style.borderBottomLeftRadius = '0';
    }
};



$(document).ready(function() {
	$('.popup-youtube').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
});

$('.portCont').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    dots: false,
    arrows: true,
    pauseOnFocus: false,
    pauseOnhover: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          }
      ]
  });

  $('.teamCont').slick({
    adaptiveHeight: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    dots: false,
    arrows: true,
    pauseOnFocus: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          }
      ]
  });