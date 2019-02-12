$(function(){

    // $(window).on('scroll', function() {
    //     var $elem = $('.check');
    //     var $window = $(window);
      
    //     var docViewTop = $window.scrollTop();
    //     var docViewBottom = docViewTop + $window.height();
    //     var elemTop = $elem.offset().top;
    //     var elemBottom = elemTop + $elem.height()+200;
    //     if (elemBottom < docViewBottom) {
    //       $('.check').addClass('checkOn');
    //     }
    //     else
    //     {
    //         $('.check').removeClass('checkOn');
    //     }
    //   });


      function addClassOnScroll(){

        let headerUp = document.getElementsByClassName('scrollAnim');
        for (i=0; i<headerUp.length; i++) {
            let topM = headerUp[i].getBoundingClientRect().top,
                botM = headerUp[i].getBoundingClientRect().top - window.innerHeight + 300;
            if(  topM >= 0 && botM <= 0)
            {
                headerUp[i].classList.add('beforeAnim');
            }
            else
            {
                headerUp[i].classList.remove('beforeAnim');
            }
        }
      };

      window.onscroll = function() {
        addClassOnScroll();
      };
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


  
$('.nav-link-new').mPageScroll2id();
$('.mpopup').magnificPopup();


$('.phoneidcl').inputmask('+38(999) 999-99-99',{ "oncomplete": function(){ 
    $(".disbutt").prop("disabled", false);
}, "onincomplete": function(){ $(".disbutt").prop("disabled", true); } });


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
    $('.order-main').submit(function(e){
        e.preventDefault();
        $.ajax({
            type:'POST',
            url:'tele_order.php',
            data: $(this).serialize()
        }).done(function(){
                $.magnificPopup.close(); 
            setTimeout(function(){
                window.location = 'http://generationleadstudio.com/done';
            },1);
        });
        });
    });

    $(document).ready(function(){
        $('.order-email').submit(function(e){
            e.preventDefault();
            $.ajax({
                type:'POST',
                url:'tele_and_send_price.php',
                data: $(this).serialize()
            }).done(function(){
                    $.magnificPopup.close(); 
                setTimeout(function(){
                    window.location = 'http://generationleadstudio.com/done';
                },1);
            });
            });
        });

    $(document).ready(function() {
        $('.slick-cert').magnificPopup({
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
            }
        });
    });


 const nameScroll = document.getElementById('input_order');
  function setNameScroll(namescroll="-") {
      nameScroll.value = namescroll;
    };

