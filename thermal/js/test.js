function login(token) {

  console.log(token);
  $.getJSON("//ulogin.ru/token.php?host=" +
      encodeURIComponent(location.toString()) + "&token=" + token + "&callback=?",
      function (data) {


          data = $.parseJSON(data.toString());
          if (data.error) {


          }
          if (!data.error) {
              console.log(data);
              data.auth = true;
              $.ajax({
                  type: "post",
                  url: "/otz.php",
                  data: data,
                  dataType: 'json',
                  success: function (json) {

                      console.log(json);
                      if (json.auth == 'y') {
                          $('.modal-content #send-form').hide();
                          $('.modal-content .succes').text("Вы авторизованы");
                          $('.modal-content .succes').show();
                          $('.modal').modal('show');
                          setTimeout(function () {

                              $('.modal').modal('hide');

                          }, 2000);
                      }


                  }
              });


          }
      });
}


jQuery(document).ready(function () {


  var maxScrollSpeed = 1;

  var mouseXDistFromCenter = 0;

  var mouseX;

  var mouseY;

  var divNightView;

  var imgNightView;

  var divIRView;

  var imgWidth;

  var divScrollBorderWidth;

  var maxScrollWidth;

  var curScrollPos = 0;

  var divIRBorder;

  var divIRBorderCenter;

  var lastAnimTime;

  var animateScroll = true;

  var activeMarker = null;

  var displayOverlay;

  var displayOverlayCtr;


  divScrollBorderWidth = $('.divScrollBorder').width();

  divNightView = $('.divNightView');


  divIRBorder = $('.divIRBorderFlirOne');

  divIRBorderCenter = {'x': divIRBorder.width() / 2.1, 'y': divIRBorder.height() / 2.3};


  displayOverlay = $('.displayOverlayFlirOne');

  displayOverlayCtr = {'x': displayOverlay.width() / 8.9, 'y': displayOverlay.height() / 6.3};


  imgNightView = $('.imgNightView');

  divIRView = $('.divIRView');

  imgWidth = imgNightView.width();

  maxScrollWidth = imgWidth - divScrollBorderWidth;

  $('.imgIRView').css('width', (imgNightView.width() + 10) + 'px');


  $('.divScrollBorder').on('mousemove touchmove mousedown touchstart', function (e) {

      e.preventDefault();

      if (e.originalEvent.touches) {

          e = e.originalEvent.touches[0];

      }


      divScrollBorderWidth = $(this).width();

      divNightView = $(this).find('.divNightView');


      divIRBorder = $(this).find('.divIRBorderFlirOne');

      divIRBorderCenter = {'x': divIRBorder.width() / 2.1, 'y': divIRBorder.height() / 2.3};


      displayOverlay = $(this).find('.displayOverlayFlirOne');

      displayOverlayCtr = {'x': displayOverlay.width() / 8.9, 'y': displayOverlay.height() / 6.3};


      imgNightView = $(this).find('.imgNightView');

      divIRView = $(this).find('.divIRView');

      imgWidth = imgNightView.width();

      maxScrollWidth = imgWidth - divScrollBorderWidth;

      $(this).find('.imgIRView').css({'width': (imgNightView.width() + 10) + 'px', 'margin-top': '-3px'});


      divScrollBorder = $(this);
      // divScrollBorder = $('.divScrollBorder');

      scrollBorderOffset = divScrollBorder.offset();

      mouseX = e.pageX - scrollBorderOffset.left;

      mouseY = e.pageY - scrollBorderOffset.top;

      mouseXDistFromCenter = mouseX - divScrollBorderWidth / 2;


      // set Position of the IR View Border Div to the Mouse position

      divIRBorder.css({'left': mouseX - divIRBorderCenter.x, 'top': mouseY - divIRBorderCenter.y});


      displayOverlay.css({
          'left': ((mouseX - displayOverlayCtr.x) - 229),
          'top': ((mouseY - displayOverlayCtr.y) - 170)

      });


      // position the IR Image inside accordingly so it is properly aligned with the Nightview Image

      divIRView.css('transform', 'translate3d(' + -(mouseX - divIRBorderCenter.x + Math.round(curScrollPos) + 0) + 'px, ' + -(mouseY - divIRBorderCenter.y + 0) + 'px, 0)');


      divIRView.css('transform', 'translate3d(' + -(mouseX - displayOverlayCtr.x + Math.round(curScrollPos) + 0) + 'px, ' + -(mouseY - displayOverlayCtr.y + 0) + 'px, 0)');


      var currentElement = document.elementFromPoint(e.clientX, e.clientY);

      if (currentElement) {

          if (currentElement != activeMarker) {

              if (activeMarker) {

                  markerMouseLeave(activeMarker.id);

                  activeMarker = null;

              }

              if (currentElement.id.substr(0, 6) == 'marker') {

                  activeMarker = currentElement;

                  markerMouseEnter(activeMarker.id);

              }

          }

      }

  });


  $('.divScrollBorder').on('mouseup touchend', function (e) {

      e.preventDefault();

      return false;

  });


  window.requestAnimFrame = (function () {

      return window.requestAnimationFrame ||

          window.webkitRequestAnimationFrame ||

          window.mozRequestAnimationFrame ||

          window.oRequestAnimationFrame ||

          window.msRequestAnimationFrame ||

          function (callback) {

              window.setTimeout(callback, 1000 / 60);

          };

  })();


  lastAnimTime = 0;

  window.requestAnimFrame(scrollAnimation);


  function scrollAnimation(time) {

      window.requestAnimFrame(scrollAnimation);


      var dt;

      if (!time) {

          dt = 20;

      } else {

          dt = time - lastAnimTime;

          lastAnimTime = time;

      }


      if (!animateScroll) {

          return;

      }


      // try getting Image Width again in case it was 0 during ready() above (seems to be the case on webkit browsers sometimes)

      if (!imgWidth) {

          imgWidth = imgNightView.width();

          maxScrollWidth = imgWidth - divScrollBorderWidth;

      }

      curScrollPos += mouseXDistFromCenter * maxScrollSpeed * dt / divScrollBorderWidth;

      curScrollPos = Math.max(Math.min(curScrollPos, maxScrollWidth), 0);

      divNightView.css('transform', 'translate3d(' + -Math.round(curScrollPos) + 'px,0,0)');

      divIRView.css('transform', 'translate3d(' + -(mouseX - divIRBorderCenter.x + Math.round(curScrollPos) + 0) + 'px, ' + -(mouseY - divIRBorderCenter.y + 0) + 'px, 0)');


      divIRView.css('transform', 'translate3d(' + -(mouseX - displayOverlayCtr.x + Math.round(curScrollPos) + 0) + 'px, ' + -(mouseY - displayOverlayCtr.y + 0) + 'px, 0)');

  }


});


