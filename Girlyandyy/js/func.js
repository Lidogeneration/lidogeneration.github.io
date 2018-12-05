$(function(){
    $('.contact_').magnificPopup();
    GoRelax();
    FormCheck();
    GoVideo();
    $('.menu-icon').click(function() {
        $(this).toggleClass('active');
    })
    SlickReviews();
});
  
function GoRelax(){
    var rellax = new Rellax('.rellax', {
        callback: function(position) {
            console.log(position);
        }
      });
}; 

function FormCheck() {
    jQuery('.telephone').inputmask('+38(999) 999-99-99',{ "oncomplete": function() { 
        jQuery('.btn_send').prop("disabled", false);
    }, "onincomplete": function(){ 
        jQuery('.btn_send').prop("disabled", true);
    } }); 
};

function GoVideo() {
    $('.video-icon').magnificPopup({
        type: 'iframe'
    });
};

function SlickReviews() {
    $('.reviews').slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  centerMode: true,
                  centerPadding: '0px',
                  slidesToShow: 3
                }
              },
            {
              breakpoint: 768,
              settings: {
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
              }
            }
          ],
		prevArrow: '<button type="button" class="b-slick-prev b-slick-style"><img src="images/reviews/back.png" class="b_prev"></button>',
		nextArrow: '<button type="button" class="b-slick-next b-slick-style"><img src="images/reviews/next.png" class="b_prev"></button>'
    });
};




