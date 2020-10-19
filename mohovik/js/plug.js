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


const forGalleryOne = document.querySelectorAll('#forGalleryOne img');
let forGalleryOneItems = [];
forGalleryOne.forEach(key => {
  forGalleryOneItems.push({src: key.src});
});

const forGalleryTwo = document.querySelectorAll('#forGalleryTwo img');
let forGalleryTwoItems = [];
forGalleryTwo.forEach(key => {
  forGalleryTwoItems.push({src: key.src});
});

const forGalleryThree = document.querySelectorAll('#forGalleryThree img');
let forGalleryThreeItems = [];
forGalleryThree.forEach(key => {
  forGalleryThreeItems.push({src: key.src});
});


$('#galleryOne').magnificPopup({
  items: forGalleryOneItems,
  gallery: {
    enabled: true
  },
  type: 'image' 
});

$('#galleryTwo').magnificPopup({
  items: forGalleryTwoItems,
  gallery: {
    enabled: true
  },
  type: 'image' 
});

$('#galleryThree').magnificPopup({
  items: forGalleryThreeItems,
  gallery: {
    enabled: true
  },
  type: 'image' 
});



// $(document).ready(function() {
// 	$('.popup-youtube').magnificPopup({
// 		type: 'iframe',
// 		mainClass: 'mfp-fade',
// 		removalDelay: 160,
// 		preloader: false,
// 		fixedContentPos: false
// 	});
// });

$('.stepsRepair__cont-items-slider-wrap').slick({
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
  prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false
      }
    }
  ]
});

$('.tech__more-cont-slider').slick({
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
  prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false
      }
    }
  ]
});



