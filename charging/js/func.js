$(function(){
    
    $('.contact_').magnificPopup();
  
    checkCheck();
    checkCheck2();
     $('.inp_check').on("click", function(){
        checkCheck();
        checkCheck2();
    }); 
    FormCheck();

    $(document).ready(function() {

        $('.image-popup-vertical-fit').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-img-mobile',
            image: {
                verticalFit: true
            }
            
        });
    });    
   
});

$(function(){
    var thumbs = document.querySelectorAll('#thumbs > a');
    var big = document.getElementById('big');
    var bigii = document.getElementById('bigii');
    bigii.href = big.src;
    for (var i = 0; i < thumbs.length; i++) {
        thumbs[i].addEventListener('click', function(e) {
            e.preventDefault();
            big.src = this.href;
            bigii.href = this.href;
        });
    }
});



function FormCheck() {
    jQuery('.telephone').inputmask('+7(999) 999-99-99',{ "oncomplete": function() { 
        jQuery('.btn_send').prop("disabled", false);
    }, "onincomplete": function(){ 
        jQuery('.btn_send').prop("disabled", true);
    } }); 
};

function checkCheck() {
    if($("#check").is(":checked")) {  
        $('#firstpricing').addClass('pricing-active');   
    }else{
        $('#firstpricing').removeClass('pricing-active');   
    }
};

function checkCheck2() {
    if($("#check2").is(":checked")) {  
        $('#secondpricing').addClass('pricing-active');   
    }else{
        $('#secondpricing').removeClass('pricing-active');   
    }
};