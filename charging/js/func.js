$(function(){
    $('.contact_').magnificPopup();
    checkCheck();
    checkCheck2();
     $('.inp_check').on("click", function(){
        checkCheck();
        checkCheck2();
    }); 
    FormCheck(); 
    
    //ChangeImgProd();
    GalleryImgs();
    Schetchik();
});


function GalleryImgs(){
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
};

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

const arrProdIds = ['StandartBlackId','WoodHolderId', 'StandartGoldId','StandartSilverId', 'DoubleSilverId', 'SmartSilverId'];
const arrImageIds = ['StandartBlackImgId','WoodHolderImgId', 'StandartGoldImgId','StandartSilverImgId', 'DoubleSilverImgId', 'SmartSilverImgId']
//const arrayFunctionImgHref = [StandartBlack,WoodHolder, StandartGold,StandartSilver,DoubleSilver,SmartSilver];
const arrPathImgsDefault = [
    '/images/smart_b/standart-black.jpg',
    '/images/wood-holder/wood-holder.jpg',
    '/images/standart-gold/standart-gold.jpg',
    '/images/standart-silver/standart-silver.jpg',
    '/images/double-silver/double-silver.jpg',
    '/images/smart-silver/smart-silver.jpg'
];
const arrPathImgsChange = [
    '/images/smart_b/1_1.jpg',
    '/images/wood-holder/wood-holder_1.jpg',
    '/images/standart-gold/standart-gold_1.jpg',
    '/images/standart-gold/standart-gold_1.jpg',
    '/images/double-silver/double-silver_1.jpg',
    '/images/smart-silver/smart-silver_1.jpg'
];

let  arrGallery = [];
function ChangeImgProd() {
   
 
    for (let i = 0; i < arrProdIds.length; i++) {
        arrGallery[i] = document.getElementById(arrProdIds[i]);
        
        arrGallery[i].addEventListener("mouseover", ChangeImgHref);
        arrGallery[i].addEventListener("mouseout", ChangeImgHref);
    }

};

function ChangeImgHref(e) {

    if(e.type==="mouseover") {
       for (let i = 0; i < arrImageIds.length; i++) {
          $('#' + $(this).attr("id")).attr("src", arrPathImgsChange[i]);
       }
    } else if(e.type==="mouseout") {
        for (let i = 0; i < arrImageIds.length; i++) {
            $('#' + $(this).attr("id")).attr("src", arrPathImgsDefault[i]);
         }
   }
    // for (let i = 0; i < arrProdIds.length; i++) {
    //    // if(e.type==="mouseover") {
    //         alert('sdf');
    //         $('#' + arrImageIds[i]).attr("src", arrPathImgsChange[i]);
    //   //  } else if(e.type==="mouseout") {
    //         $('#' + arrImageIds[i]).attr("src", arrPathImgsDefault[i]);
    //   //  }
        
    // //     $('#SmartSilverImgId').attr("src", "/images/smart-silver/smart-silver_1.jpg");
    // // else if(e.type==="mouseout")
    // //     $('#SmartSilverImgId').attr("src", "/images/smart-silver/smart-silver.jpg");
    // // }
};



function SmartSilver(e){
           
    if(e.type==="mouseover")
        $('#SmartSilverImgId').attr("src", "/images/smart-silver/smart-silver_1.jpg");
    else if(e.type==="mouseout")
        $('#SmartSilverImgId').attr("src", "/images/smart-silver/smart-silver.jpg");
}

function DoubleSilver(e){
    if(e.type==="mouseover")
        $('#DoubleSilverImgId').attr("src", "/images/double-silver/double-silver_1.jpg");
    else if(e.type==="mouseout")
        $('#DoubleSilverImgId').attr("src", "/images/double-silver/double-silver.jpg");
}

function StandartSilver(e){
    if(e.type==="mouseover")
        $('#StandartSilverImgId').attr("src", "/images/standart-gold/standart-gold_1.jpg");
    else if(e.type==="mouseout")
        $('#StandartSilverImgId').attr("src", "/images/standart-silver/standart-silver.jpg");
}

function StandartGold(e){
    if(e.type==="mouseover")
        $('#StandartGoldImgId').attr("src", "/images/standart-gold/standart-gold_1.jpg");
    else if(e.type==="mouseout")
        $('#StandartGoldImgId').attr("src", "/images/standart-gold/standart-gold.jpg");
}

function WoodHolder(e){
    if(e.type==="mouseover")
        $('#WoodHolderImgId').attr("src", "/images/wood-holder/wood-holder_1.jpg");
    else if(e.type==="mouseout")
        $('#WoodHolderImgId').attr("src", "/images/wood-holder/wood-holder.jpg");
}

function StandartBlack(e){
    if(e.type==="mouseover")
        $('#StandartBlackImgId').attr("src", "/images/smart_b/1_1.jpg");
    else if(e.type==="mouseout")
        $('#StandartBlackImgId').attr("src", "/images/smart_b/standart-black.jpg");
}

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
