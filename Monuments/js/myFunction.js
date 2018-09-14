var check = false;

function scroll_top_header() {
    if(!check) {
        if($(window).scrollTop() > 30) {
            $('.header').addClass('scrolDown');
            $('.header').removeClass('border-btm').addClass('border-btm-transparent');
        }
        else {
            $('.header').removeClass('border-btm-transparent').addClass('border-btm');
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

function head_and_nav_add_sctolDown() {
     $('.navbar').addClass('scrolDown');
     $('.header').addClass('scrolDown');
}

function head_and_nav_remove_sctolDown() {
    if($(window).scrollTop() <= 30) {
        $('.navbar').removeClass('scrolDown');
        $('.header').removeClass('scrolDown');
    }
}


$('.nav-item-fb, .btn-theme-sm-1, .delivery-fb').magnificPopup();

$(document).ready(function(){
    $(window).resize();
});

$(window).resize(function() {
    if($(window).width() <= 991) {
        $('.ham').removeClass('collapse').addClass('show');
        $('.navbar-nav').removeClass('float-right');
        $('.navbar').addClass('tr0');
    }
    else {
        $('.ham').removeClass('show').addClass('collapse'); 
        $('.navbar-nav').addClass('float-right');
        $('.navbar').removeClass('tr0');
    }
    if(check) {
        $('#gamburgerId').click();
    }
});

$(document).ready(function(){
    $(window).scroll();
});

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

$(document).ready(function(){
    FormCheck();
});

function FormCheck() {
    $('#phoneid').inputmask('+38(999) 999-99-99',{ "oncomplete": function() { 
        $('#buttonform').prop("disabled", false);
        $('#buttonform').removeClass('btn-disabled').addClass('btn-enabled');
    }, "onincomplete": function(){ 
        $('#buttonform').prop("disabled", true);
        $('#buttonform').removeClass('btn-enabled').addClass('btn-disabled');
    } });
};

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
        check = false;
    }
});

