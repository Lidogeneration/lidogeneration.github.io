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

const bgM = document.getElementById('bgMain');
const lineOA = document.getElementById('lineOneA');
const lineTA = document.getElementById('lineTwoA');
const lineO = document.getElementById('lineOne');
const lineT = document.getElementById('lineTwo');
const lineTh = document.getElementById('lineThree');
const headC = document.getElementById('headerC');
const aboutC = document.getElementById('aboutCont');


function changeHeadText()
{
    const mainHeight = window.innerHeight;
    const headTop = headC.getBoundingClientRect().top;
    const aboutTop = aboutC.getBoundingClientRect().top - mainHeight;
    // console.log(aboutTop);
    console.log(aboutTop);
    if( headTop >= -100 )
    {
        bgM.style.transform = 'scale(1.2)';
        lineO.style.height = 100 + 'vh';
        lineT.style.height = 100 + 'vh';
        lineTh.style.width = 100 + '%';
    }
    else
    {
        bgM.style.transform = 'scale(1)';
        lineO.style.height = 0 + 'vh';
        lineT.style.height = 0 + 'vh';
        lineTh.style.width = 0 + '%';  
    }
    if ( aboutTop <= -200)
    {
        lineOA.style.height = 100 + '%';
        lineTA.style.height = 100 + '%';
    }
    else
    {
        lineOA.style.height = 0 + '%';
        lineTA.style.height = 0 + '%';
    }
};



window.onload = function()
{
    changeHeadText();
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
    
    changeHeadText();

    if(document.documentElement.scrollTop > 0 || window.innerWidth <= 1200)
    {
        navBarMy.classList.add('fixed-nav');
    }
    else
    {
        navBarMy.classList.remove('fixed-nav');
    }
    // startVideo();
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