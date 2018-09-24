var check = false;

$(function() { 
    $('.b-contact-us').magnificPopup();
    FormCheck();
    OnClick();
});

function FormCheck() {
    $('#phoneid, #phoneid2').inputmask('+38(999) 999-99-99',{ "oncomplete": function() { 
        $('#buttonform').prop("disabled", false);
        $('#buttonform').removeClass('btn-disabled').addClass('btn-enabled');
    }, "onincomplete": function(){ 
        $('#buttonform').prop("disabled", true);
        $('#buttonform').removeClass('btn-enabled').addClass('btn-disabled');
    } });
};

$(window).resize(function() {
    CheckResize();
});

function CheckResize() {
    if(check) {
        $('#hamId').click();
    }
};

$(window).on('scroll', function() {
    if($(window).scrollTop() > 300) {
        $('.my-header').addClass('show-nav-menu');
    }
    else {
       $('.my-header').removeClass('show-nav-menu');
    }
});

$('#hamId').on('click', function (e) {
    $('#hamId').toggleClass('is-active');
    if(!check){
        check = true;
    }
    else {
        check = false;
    }
});

function OnClick() {
    $('#menu, #menu2').on("click","a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
            if(id != '#feedbackId'){
                $('body,html').animate({scrollTop: top}, 1000);
            }
        if(check) {
            $('#hamId').click();
        }
    });
};

jQuery(function($){
    $(document).mouseup(function (e) { 
        var block = $("#menu"); 
        if (!block.is(e.target) && block.has(e.target).length === 0) {
            if(check){ 
              //  $('#hamId').click();
               
            }
        }
    });
});