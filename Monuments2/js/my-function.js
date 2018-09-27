var check = false;

$(function() { 
    $('.b-contact-us').magnificPopup();
    FormCheck();
    OnClick();
});

$('.my-reviews').slick({
  dots: true,
  infinite: true,
  autoplay: true, 
  speed: 300,
  autoplaySpeed: 5000,
 // slidesToShow: 1,
  adaptiveHeight: true,
  centerMode: true,
  centerPadding: '60px',
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

function FormCheck() {
    $('#phoneid, #phoneid2').inputmask('+38(999) 999-99-99',{ "oncomplete": function() { 
        $('#buttonform').prop("disabled", false);
        $('#buttonform').removeClass('btn-disabled').addClass('btn-enabled');
    }, "onincomplete": function(){ 
        $('#buttonform').prop("disabled", true);
        $('#buttonform').removeClass('btn-enabled').addClass('btn-disabled');
    } });
};

$(window).resize(function() {
    CheckResize();
});

function CheckResize() {
    if(check) {
        $('#hamId').click();
    }
};

$(window).on('scroll', function() {
    if($(window).scrollTop() > 300) {
        $('.my-header').addClass('show-nav-menu');
    }
    else {
       $('.my-header').removeClass('show-nav-menu');
    }
});

$('#hamId').on('click', function (e) {
    if(!check){
         $('#hamId').addClass('is-active');
         check = true;
    }
    else {
         $('#hamId').removeClass('is-active');
        check = false;
    }
}); 


function OnClick() {
    $('.nav-link-a, .menu2').on("click","a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
            if(id != '#feedbackId'){
                $('body,html').animate({scrollTop: top}, 1000);
            }
        if(check) {
            $('#hamId').click();
        }
    });
};

jQuery(function($){
    $(document).mouseup(function (e) { 
        var block = $("#menu"); 
        if (!block.is(e.target) && block.has(e.target).length === 0) {
        }
    });
});


