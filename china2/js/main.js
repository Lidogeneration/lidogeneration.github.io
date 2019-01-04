$(function(){


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

jQuery(document).ready(function($) {
    $('.counter').counterUp({
            delay: 10,
            time: 2000
    });
});

$('.phoneinput').inputmask('+79(999) 999-99-99',{ "oncomplete": function(){ 
  $(".btn-dis").prop("disabled", false);
}, "onincomplete": function(){ $(".btn-dis").prop("disabled", true); } });
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



