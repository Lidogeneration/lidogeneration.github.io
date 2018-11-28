$(function(){
    $('.contact_').magnificPopup();
    GoRelax();
    FormCheck();
    GoVideo();
    $('.menu-icon').click(function() {
        $(this).toggleClass('active');
    })
});

function GoRelax(){
    var rellax = new Rellax('.rellax', {
        callback: function(position) {
            console.log(position);
        }
      });
};

function FormCheck() {
    jQuery('.telephone').inputmask('+38(999) 999-99-99',{ "oncomplete": function() { 
        jQuery('.btn_send').prop("disabled", false);
    }, "onincomplete": function(){ 
        jQuery('.btn_send').prop("disabled", true);
    } }); 
};

function GoVideo() {
    $('.video-icon').magnificPopup({
        type: 'iframe'
    });
};




