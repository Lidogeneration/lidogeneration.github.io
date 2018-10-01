var check = false;

$(function() { 
    CheckResize991FromNavbar();
});

$(window).scroll(function() {
    Scroll300pxDown();
});

$(window).resize(function(){
    CheckResize991FromNavbar();
});

function Scroll300pxDown() {
    if($(window).width() > 991) {
        if($(window).scrollTop() > 600) {
            $('.my-navbar').removeClass('collapse-navbar-menu').addClass('visable-navbar-menu');
        }
        else {
            $('.my-navbar').removeClass('visable-navbar-menu').addClass('collapse-navbar-menu');
        }
    }
}

function CheckResize991FromNavbar() {
    if($(window).width() <= 991) {
        $('.my-navbar').removeClass('collapse-navbar-menu').addClass('visable-navbar-menu');
    }
    else {
        $('.my-navbar').removeClass('visable-navbar-menu').addClass('collapse-navbar-menu');
    }
}

$('#hamId').on("click", function(){
    $('#hamId').toggleClass('is-active');
});

$('.reviews').slick({
    dots: true,
    infinite: true,
    autoplay: true, 
    speed: 300,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
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
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ],
    prevArrow: '<button type="button" class="b-slick-prev b-slick-style"><i class="fas fa-chevron-circle-left"></i></button>',
    nextArrow: '<button type="button" class="b-slick-next b-slick-style"><i class="fas fa-chevron-circle-right"></i></button>'
  });


