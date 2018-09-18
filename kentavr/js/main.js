$(function(){

$('.slider-wrap').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false

});      
AOS.init();
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

