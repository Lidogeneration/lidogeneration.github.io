$("a[rel='m_PageScroll2id']").mPageScroll2id({
  highlightClass: "active"
});

$('.mpopup').magnificPopup();


$('.phoneidcl').inputmask('+38(999) 999-99-99',{ "oncomplete": function(){ 
  $(".disbutt").prop("disabled", false);
}, "onincomplete": function(){ $(".disbutt").prop("disabled", true); } });



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

AOS.init();

// $(document).ready(function() {
// 	$('.popup-youtube').magnificPopup({
// 		type: 'iframe',
// 		mainClass: 'mfp-fade',
// 		removalDelay: 160,
// 		preloader: false,
// 		fixedContentPos: false
// 	});
// });

$('.works__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '300px',
  autoplay: true,
  autoplaySpeed: 7000,
  speed: 1000,
  dots: true,
  arrows: true,
  pauseOnFocus: false,
  pauseOnHover: false,
  infinite: true,
  prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        centerPadding: '200px',
      }
    },
    {
      breakpoint: 992,
      settings: {
        centerPadding: '0',
        arrows: false,
      }
    },
  ]
});

$('.sert__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000,
  speed: 1000,
  dots: false,
  arrows: true,
  pauseOnFocus: false,
  pauseOnHover: false,
  infinite: true,
  prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});