//function markerMouseEnter(markerId) {
//
//    // deactivate scrolling while mouse/finger is over the marker so it doesn't scroll away
//
//    animateScroll = false;
//
//    var selector = markerId.replace('marker', '#popup');
//
//
//    $(selector).removeClass('fadeout').addClass('fadein');
//
//    var video = $(selector + '>video')[0];
//
//    if (video) {
//
//        video.play();
//
//    }
//
//}
//
//
//function markerMouseLeave(markerId) {
//
//
//    animateScroll = true;
//
//    var selector = markerId.replace('marker', '#popup');
//
//
//    $(selector).removeClass('fadein').addClass('fadeout');
//
//    var video = $(selector + '>video')[0];
//
//    if (video) {
//
//        video.pause();
//
//    }
//
//}


// scrolling animation


////////////// Обработчик вопросы ответы
$(document).ready(function () {

  $("select").select2({
      minimumResultsForSearch: Infinity,
      language: "ru"
  });


  $('.panel-collapse').collapse('hide');
  $('.panel-collapse').on('show.bs.collapse', function () {
      $(this).prev().css({"background": "rgba(255, 255, 255, 0.15)", "font-size": "20px"});
  });
  $('.panel-collapse').on('hidden.bs.collapse', function () {
      $(this).prev().css({"background": "none"});
  });


////////////// Скроллинг до якоря

  $('.header_menu a[href^="#"]').click(function () {
      elementClick = $(this).attr("href");
      destination = $(elementClick).offset().top;


      if (/AppleWebKit/.test(navigator.appVersion)) {
          $('body').animate({scrollTop: destination}, 550);
      } else {
          $('html').animate({scrollTop: destination}, 550);
      }
      return false;
  });


  var owl = $("#owl-gal");
  $("#owl-gal").owlCarousel({

      navigation: false, // Show next and prev buttons
      slideSpeed: 300,
      pagination: false,
      paginationSpeed: 400,
      singleItem: true


  });
  $(".block_otzs .next").click(function () {
      owl.trigger('owl.next');
  });
  $(".block_otzs .prev").click(function () {
      owl.trigger('owl.prev');
  });


});

