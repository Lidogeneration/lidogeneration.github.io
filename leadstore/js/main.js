$(function(){ 
    var navMain = $(".navbar-collapse"); // avoid dependency on #id
    // "a:not([data-toggle])" - to avoid issues caused
    // when you have dropdown inside navbar
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });
});
$(document).click(function(event) {
    $(event.target).closest(".navbar").length || $(".navbar-collapse.show").length && $(".navbar-collapse.show").collapse("hide")
  });




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


const customTextFormEmailS = document.getElementById('customTextFormEmail');
const nameScrollEmail = document.getElementById('input_orderEmail');

const nameScroll = document.getElementById('input_order');
const customTextFormSpan = document.getElementById('customTextForm');
const navBar = document.getElementById('navMy');
const navMyStore = document.getElementById('navMyStore');

function setNameScroll(namescroll, customTextFormSpanF) {
    nameScroll.value = namescroll;
    customTextFormSpan.textContent = customTextFormSpanF;
};

function setNameScrollEmail(namescrollEmailS, customTextFormEmailF) {
    nameScrollEmail.value = namescrollEmailS;
    customTextFormEmailS.textContent = customTextFormEmailF;
};

document.addEventListener("DOMContentLoaded", ready);

function ready() {
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

window.onload = function () {
    if(navMyStore)
    {
        if(window.scrollY >100)
        {
            navMyStore.classList.add('storeFixedNav');
        }
        else
        {
            navMyStore.classList.remove('storeFixedNav');
        }
    }

    if(navBar)
    {
        if(window.scrollY >100)
        {
            
            navBar.classList.remove('hideNav');
        }
        else {
            
            navBar.classList.add('hideNav');
        }
    }
};

window.onscroll = function () {
    if(navBar)
    {
        if(window.scrollY >100)
        {
            navBar.classList.remove('hideNav');
        }
        else {
            navBar.classList.add('hideNav');
        }
    }
    if(navMyStore)
    {
        if(window.scrollY >100)
        {
            navMyStore.classList.add('storeFixedNav');
        }
        else
        {
            navMyStore.classList.remove('storeFixedNav');
        }
    }
};

window.onresize = function () {

};


$('.revCont').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    dots: false,
    arrows: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          }
      ]
  });

  $('.portCont').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    dots: false,
    arrows: true,
    pauseOnFocus: false,
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


  $('.caseSlider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    dots: false,
    arrows: true,
    pauseOnFocus: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          }
      ]
  });


  $('.team__cont').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    dots: false,
    arrows: true,
    pauseOnFocus: false,
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



  $(document).ready(function() {
	$('.popupVideo').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
});





$('.store_revCont').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    dots: true,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    infinite: true,
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

  $('.logoCont').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    dots: false,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          }
      ]
  });

  
  $('.store_potfolio-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    dots: true,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          }
      ]
  });