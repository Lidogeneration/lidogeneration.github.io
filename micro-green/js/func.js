$(document).ready(function() {
	AOS.init();
	OnClickMenu();
	$('.contactpopup').magnificPopup();
	FormCheck();
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
				return item.el.attr('title');
			}
		}
	});
}); 

function FormCheck() {
    jQuery('.telephone').inputmask('+38(999) 999-99-99',{ "oncomplete": function() { 
        jQuery('.my-btn-send').prop("disabled", false);
    }, "onincomplete": function(){ 
        jQuery('.my-btn-send').prop("disabled", true);
    } }); 
};

function OnClickMenu() {
    $('.menu-a').on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
            if(id != '#feedbackId'){
               $('body,html').animate({scrollTop: top}, 1000);
            }
    });
};