////////////// Нижняя форма заказа


$(document).on('click', '.form_zakaz .btn-default', function () {
  if ($(this).hasClass('opt')) {
      $(this).css({"background": "#ffffff", "color": "#000000"}).addClass('active');
      $(".form_zakaz .rozn").css({"background": "none", "color": "#ffffff"}).removeClass('active');
  } else {
      $(this).css({"background": "#ffffff", "color": "#000000"}).addClass('active');
      $(".form_zakaz .opt").css({"background": "none", "color": "#ffffff"}).removeClass('active');
  }


});


///////////////////////Модальное окно

var dann = {};
$('.top_zakaz').on('click', function () {
  $('.modal-content #send-form').show();
  $('.modal-content .succes').hide();
  $('.modal').modal('show');
  dann.type_termal = false;


});

$('.zakaz').on('click', function () {
  $('.modal-content #send-form').show();
  $('.modal-content .succes').hide();
  $('.modal').modal('show');

  dann.type_termal = $(this).parents('.col-xs-6').find('select option:selected').val();

  if ($(this).parents('.col-xs-6').hasClass("seek_xr")) {
      dann.type_pr = "Seek Termal XR";
  } else {
      dann.type_pr = "Seek Termal";
  }


});

$(document).on('click', "#send-form .btn-white", function () {


  // console.log(dann.type_pr);

  $.ajax({
      type: "post",
      url: "form.php",
      data: {pr: dann.type_pr, type: dann.type_termal, phone: $(".form-f").val()},
      dataType: "json",
      success: function (json) {
          if (json.success) {

              $('.modal-content #send-form').hide();
              $('.modal-content .succes').show();

              setTimeout(function () {

                  $('.modal').modal('hide');

              }, 1000);
          }

      }

  });


});




$(document).on('click', ".form_quest .btn-green", function () {


  // console.log(dann.type_pr);

  var forms = $('.f_quest').serializeArray();


  if (forms) {


      $.ajax({
          type: "post",
          url: "otz.php",
          data: forms,
          dataType: "json",
          success: function (json) {
              if (json.success) {

                  $('.modal-content #send-form').hide();
                  $('.modal-content .succes').text("Вас запрос отправлен! Ждите звонка нашего менеджера!");
                  $('.modal-content .succes').show();
                  $('.modal').modal('show');
                  setTimeout(function () {

                      $('.modal').modal('hide');

                  }, 2000);
              }

          }

      });
  }


});


////////////////////////////// Нижняя форма

$(document).on('click', ".f_zakaz .btn-green", function () {


  // console.log(dann.type_pr);

  var forms = $('.f_zakaz').serializeArray();


  if ($('.f_zakaz button.active').hasClass('opt')) {
      forms[7] = {name: "opt", value: "y"};
  } else {
      forms[7] = {name: "rozn", value: "y"};
  }

  if ($('.f_zakaz [name=phone]').val().length < 3) {
      $('.modal-content #send-form').hide();
      $('.modal-content .succes').text("Заполните поле телефон!");
      $('.modal-content .succes').show();
      $('.modal').modal('show');

  } else {


      $.ajax({
          type: "post",
          url: "form.php",
          data: forms,
          dataType: "json",
          success: function (json) {
              if (json.success) {

                  $('.modal-content #send-form').hide();
                  $('.modal-content .succes').text("Ваша заявка получена! Ждите звонка нашего менеджера!");
                  $('.modal-content .succes').show();
                  $('.modal').modal('show');
                  setTimeout(function () {

                      $('.modal').modal('hide');

                  }, 2000);
              }

          }

      });
  }


});

