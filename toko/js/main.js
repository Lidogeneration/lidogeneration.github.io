

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

    $(document).ready(function(){
        $('.order-email').submit(function(e){
            e.preventDefault();
            $.magnificPopup.close(); 
            $.ajax({
                type:'POST',
                url:'/wp-content/themes/led/tele_and_send_price.php',
                data: $(this).serialize()
            }).done(function(){
                    $.magnificPopup.close(); 
                setTimeout(function(){
                    window.location = 'done';
                },1);
            });
            });
        });
        $(document).ready(function(){
            $('.order-main-com').submit(function(e){
                e.preventDefault();
                $.magnificPopup.close(); 
                $.ajax({
                    type:'POST',
                    url:'/wp-content/themes/led/tele_and_send_com.php',
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

const ready = () =>
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


const navBarInit = () => {

    if(document.documentElement.scrollTop > 0 || window.innerWidth <= 1200)
    {
        navBarMy.classList.add('fixed-nav');
    }
    else
    {
        navBarMy.classList.remove('fixed-nav');
    }
};

$('.first_sliderCont').slick({
    arrow: true,
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

$('.actionCont').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 3000,
    dots: true,
    arrows: false,
    pauseOnFocus: false,
    pauseOnhover: false
});

$('.prod_sliderCont').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 1
        }
      }
    ]
  });


  $('.image-popup-no-margins').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
        verticalFit: true
    },
    zoom: {
        enabled: true,
        duration: 300 // don't foget to change the duration also in CSS
    }
});

$('.sertCont').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    dots: false,
    arrows: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    infinite: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
            }
        },
        {
            breakpoint: 576,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
            }
        }
    ]
});
