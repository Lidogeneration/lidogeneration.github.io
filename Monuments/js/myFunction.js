var check = false;

$(function() { 
    $('.nav-item-fb, .btn-theme-sm-1, .delivery-fb').magnificPopup();
    FormCheck();
    CheckResize();
    CheckScroll();
    OnClick();
});

$(window).resize(function() {
    CheckResize();
});

$(window).scroll(function() {
    CheckScroll();
});

function CheckScroll() {
    if($(window).width() >= 1098){
        scroll_top_header();
        scroll_top_navbar();
    }
    else {
       scroll_top_header();
       scroll_top_navbar();
    }
};

function CheckResize() {
    if($(window).width() < 991) {
        $('.ham').removeClass('ham-disabled');
        $('.navbar-nav').removeClass('float-right');
        $('.navbar').addClass('tr0');
    }
    else {
         $('.ham').addClass('ham-disabled');
        $('.navbar-nav').addClass('float-right');
        $('.navbar').removeClass('tr0');
    }
    if(check) {
        $('#gamburgerId').click();
    }
};

function FormCheck() {
    $('#phoneid').inputmask('+38(999) 999-99-99',{ "oncomplete": function() { 
        $('#buttonform').prop("disabled", false);
        $('#buttonform').removeClass('btn-disabled').addClass('btn-enabled');
    }, "onincomplete": function(){ 
        $('#buttonform').prop("disabled", true);
        $('#buttonform').removeClass('btn-enabled').addClass('btn-disabled');
    } });
};

function OnClick() {
        $('#menu').on("click","a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
        if(check) {
            $('#gamburgerId').click();
        }
    });
};

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

function head_and_nav_add_sctolDown() {
     $('.navbar').addClass('scrolDown');
     $('.header').addClass('scrolDown');
};

function head_and_nav_remove_sctolDown() {
    if($(window).scrollTop() <= 30) {
        $('.navbar').removeClass('scrolDown');
        $('.header').removeClass('scrolDown');
    }
};
