var check = false;

$(function() { 
    CheckResize991FromNavbar();
    ClickOnHam();
});

$(window).scroll(function() {
    Scroll300pxDown();
});

$(window).resize(function(){
    CheckResize991FromNavbar(); 
    CheckResizeMax991px();
});

function CheckResizeMax991px() {

};

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

function ClickOnHam(){
    $('#hamId').toggleClass('is-active');
};

$('.slick-img').slick({
    dots: true,
    infinite: true,
    autoplay: true, 
    speed: 500,
    autoplaySpeed: 1000,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
    prevArrow: '<button type="button" class="b-slick-prev b-slick-style"><i class="fas fa-chevron-circle-left"></i></button>',
    nextArrow: '<button type="button" class="b-slick-next b-slick-style"><i class="fas fa-chevron-circle-right"></i></button>'
  });

$('.manual').slick({
    infinite: true,
    autoplay: false, 
    speed: 400,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
    prevArrow: '<button type="button" class="b-slick-prev b-slick-style"><i class="fas fa-chevron-circle-left"></i></button>',
    nextArrow: '<button type="button" class="b-slick-next b-slick-style"><i class="fas fa-chevron-circle-right"></i></button>'
  });


