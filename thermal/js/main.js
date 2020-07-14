$(function(){

$('.button-nav, .buttom-main').magnificPopup();
$('#texttt').inputmask('+99(999) 999-99-99');

$(function(){
        $('#opt_ph').change(function(){
        var curcolor = $('#opt_ph :selected').val();
        $("#telephone").inputmask(curcolor);
        $("#telephone").removeAttr("readonly");
        $("#telephone").attr("placeholder", "Введите номер");
    })
});
AOS.init();

});

jQuery(document).ready(function($) {
		$('.counter').counterUp({
				delay: 10,
				time: 1000
		});
});

$('.card-my').on('click',function(){
	$('.cont-wrap').toggleClass('cont-origin');
});