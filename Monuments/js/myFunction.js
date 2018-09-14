var check = false;

function scroll_top_header() {
    if(!check) {
        if($(window).scrollTop() > 30) {
            $('.header').addClass('scrolDown');
            $('.header').addClass('border-btm-transparent').removeClass('border-btm');
        }
        else {
            $('.header').addClass('border-btm').removeClass('border-btm-transparent');
            if($(window).width() <= 449){
                $('.header').addClass('border-btm-transparent').removeClass('border-btm');
            }
            $('.header').removeClass('scrolDown');
        }
    }
};

function scroll_top_navbar() {
     if(!check) { 
        if($(window).scrollTop() > 30) {
            $('.navbar').addClass('scrolDown');
        }
        else {
            $('.navbar').removeClass('scrolDown');
        }
     }
};

function head_and_nav_add_sctolDown(){
     $('.navbar').addClass('scrolDown');
    $('.header').addClass('scrolDown');
}

function head_and_nav_remove_sctolDown(){
    if($(window).scrollTop() <= 30) {
        $('.navbar').removeClass('scrolDown');
        $('.header').removeClass('scrolDown');
    }
}

$(function() {
    $(window).scroll(function() {
        if($(window).width() >= 1098){
            scroll_top_header();
            scroll_top_navbar();
        }
        else {
           scroll_top_header();
           scroll_top_navbar();
        }
    });
});

$(document).ready(function(){
    $('.nav-item-fb, .btn-theme-sm-1, .delivery-fb').magnificPopup();
    $('#phoneid').inputmask('+38(999) 999-99-99',{ "oncomplete": function(){ 
        $('#buttonform').prop("disabled", false);
        $('#buttonform').removeClass('btn-disabled').addClass('btn-enabled');
    }, "onincomplete": function(){ 
        $('#buttonform').prop("disabled", true);
        $('#buttonform').removeClass('btn-enabled').addClass('btn-disabled');
    } });
    
    $(window).resize();
    $(window).scroll();
});

$(window).resize(function() {
    if($(window).width() <= 991) {
        $('.ham').removeClass('collapse').addClass('show');
        $('.navbar-nav').removeClass('float-right');
        $('.navbar').addClass('tr0');
       
    }else{
        $('.ham').removeClass('show').addClass('collapse'); 
         $('.navbar-nav').addClass('float-right');
         $('.navbar').removeClass('tr0');
    }
    if($(window).width() <= 449){
        $('#headerId').addClass('border-btm-transparent');
    }
    else{
        $('#headerId').removeClass('border-btm-transparent');
    }
    if(check) {
        $('#gamburgerId').click();
    }
});

$('#gamburgerId').on('click', function (e) {
     var scroll = $(window).scrollTop();
    if(!check){
        $('.navbar').removeClass('tr0').addClass('tr1'); 
        head_and_nav_add_sctolDown();
        check = true;
    }
    else {
        $('.navbar').removeClass('tr1').addClass('tr0');
        head_and_nav_remove_sctolDown();
        if($(window).scrollTop() < 30){
        }
        check = false;
    }
})

jQuery(function($){
    $(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
        var block = $("#menu"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
        var ham = $("#gamburgerId");
        if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
            && block.has(e.target).length === 0 && !ham.is(e.target)) { // проверка условия если клик не по его дочерним элементам
             if(check) {
                $('#gamburgerId').click();
            } // если условия выполняются - скрываем наш элемент
        }
    });
});


$(document).ready(function(){  
    $('#menu').on("click","a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
        
        if(check) {
            $('#gamburgerId').click();
        }
    });
});


$('.slick-container').slick({
  dots: true,
  infinite: true,
  autoplay: true, 
  speed: 300,
  autoplaySpeed: 1000,
  slidesToShow: 1,
  adaptiveHeight: true,
  prevArrow: '<button type="button" class="slickPrevButton slickButtonStyle"><i class="fas fa-chevron-circle-left"></i></button>',
  nextArrow: '<button type="button" class="slickNextButton slickButtonStyle"><i class="fas fa-chevron-circle-right"></i></button>'
});
