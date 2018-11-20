

$(document).ready(function() {
	$('.video-icon').magnificPopup({
        type: 'iframe'
    });
    OnClickMenu();
    $('.contactpopup').magnificPopup();
    FormCheck();

}); 

function OnClickMenu() {
  $('.menu-a').on("click", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
          top = $(id).offset().top;
          if(id != '#feedbackId'){
             $('body,html').animate({scrollTop: top}, 1000);
          }
  });
};

function FormCheck() {
  jQuery('.telephone').inputmask('+38(999) 999-99-99',{ "oncomplete": function() { 
      jQuery('.my-btn-send').prop("disabled", false);
      if($("#contact-name").val().length > 1){
        jQuery('.my-btn-send').toggleClass('cursor_pointer');
      }
  }, "onincomplete": function(){ 
      jQuery('.my-btn-send').prop("disabled", true);
      jQuery('.my-btn-send').toggleClass('cursor_pointer');
  } }); 
};

$('.my-sertificat').slick({
    centerMode: true,
    centerPadding: '300px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: '60px',
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 597,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '1px',
          slidesToShow: 1
        }
      }
    ],
    prevArrow: '<button type="button" class="b-slick-prev b-slick-style"><i class="fas fa-chevron-circle-left"></i></button>',
	nextArrow: '<button type="button" class="b-slick-next b-slick-style"><i class="fas fa-chevron-circle-right"></i></button>'
  });

  $(document).ready(function() {
	$('.popup-gallery').magnificPopup({
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
});