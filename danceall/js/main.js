$(function(){
	///////////////////////////
	// On Scroll
	// $(window).on('scroll', function() {
	// 	var wScroll = $(this).scrollTop();
	// 	// Fixed nav
	// 	wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');

	// 	// Back To Top Appear
	// 	wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
	// });
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


  
$('.nav-link-new').mPageScroll2id();
$('.mpopup').magnificPopup();


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
            url:'/wp-content/themes/led/tele_order.php',
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


$('.tabs').tabslet({
    mouseevent: 'click',
    attribute: 'href',
    animation: true
  });



const navBarMy = document.getElementById('nav');   

window.onload = function()
{

};

window.onscroll = function () {
    navBarInit();
};

window.onresize = function()
{    
    navBarInit();
}

function ready()
{
    if(window.innerWidth <= 1200)
    {
        AOS.init({
            disable: true,
        });
        navBarMy.classList.add('fixed-nav');
    }
    else
    {
        AOS.init({
            disable: false,
        });
    }
    navBarInit();
};


document.addEventListener("DOMContentLoaded", ready);


function navBarInit(){

    if(document.documentElement.scrollTop > 0 || window.innerWidth <= 1200)
    {
        navBarMy.classList.add('fixed-nav');
    }
    else
    {
        navBarMy.classList.remove('fixed-nav');
    }
};

$('.about__slider').slick({
    variableHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    centerPadding: '0',
    infinite: true,
    centerMode: true,
    slidesToShow: 5,
    sliderToScroll: 1,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
            arrows: true,
            centerMode: false,
            centerPadding: '0',
            slidesToShow: 1
        }
      }
    ]
  });

  
$('.gallery__slider').slick({
    variableHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    centerPadding: '0',
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    sliderToScroll: 1,
    arrows: true,
    dots: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerMode: false,
          centerPadding: '0',
          slidesToShow: 1
        }
      }
    ]
  });