$(document).on("click", ".block_otz .otz_but", function () {

  var text = $(".block_otz [name=review]").val();
  if (text.length > 3) {

      $.ajax({
          type: "post",
          url: "/otz.php",
          data: {check_out: 'check_out'},
          dataType: 'json',
          success: function (json) {

              // console.log(json);
              if (json.message) {
                  $('.modal-content #send-form').hide();
                  $('.modal-content .succes').text(json.message);
                  $('.modal-content .succes').show();
                  $('.modal').modal('show');
                  setTimeout(function () {

                      $('.modal').modal('hide');

                  }, 2000);
              } else if (json.auth = "y") {

                  $.ajax({
                      type: "post",
                      url: "/otz.php",
                      data: {rew: text},
                      dataType: 'json',
                      success: function (json) {

                          $('.modal-content #send-form').hide();
                          $('.modal-content .succes').text(json.message);
                          $('.modal-content .succes').show();
                          $('.modal').modal('show');
                          setTimeout(function () {

                              $('.modal').modal('hide');
                              location.href = location.pathname;
                          }, 2000);

                      }

                  });

              }


          }
      });

  }

});


$(window).resize(function () {

  console.log($(window).width() + " - " + $(window).height());

});




function login(t) {
	console.log(t), $.getJSON("//ulogin.ru/token.php?host=" + encodeURIComponent(location.toString()) + "&token=" + t + "&callback=?", function(t) {
	t = $.parseJSON(t.toString()), t.error, t.error || (console.log(t), t.auth = !0, $.ajax({
		type: "post",
		url: "/otz.php",
		data: t,
		dataType: "json",
		success: function(t) {
		console.log(t), "y" == t.auth && ($(".modal-content #send-form").hide(), $(".modal-content .succes").text("Вы авторизованы"), $(".modal-content .succes").show(), $(".modal").modal("show"), setTimeout(function() {
			$(".modal").modal("hide")
		}, 2e3))
		}
	}))
	})
}


