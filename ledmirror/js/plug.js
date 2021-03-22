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


// $(document).ready(function() {
// 	$('.popup-youtube').magnificPopup({
// 		type: 'iframe',
// 		mainClass: 'mfp-fade',
// 		removalDelay: 160,
// 		preloader: false,
// 		fixedContentPos: false
// 	});
// });

$('.firstScroll__slider, .aboutProd__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000,
  speed: 1000,
  dots: false,
  arrows: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  infinite: true,
  accessibility: false,
  // prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-caret-left"></i></button>',
  // nextArrow: '<button type="button" class="slick-next"><i class="fas fa-caret-right"></i></button>',
});

$('.product__wrap-img-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000,
  speed: 1000,
  dots: true,
  arrows: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  infinite: true,
  accessibility: false,
  // prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-caret-left"></i></button>',
  // nextArrow: '<button type="button" class="slick-next"><i class="fas fa-caret-right"></i></button>',
});

$('.reviews__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000,
  speed: 1000,
  dots: true,
  arrows: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  infinite: true,
  accessibility: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
});

$('.image-popup-no-margins').magnificPopup({
  type: 'image',
  closeOnContentClick: true,
  closeBtnInside: false,
  fixedContentPos: true,
  mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
  image: {
    verticalFit: true
  },
  zoom: {
    enabled: true,
    duration: 300 // don't foget to change the duration also in CSS
  }
});

$(document).ready(function() {
	$('.about__cont-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
});


const timerDate = document.getElementById('timerId');

if(timerDate){

    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes
        };
    }

    function initializeClock(id, endtime) {

        var clock = document.querySelector(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');

        function updateClock() {
          var t = getTimeRemaining(endtime);
          daysSpan.innerHTML = t.days;
          hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        }
        
        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }
    var tl = new Date(timerDate.textContent);
    var deadline = new Date(tl);
    var tOld = getTimeRemaining(deadline);
    if (tOld.total <=0)
    {
      deadline = new Date(Date.parse(new Date()) + 250000 * 1000);
    }
    initializeClock('.clock', deadline);
    initializeClock('.clock_footer', deadline);
    
    //   initializeClock('clockdiv', deadline);
}
