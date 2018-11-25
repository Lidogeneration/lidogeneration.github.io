$(function(){
    checkCheck();
    checkCheck2();
     $('.inp_check').on("click", function(){
        checkCheck();
        checkCheck2();
    }); 
});

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