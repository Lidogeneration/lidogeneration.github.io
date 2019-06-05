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


const customTextFormEmail = document.getElementById('customTextFormEmail');
const nameScrollEmail = document.getElementById('input_orderEmail');
const nameScroll = document.getElementById('input_order');
const customTextFormSpan = document.getElementById('customTextForm');
const navBar = document.getElementById('navMy');
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
    if(window.scrollY >100)
    {
        navBar.classList.remove('hideNav');
    }
    else {
        navBar.classList.add('hideNav');
    }
};

window.onscroll = function () {
    if(window.scrollY >100)
    {
        navBar.classList.remove('hideNav');
    }
    else {
        navBar.classList.add('hideNav');
    }
};

window.onresize = function () {

};


$('.revCont').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    dots: false,
    arrows: true
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