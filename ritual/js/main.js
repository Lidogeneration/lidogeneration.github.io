$(function(){


	///////////////////////////
	// On Scroll
	// $(window).on('scroll', function() {
	// 	var wScroll = $(this).scrollTop();
	// 	// Fixed nav
	// 	wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');

	// 	// Back To Top Appear
	// 	wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
	// });
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
                delay: 5,
                time: 2000
        });
});


$(document).ready(function(){
    $('.order-main').submit(function(e){
        e.preventDefault();
        $.magnificPopup.close(); 
        $.ajax({
            type:'POST',
            url:'/wp-content/themes/led/tele_order.php',
            data: $(this).serialize()
        }).done(function(){
                $.magnificPopup.close(); 
            setTimeout(function(){
                window.location = 'done';
            },1);
        });
        });
    });

    $(document).ready(function(){
        $('.order-email').submit(function(e){
            e.preventDefault();
            $.magnificPopup.close(); 
            $.ajax({
                type:'POST',
                url:'/wp-content/themes/led/tele_and_send_price.php',
                data: $(this).serialize()
            }).done(function(){
                    $.magnificPopup.close(); 
                setTimeout(function(){
                    window.location = 'done';
                },1);
            });
            });
        });
        $(document).ready(function(){
            $('.order-main-com').submit(function(e){
                e.preventDefault();
                $.magnificPopup.close(); 
                $.ajax({
                    type:'POST',
                    url:'/wp-content/themes/led/tele_and_send_com.php',
                    data: $(this).serialize()
                }).done(function(){
                        $.magnificPopup.close(); 
                    setTimeout(function(){
                        window.location = 'done';
                    },1);
                });
                });
            });

const nameScrollEmail = document.getElementById('input_orderEmail');
const nameScroll = document.getElementById('input_order');
const customTextFormSpan = document.getElementById('customTextForm');
  function setNameScroll(namescroll, customTextFormSpanF) {
      
      nameScroll.value = namescroll;
      customTextFormSpan.textContent = customTextFormSpanF;
    };

function setNameScrollEmail(namescrollEmail ) {
    nameScrollEmail.value = namescrollEmail;
    };


    var divs = $(".slider div");
    var i = 1;
    
    function iterate() {
        if ( i >= divs.length) {
            i = 0;
          }
      
      $(".image").removeClass( "activet" );
      $(".image").addClass("deactive");
      $(divs[i]).removeClass( "deactive" );
      $(divs[i]).addClass( "activet" );
      
      i++;
    
    }
    
    setInterval( iterate, 7000 );

const navBarMy = document.getElementById('nav');   

window.onload = function()
{
    if(window.innerWidth <= 1200)
    {
        AOS.init({
            disable: true,
        });
        navBarMy.classList.add('fixed-nav');
    }
    else
    {
        AOS.init({
            disable: false,
        });
    }
};

window.onscroll = function () {
    
    if(document.documentElement.scrollTop > 0 || window.innerWidth <= 1200)
    {
        navBarMy.classList.add('fixed-nav');
    }
    else
    {
        navBarMy.classList.remove('fixed-nav');
    }

};

window.onresize = function()
{    
    if(window.innerWidth <= 1200)
    {
        navBarMy.classList.add('fixed-nav');
    }
}

$('.sliderRew').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    adaptiveHeight: true
  });

  $('.sliderRewN').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            slidesToShow: 1
          }
        }
    ]
  });

$(document).ready(function() {
	$('.sliderRewN').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
		
			}
		},
		gallery: {
            enabled: true,
            tCounter: '<span class="mfp-counter"></span>'
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
// const videoMain = document.getElementById('video1');
// function startVideo()
// {
//         var topM = videoMain.getBoundingClientRect().top;
//         var botM = videoMain.getBoundingClientRect().top - window.innerHeight + 300;
//       if(  topM >= 0 && botM <= 0)
//       {
//         videoMain.play();
//       }
//       else
//       {
//         videoMain.pause();
//       }
// };