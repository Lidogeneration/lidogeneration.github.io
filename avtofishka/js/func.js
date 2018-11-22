$(function() { 
    AOS.init();
    FormCheck();
    $('.a_contact').magnificPopup();
});

function FormCheck() {
    jQuery('.telephone').inputmask('+7(999) 999-99-99',{ "oncomplete": function() { 
        jQuery('.btn_send').prop("disabled", false);
    }, "onincomplete": function(){ 
        jQuery('.btn_send').prop("disabled", true);
    } }); 
};
