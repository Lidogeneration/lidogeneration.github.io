$(function() { 
    AOS.init();
    $('.contactpopup').magnificPopup();
    FormCheck();
});


function FormCheck() {
    jQuery('#contactTelPopUp').inputmask('+7(999) 999-99-99',{ "oncomplete": function() { 
        jQuery('#contactSendButtonPopUp').prop("disabled", false);
        // $('#mailMainFormId').on('input', function(){
        //     if($('#mailMainFormId').val().length == 0){
        //         jQuery('#buttonMainFormId').addClass('disabled-send');
        //     }else{
        //         jQuery('#buttonMainFormId').removeClass('disabled-send');
        //     }
        // });
    }, "onincomplete": function(){ 
        jQuery('#contactSendButtonPopUp').prop("disabled", true);
        //jQuery('#buttonMainFormId').addClass('disabled-send');
    } }); 
};