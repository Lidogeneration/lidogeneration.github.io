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
// --------------------
const motorGorGallery01 = document.querySelectorAll('#motorGorGallery01 img');
let formotorGorGallery01 = [];
motorGorGallery01.forEach(key => {
  formotorGorGallery01.push({src: key.src});
});

$('#motorGallery01').magnificPopup({
  items: formotorGorGallery01,
  gallery: {
    enabled: true
  },
  type: 'image' 
});

const motorGorGallery02 = document.querySelectorAll('#motorGorGallery02 img');
let formotorGorGallery02 = [];
motorGorGallery02.forEach(key => {
  formotorGorGallery02.push({src: key.src});
});

$('#motorGallery02').magnificPopup({
  items: formotorGorGallery02,
  gallery: {
    enabled: true
  },
  type: 'image' 
});

const motorGorGallery03 = document.querySelectorAll('#motorGorGallery03 img');
let formotorGorGallery03 = [];
motorGorGallery03.forEach(key => {
  formotorGorGallery03.push({src: key.src});
});

$('#motorGallery03').magnificPopup({
  items: formotorGorGallery03,
  gallery: {
    enabled: true
  },
  type: 'image' 
});

const motorGorGallery04 = document.querySelectorAll('#motorGorGallery04 img');
let formotorGorGallery04 = [];
motorGorGallery04.forEach(key => {
  formotorGorGallery04.push({src: key.src});
});

$('#motorGallery04').magnificPopup({
  items: formotorGorGallery04,
  gallery: {
    enabled: true
  },
  type: 'image' 
});

const motorGorGallery05 = document.querySelectorAll('#motorGorGallery05 img');
let formotorGorGallery05 = [];
motorGorGallery05.forEach(key => {
  formotorGorGallery05.push({src: key.src});
});

$('#motorGallery05').magnificPopup({
  items: formotorGorGallery05,
  gallery: {
    enabled: true
  },
  type: 'image' 
});

const motorGorGallery06 = document.querySelectorAll('#motorGorGallery06 img');
let formotorGorGallery06 = [];
motorGorGallery06.forEach(key => {
  formotorGorGallery06.push({src: key.src});
});

$('#motorGallery06').magnificPopup({
  items: formotorGorGallery06,
  gallery: {
    enabled: true
  },
  type: 'image' 
});

const motorGorGallery07 = document.querySelectorAll('#motorGorGallery07 img');
let formotorGorGallery07 = [];
motorGorGallery07.forEach(key => {
  formotorGorGallery07.push({src: key.src});
});

$('#motorGallery07').magnificPopup({
  items: formotorGorGallery07,
  gallery: {
    enabled: true
  },
  type: 'image' 
});

const motorGorGallery08 = document.querySelectorAll('#motorGorGallery08 img');
let formotorGorGallery08 = [];
motorGorGallery08.forEach(key => {
  formotorGorGallery08.push({src: key.src});
});

$('#motorGallery08').magnificPopup({
  items: formotorGorGallery08,
  gallery: {
    enabled: true
  },
  type: 'image' 
});

$(document).ready(function() {
	$('.popup-youtube').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
});


$(document).ready(function() {
  $('.iframe-pdf').magnificPopup({
      type: 'iframe'
  });
});

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



