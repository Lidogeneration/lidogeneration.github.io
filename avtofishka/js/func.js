$(function() { 
    AOS.init();
    FormCheck();
    $('.a_contact').magnificPopup();
    SlickReviews();
});

function FormCheck() {
    jQuery('.telephone').inputmask('+7(999) 999-99-99',{ "oncomplete": function() { 
        jQuery('.btn_send').prop("disabled", false);
    }, "onincomplete": function(){ 
        jQuery('.btn_send').prop("disabled", true);
    } }); 
};

function SlickReviews() {
    $('.reviews').slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  centerMode: true,
                  centerPadding: '20px',
                  slidesToShow: 3
                }
              },
            {
              breakpoint: 768,
              settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ],
		prevArrow: '<button type="button" class="b-slick-prev b-slick-style"><img src="images/reviews/back.png" class="b_prev"></button>',
		nextArrow: '<button type="button" class="b-slick-next b-slick-style"><img src="images/reviews/next.png" class="b_prev"></button>'
    });
};

