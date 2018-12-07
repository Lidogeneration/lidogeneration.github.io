$(function(){
    $('.contact_').magnificPopup();
    GoRelax();
    FormCheck();
    GoVideo();
    $('.menu-icon').click(function() {
        $(this).toggleClass('active');
    })
    SlickReviews();
    SlickImages();
    ImageVeiw('.image-popup-no-margins');
    ImageVeiw('.image-popup-no-margins2');
    ImageVeiw('.image-popup-no-margins3');
    ImageVeiw('.image-popup-no-margins4');
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

function ImageVeiw(nameClass) {
    $(nameClass).magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
    });
};


function SlickImages() {
    $('.slider_images').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="b-slick-prev b-slick-style"><i class="fas fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="b-slick-next b-slick-style"><i class="fas fa-chevron-right"></i></button>'
    
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
		prevArrow: '<button type="button" class="b-slick-prev b-slick-style"><i class="fas fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="b-slick-next b-slick-style"><i class="fas fa-chevron-right"></i></button>'
    });
};




