$(function(){


  
$('.nav-link-new').mPageScroll2id({
    highlightClass: "active"
});
$('.mpopup, .mpopupHow').magnificPopup();

$('.phoneidcl').inputmask('+38(999) 999-99-99',{ "oncomplete": function(){ 
    $(".disbutt").prop("disabled", false);
}, "onincomplete": function(){ $(".disbutt").prop("disabled", true); } });



});

$(function() {
    var header = $("#myHeaderId");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            header.removeClass("scrollfirs").addClass("scroll");
        } else {
            header.removeClass("scroll").addClass("scrollfirs");
        }
    });
});

jQuery(document).ready(function($) {
        $('.counter').counterUp({
                delay: 5,
                time: 2000
        });
});


$(document).ready(function(){
    $('.order-main').submit(function(e){
        e.preventDefault();
        $.magnificPopup.close(); 
        $(".disbutt").prop("disabled", true);
        $.ajax({
            type:'POST',
            url:'/wp-content/themes/sad/tele_order.php',
            data: $(this).serialize()
        }).done(function(){
                $.magnificPopup.close(); 
            setTimeout(function(){
                window.location = 'done';
            },1);
        });
        });
    });



const nameScroll = document.getElementById('input_order');
const customTextFormSpan = document.getElementById('customTextForm');

  function setNameScroll(namescroll, customTextFormSpanF) {
      
      nameScroll.value = namescroll;
      customTextFormSpan.textContent = customTextFormSpanF;
    };





const navBarBtn = document.getElementById('menuBtn');   
const navMobile = document.getElementById('navMobile'); 
window.onload = function()
{

};

window.onscroll = function () {
    // navBarInit();
};

window.onresize = function()
{    
    // navBarInit();
}

function ready()
{
    if(window.innerWidth <= 992)
    {
        AOS.init({
            disable: true,
        });
        navBarBtn.classList.add('d-flex');
    }
    else
    {
        AOS.init({
            disable: false,
        });
    }
    // navBarInit();
};


document.addEventListener("DOMContentLoaded", ready);


// function navBarInit(){

//     if(document.documentElement.scrollTop > 0 || window.innerWidth <= 992)
//     {
//         navBarBtn.classList.add('d-flex');
//     }
//     else
//     {
//         navBarBtn.classList.remove('d-flex');
//     }
// };


// document.addEventListener('click',function(event){
//     if(navMobile.contains(event.target) && !navBarBtn.contains(event.target)){
//         navMobile.classList.remove('navMobileShow');
//         navMobile.classList.add('navMobileHide');
//         navBarBtn.classList.remove('menuBtnShow');
//         navBarBtn.classList.add('menuBtnHide');
//     }
//     if(!navMobile.contains(event.target) && !navBarBtn.contains(event.target)){
//         if(navMobile.classList.contains('navMobileShow'))
//         {
//             navMobile.classList.remove('navMobileShow');
//             navMobile.classList.add('navMobileHide');
//             navBarBtn.classList.remove('menuBtnShow');
//             navBarBtn.classList.add('menuBtnHide');
//          }
//     }
//     if(navBarBtn.contains(event.target)){
//         if(navMobile.classList.contains('navMobileHide'))
//         {
//             navMobile.classList.remove('navMobileHide');
//             navMobile.classList.add('navMobileShow');
//             navBarBtn.classList.remove('menuBtnHide');
//             navBarBtn.classList.add('menuBtnShow');
//         }
//         else{
//             navMobile.classList.remove('navMobileShow');
//             navMobile.classList.add('navMobileHide');
//             navBarBtn.classList.remove('menuBtnShow');
//             navBarBtn.classList.add('menuBtnHide');
//         }
//     }
// });




$(document).ready(function() {
	$('.popup-youtube').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
});