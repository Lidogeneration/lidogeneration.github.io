$("a[rel='m_PageScroll2id']").mPageScroll2id({
  highlightClass: "active",
  offset: 200
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

$('.rooms__wrap-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000,
  speed: 1000,
  dots: false,
  arrows: true,
  pauseOnFocus: false,
  pauseOnHover: false,
  infinite: true,
  accessibility: false,
  adaptiveHeight: true,
  prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
});

$('.about__personal-mainSlid').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  adaptiveHeight: true,
  asNavFor: '.about__personal-subSlid'
});

$('.about__personal-subSlid').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.about__personal-mainSlid',
  dots: false,
  arrows: true,
  focusOnSelect: true,
  prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

$('.rooms__wrap-sert').slick({
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
  accessibility: false,
  prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }
  ]
});