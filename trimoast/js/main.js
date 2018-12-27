$(function(){
  
    $(document).ready(function() {
        $('.popup-magn').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
    
            fixedContentPos: false
        });
    });
    $(document).ready(function() {
        $('#astronpopup').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
    
            fixedContentPos: false
        });
    });
    
        
    $('#open-popup01').magnificPopup({
        items: [
          {
            src: './img/l01.jpeg',
            title: 'Логистические комплексы'
          },
          {
            src: './img/l02.jpg',
            title: 'Логистические комплексы'
          },
          {
            src: './img/l03.jpg',
            title: 'Логистические комплексы'
          },
          {
            src: './img/l04.jpg',
            title: 'Логистические комплексы'
          },
        ],
        gallery: {
          enabled: true
        },
        type: 'image' // this is a default type
    });
            
    $('#open-popup02').magnificPopup({
        items: [
          {
            src: './img/pr01.jpg',
            title: 'Производственные здания'
          },
          {
            src: './img/pr02.jpg',
            title: 'Производственные здания'
          },
          {
            src: './img/pr03.jpg',
            title: 'Производственные здания'
          },
          {
            src: './img/pr04.jpg',
            title: 'Производственные здания'
          },
          {
            src: './img/pr05.jpg',
            title: 'Производственные здания'
          },
        ],
        gallery: {
          enabled: true
        },
        type: 'image' // this is a default type
    });
    $('#open-popup03').magnificPopup({
        items: [
          {
            src: './img/of02.jpg',
            title: 'Офисные здания 1'
          },
          {
            src: './img/of03.jpg',
            title: 'Офисные здания 2'
          },
          {
            src: './img/of04.jpg',
            title: 'Офисные здания 3'
          },
          {
            src: './img/of05.jpg',
            title: 'Офисные здания 4'
          },
        ],
        gallery: {
          enabled: true
        },
        type: 'image' // this is a default type
    });

    $('#open-popup04').magnificPopup({
        items: [
          {
            src: './img/mp01.JPG',
            title: 'Многоуровневые паркинги'
          },
          {
            src: './img/mp02.JPG',
            title: 'Многоуровневые паркинги'
          },
          {
            src: './img/mp03.JPG',
            title: 'Многоуровневые паркинги'
          },
          {
            src: './img/mp04.JPG',
            title: 'Многоуровневые паркинги'
          },
        ],
        gallery: {
          enabled: true
        },
        type: 'image' // this is a default type
    });

    $('#open-popup05').magnificPopup({
        items: [
          {
            src: './img/mt01.jpg',
            title: 'Магазины и торговые центры'
          },
          {
            src: './img/mt02.jpg',
            title: 'Магазины и торговые центры'
          },
          {
            src: './img/mt03.jpg',
            title: 'Магазины и торговые центры'
          },
          {
            src: './img/mt05.jpg',
            title: 'Магазины и торговые центры'
          },
          {
            src: './img/mt06.jpg',
            title: 'Магазины и торговые центры'
          },
          {
            src: './img/mt07.jpg',
            title: 'Магазины и торговые центры'
          },
        ],
        gallery: {
          enabled: true
        },
        type: 'image' // this is a default type
    });

    $('#open-popup06').magnificPopup({
        items: [
          {
            src: './img/sp01.jpg',
            title: 'Спорткомплексы'
          },
          {
            src: './img/sp02.jpg',
            title: 'Спорткомплексы'
          },
          {
            src: './img/sp03.jpg',
            title: 'Спорткомплексы'
          },
          {
            src: './img/sp04.jpg',
            title: 'Спорткомплексы'
          },
          {
            src: './img/sp05.jpg',
            title: 'Спорткомплексы'
          },
          {
            src: './img/sp06.jpg',
            title: 'Спорткомплексы'
          },
        ],
        gallery: {
          enabled: true
        },
        type: 'image' // this is a default type
    });

    $('#open-popup07').magnificPopup({
        items: [
          {
            src: './img/sh01.jpg',
            title: 'Сельскохозяйственные здания'
          },
          {
            src: './img/sh02.jpg',
            title: 'Сельскохозяйственные здания'
          },
          {
            src: './img/sh03.jpg',
            title: 'Сельскохозяйственные здания'
          },
          {
            src: './img/sh04.jpg',
            title: 'Сельскохозяйственные здания'
          },
        ],
        gallery: {
          enabled: true
        },
        type: 'image' // this is a default type
    });
    $('#open-popup08').magnificPopup({
        items: [
          {
            src: './img/ot01.jpg',
            title: 'Здания иного назначения'
          },
          {
            src: './img/ot02.jpg',
            title: 'Здания иного назначения'
          },
          {
            src: './img/ot03.jpg',
            title: 'Здания иного назначения'
          },
          {
            src: './img/ot04.jpg',
            title: 'Здания иного назначения'
          },
          {
            src: './img/ot05.jpg',
            title: 'Здания иного назначения'
          },
        ],
        gallery: {
          enabled: true
        },
        type: 'image' // this is a default type
    });

	///////////////////////////
	// On Scroll
	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();

		// Fixed nav
		wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');

		// Back To Top Appear
		wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
	});
    $(function(){ 
        var navMain = $(".navbar-collapse"); // avoid dependency on #id
        // "a:not([data-toggle])" - to avoid issues caused
        // when you have dropdown inside navbar
        navMain.on("click", "a:not([data-toggle])", null, function () {
            navMain.collapse('hide');
        });
    });
    $(document).click(function(event) {
        $(event.target).closest(".navbar").length || $(".navbar-collapse.show").length && $(".navbar-collapse.show").collapse("hide")
      });

$('.slider-about-wrap').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true
  });
$('.med-wrap').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.small-wrap'
  });
  $('.small-wrap').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.med-wrap',
    dots: true,
    arrows: true,
    centerMode: true,
    centerPadding: '10px',
    focusOnSelect: true,
    autoplay: true,
    vertical: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: true,
          }
        }
        ]
  });  

  
$('.nav-link-new').mPageScroll2id();
$('.button-nav, .products-buy-button').magnificPopup();

$('#phoneid').inputmask('9(999) 999-99-99');
AOS.init();
});

$(function() {
    var header = $("#myHeaderId");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            header.removeClass("scrollfirs").addClass("scroll");
        } else {
            header.removeClass("scroll").addClass("scrollfirs");
        }
    });
});

jQuery(document).ready(function($) {
        $('.counter').counterUp({
                delay: 10,
                time: 2000
        });
});

$('.card-my').on('click',function(){
    $('.cont-wrap').toggleClass('cont-origin');
});

$(document).ready(function(){
    $('#form-order, #call-back, #call-back-discount').submit(function(e){
        e.preventDefault();
        $.ajax({
            type:'POST',
            url:'http://generationleadstudio.com/wp-content/themes/lead/tele_order.php',
            data: $(this).serialize()
        }).done(function(){
                $.magnificPopup.close(); 
            setTimeout(function(){
                window.location = 'http://generationleadstudio.com/done';
            },1);
        });
        });
    });

$(window).on('load', function(){
$(".loaderInner").fadeOut();
$(".loader").delay(400).fadeOut("slow");
});


particlesJS("particles-js", {"particles":{"number":{"value":50,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});;

