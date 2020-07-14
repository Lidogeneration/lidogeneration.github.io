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
                delay: 5,
                time: 2000
        });
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




 const nameScroll = document.getElementById('input_order');
  function setNameScroll(namescroll="-") {
      nameScroll.value = namescroll;
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

let navBarMy = document.getElementById('nav');   

window.onload = function()
{
    if(window.innerWidth <= 1200)
    {
        navBarMy.classList.add('fixed-nav');
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