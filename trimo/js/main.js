$(function(){

    var rellax = new Rellax('.rellax');
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
    arrows: false
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
  AOS.init();

  window.addEventListener('load', function() {
    AOS.refresh();
  });
$('.nav-link-new').mPageScroll2id();
$('.button-nav, .products-buy-button').magnificPopup();

$('#phoneid').inputmask('9(999) 999-99-99');
$(function(){
        $('#opt_ph').change(function(){
        var curcolor = $('#opt_ph :selected').val();
        $("#phonediscount").inputmask(curcolor);
        $("#phonediscount").removeAttr("readonly");
        $("#phonediscount").attr("placeholder", "Введите номер");
    })
});
$(function(){
        $('#opt_ph_popup').change(function(){
        var curcolor = $('#opt_ph_popup :selected').val();
        $("#phoneidpopup").inputmask(curcolor);
        $("#phoneidpopup").removeAttr("readonly");
        $("#phoneidpopup").attr("placeholder", "Введите номер");
    })
});
$(function(){
        $('#opt_ph_order').change(function(){
        var curcolor = $('#opt_ph_order :selected').val();
        $("#phoneid").inputmask(curcolor);
        $("#phoneid").removeAttr("readonly");
        $("#phoneid").attr("placeholder", "Введите номер");
    })
});
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

