$(function () {
    $('.nav-link-new').mPageScroll2id();
    $('.mpopup').magnificPopup();
    $('.phoneidcl').inputmask('+38(999) 999-99-99', {
        "oncomplete": function () {
            $(".disbutt").prop("disabled", false);
        },
        "onincomplete": function () {
            $(".disbutt").prop("disabled", true);
        }
    });
});

$(document).ready(function () {
    $('.order-main').submit(function (e) {
        e.preventDefault();
        $.magnificPopup.close();
        $.ajax({
            type: 'POST',
            url: '/wp-content/themes/led/tele_order.php',
            data: $(this).serialize()
        }).done(function () {
            $.magnificPopup.close();
            setTimeout(function () {
                window.location = 'done';
            }, 1);
        });
    });
});

const customTextFormEmail = document.getElementById('customTextFormEmail');
const nameScrollEmail = document.getElementById('input_orderEmail');
const nameScroll = document.getElementById('input_order');
const customTextFormSpan = document.getElementById('customTextForm');

function setNameScroll(namescroll, customTextFormSpanF) {
    nameScroll.value = namescroll;
    customTextFormSpan.textContent = customTextFormSpanF;
};

function setNameScrollEmail(namescrollEmail) {
    nameScrollEmail.value = namescrollEmail;
};

window.onload = function () {
    if (window.innerWidth <= 1200) {
        AOS.init({
            disable: true,
        });
    } else {
        AOS.init({
            disable: false,
        });
    }
};

window.onscroll = function () {


};

window.onresize = function () {

};


$('.revCont').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    arrows: true
  });

  $('.portCont').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    arrows: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          }
      ]
  });