$(document).ready(function() {
	$("select").select2({
		minimumResultsForSearch: 1 / 0,
		language: "ru"
	});

	$(".panel-collapse").collapse("hide");

	$(".panel-collapse").on("show.bs.collapse", function() {
		$(this).prev().css({
			background: "rgba(255, 255, 255, 0.15)",
			"font-size": "20px"
		})
	});

	$(".panel-collapse").on("hidden.bs.collapse", function() {
		$(this).prev().css({
			background: "none"
		})
	});

	/*$('.header_menu a[href^="#"]').click(function() {
	return elementClick = $(this).attr("href"), destination = $(elementClick).offset().top, /AppleWebKit/.test(navigator.appVersion) ? $("body").animate({
		scrollTop: destination
	}, 550) : $("html").animate({
		scrollTop: destination
	}, 550), !1
	});*/
	
	$("a[rel^='fancybox']").fancybox({});
	
	$('.header_menu a[href^="#"]').click(function(event){
		event.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top-$('.header_menu').outerHeight() }, 1100);
	});
	
	
	var t = $("#owl-gal");
	t.owlCarousel({
	navigation: !1,
	slideSpeed: 300,
	pagination: !1,
	paginationSpeed: 400,
	singleItem: !0
	}), $(".block_otzs .next").click(function() {
		t.trigger("owl.next")
	}), $(".block_otzs .prev").click(function() {
		t.trigger("owl.prev")
	})

	$(document).on("click", ".form_zakaz .btn-default", function() {
	$(this).hasClass("opt") ? ($(this).css({
		background: "#ffffff",
		color: "#000000"
	}).addClass("active"), $(".form_zakaz .rozn").css({
		background: "none",
		color: "#ffffff"
	}).removeClass("active")) : ($(this).css({
		background: "#ffffff",
		color: "#000000"
	}).addClass("active"), $(".form_zakaz .opt").css({
		background: "none",
		color: "#ffffff"
	}).removeClass("active"))
	});

	var dann = {};
	
	$(".top_zakaz").on("click", function() {
	$(".modal-content #send-form").show(), $(".modal-content .succes").hide(), $(".modal").modal("show"), dann.type_termal = !1
	});
	
	$(".zakaz").on("click", function() {
		if ($(this).data('pr').length > 0) {
			dann.type_pr = $(this).data('pr');
		}
		$(".modal-content #send-form").show();
		$(".modal-content .succes").hide();
		$(".modal").modal("show");
		dann.type_termal = $(this).parents(".col-xs-6").find("select option:selected").val();
	});
	
	$(document).on("submit", "#send-form", function() {
	$.ajax({
		type: "post",
		url: "form.php",
		data: {
		pr: dann.type_pr,
		type: dann.type_termal,
		phone: $(".form-f").val()
		},
		dataType: "json",
		success: function(t) {
		t.success && ($(".modal-content #send-form").hide(), $(".modal-content .succes").show(), setTimeout(function() {
			$(".modal").modal("hide")
		}, 1e3))
		}
	})
	});

	$(document).on("click", ".form_quest .btn-green", function() {
	var t = $(".f_quest").serializeArray();
	t && $.ajax({
		type: "post",
		url: "otz.php",
		data: t,
		dataType: "json",
		success: function(t) {
		t.success && ($(".modal-content #send-form").hide(), $(".modal-content .succes").text("Вас запрос отправлен! Ждите звонка нашего менеджера!"), $(".modal-content .succes").show(), $(".modal").modal("show"), setTimeout(function() {
			$(".modal").modal("hide")
		}, 2e3))
		}
	})
	});

	$(document).on("click", ".f_zakaz .btn-green", function() {
	var t = $(".f_zakaz").serializeArray();
	t[7] = $(".f_zakaz button.active").hasClass("opt") ? {
		name: "opt",
		value: "y"
	} : {
		name: "rozn",
		value: "y"
	}, $(".f_zakaz [name=phone]").val().length < 3 ? ($(".modal-content #send-form").hide(), $(".modal-content .succes").text("Заполните поле телефон!"), $(".modal-content .succes").show(), $(".modal").modal("show")) : $.ajax({
		type: "post",
		url: "form.php",
		data: t,
		dataType: "json",
		success: function(t) {
		t.success && ($(".modal-content #send-form").hide(), $(".modal-content .succes").text("Ваша заявка получена! Ждите звонка нашего менеджера!"), $(".modal-content .succes").show(), $(".modal").modal("show"), setTimeout(function() {
			$(".modal").modal("hide")
		}, 2e3))
		}
	})
	});

	$(document).on("click", ".block_otz .otz_but", function() {
	var t = $(".block_otz [name=review]").val();
	t.length > 3 && $.ajax({
		type: "post",
		url: "/otz.php",
		data: {
		check_out: "check_out"
		},
		dataType: "json",
		success: function(e) {
		e.message ? ($(".modal-content #send-form").hide(), $(".modal-content .succes").text(e.message), $(".modal-content .succes").show(), $(".modal").modal("show"), setTimeout(function() {
			$(".modal").modal("hide")
		}, 2e3)) : (e.auth = "y") && $.ajax({
			type: "post",
			url: "/otz.php",
			data: {
			rew: t
			},
			dataType: "json",
			success: function(t) {
			$(".modal-content #send-form").hide(), $(".modal-content .succes").text(t.message), $(".modal-content .succes").show(), $(".modal").modal("show"), setTimeout(function() {
				$(".modal").modal("hide"), location.href = location.pathname
			}, 2e3)
			}
		})
		}
	})
	});

	$(window).resize(function() {
	//console.log($(window).width() + " - " + $(window).height())
	});

	$(".phone").mask("+7 (999) 999-99-99");
	$("#name").mask("+7 (999) 999-99-99");
})