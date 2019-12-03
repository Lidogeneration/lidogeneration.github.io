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
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
    });
    

    var options = {
        offset: 100
      }
    var header = new Headhesive('.menu', options);

    
 

    $('#slider').slick({
      centerMode: true,
      slidesToShow: 3,
      centerPadding:'0px',
      
      infinite: true,
      nextArrow: '<div class="sprite-next">&#8594;</div>', // Кастомная стрелка "далее"
      prevArrow: '<div class="sprite-prev">&#8592;</div>', // Кастомная стрелка "назад"
      
      autoplay: true,
      responsive: [
          {
            breakpoint: 1000,
            settings: {
              centerMode: false,
                  arrows: false,
                  slidesToShow: 1,
                  
              }
          },
      ]
  });

    $('').slick({
      centerMode: true,
      slidesToScroll: 1,
      slidesToShow: 3,
      dots: false,
      arrows:true,
    
      infinite: false,
      nextArrow: '<div class="sprite-next">&#8594;</div>', // Кастомная стрелка "далее"
      prevArrow: '<div class="sprite-prev">&#8592;</div>', // Кастомная стрелка "назад"
      responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            }
          }
      ]
  });
  



  


  
 

      $('#slider2').slick({
        infinite: true,
        centerPadding: '0px',
        centerMode: true,
        
        arrows:true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        nextArrow: '<div class="sprite-next">&#8594;</div>', // Кастомная стрелка "далее"
  prevArrow: '<div class="sprite-prev">&#8592;</div>', // Кастомная стрелка "назад"
       

  responsive: [
    {
      breakpoint: 1000,
      settings: {
        centerMode: false,
            arrows: false,
            slidesToShow: 1,
            
        }
    },
]
      });


      $('#slider3').slick({
        infinite: true,
        centerPadding: '0px',
        centerMode: true,
        arrows:true,
       
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        nextArrow: '<div class="sprite-next">&#8594;</div>', // Кастомная стрелка "далее"
  prevArrow: '<div class="sprite-prev">&#8592;</div>', // Кастомная стрелка "назад"
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        centerMode: false,
            arrows: false,
            slidesToShow: 1,
            
        }
    },
]



      });
      $('#slider4').slick({
        infinite: true,
        
        arrows:true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        nextArrow: '<div class="sprite-next1">&#8594;</div>', // Кастомная стрелка "далее"
  prevArrow: '<div class="sprite-prev1">&#8592;</div>', // Кастомная стрелка "назад"
       

  responsive: [
    {
      breakpoint: 1000,
      settings: {
        centerMode: false,
            arrows: false,
            slidesToShow: 1,
            
        }
    },
]


      });
      $('#slider5').slick({
        infinite: true,
        
        arrows:true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        slidesToShow: 2,
        nextArrow: '<div class="sprite-next2">&#8594;</div>', // Кастомная стрелка "далее"
  prevArrow: '<div class="sprite-prev2">&#8592;</div>', // Кастомная стрелка "назад"
       
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        centerMode: false,
            arrows: false,
            slidesToShow: 1,
           
        }
    },
]


      });
      $('#slider6').slick({
        infinite: true,
        
        arrows:true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        nextArrow: '<div class="sprite-next2">&#8594;</div>', // Кастомная стрелка "далее"
  prevArrow: '<div class="sprite-prev2">&#8592;</div>', // Кастомная стрелка "назад"
       

  responsive: [
    {
      breakpoint: 1000,
      settings: {
        centerMode: false,
            arrows: false,
            slidesToShow: 1,
            
        }
    },
]
      });
$('.menu_togle').click(function(){
  $('.naw_menu_mobile').toggleClass('active')
})


});

