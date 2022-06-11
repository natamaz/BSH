
// script.plugins

$(document).ready(function(){

    if($('.phone').length){
      $('.phone').mask('+7 (000) 000 00 00', {placeholder: "+7 (___) ___ __ __"});
    }

    if($('.carousel_main').length){
      $('.carousel_main').owlCarousel({
          loop:true,
          nav:true,
          navText:["",""],
          items:1,
          responsiveClass:true,
      });
    }
    if($('.carousel_news').length){
      $('.carousel_news').owlCarousel({
          loop:true,
          nav:true,
          navText:["",""],
          items:3,
          responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                769:{
                    items:2,
                    nav:true
                },
                1201:{
                    items:3,
                    nav:true,
                    loop:false,
                }
            }
      });
    }
    if($('.carousel_paintings').length){
      $('.carousel_paintings').owlCarousel({
          loop:true,
          nav:true,
          navText:["",""],
          items:2,
          center:true,
          margin: 0,
          responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true,
                    center:false,
                },
                500:{
                    items:2,
                    nav:true,
                    center:true,
                }
            }
      });
    }
    if($('.owl_carousel_item').length){
      $('.owl_carousel_item').owlCarousel({
          loop:true,
          nav:true,
          navText:["",""],
          items:4,
          margin: 0,
          responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true,
                },
                769:{
                    items:2,
                    nav:true,
                },
                993:{
                    items:3,
                    nav:true,
                },
                1201:{
                    items:4,
                    nav:true,
                }
            }
      });
    }
    if($('#horizontal_tab').length){
      $('#horizontal_tab').easyResponsiveTabs({
          type: 'default', //Types: default, vertical, accordion
          width: 'auto', //auto or any width like 600px
          fit: true, // 100% fit in a container
          tabidentify: 'hor_1', // The tab groups identifier
          activate: function(event) { // Callback function if tab is switched
              var $tab = $(this);
              var $info = $('#nested-tabInfo');
              var $name = $('span', $info);
              $name.text($tab.text());
              $info.show();
          }
      });
    }
    if($('#horizontal_tab2').length){
      $('#horizontal_tab2').easyResponsiveTabs({
          type: 'default', //Types: default, vertical, accordion
          width: 'auto', //auto or any width like 600px
          fit: true, // 100% fit in a container
          tabidentify: 'hor_1', // The tab groups identifier
          activate: function(event) { // Callback function if tab is switched
              var $tab = $(this);
              var $info = $('#nested-tabInfo');
              var $name = $('span', $info);
              $name.text($tab.text());
              $info.show();
          }
      });
    }
    if($(".chosen-select").length){
	    $(".chosen-select").chosen({
	     	// rtl: true,
        width: "100%",
        // disable_search_threshold: 10
	    });
	  }


  if($('.validateform_checkout').length){

    $(".validateform_checkout").validate({
           rules:{

                name:{
                    required: true,
                },
                email:{
                    required: true,
                    email: true
                },
                phone:{
                    required: true,
                },
                region:{
                    required: true,
                },
                region_top:{
                    required: true,
                },
                index:{
                    required: true,
                },
           },

           messages:{
                // Это поле обязательно для заполнения
                name:{
                    required: "Error.....",
                },
                email:{
                    required: "Error.....",
                    email: "Error.....",
                },
                phone:{
                    required: "Error.....",
                },
                region:{
                    required: "Error.....",
                },
                region_top:{
                    required: "Error.....",
                },
                index:{
                    required: "Error.....",
                },
           },

    });
  }


  if($('.validateform_login').length){

    $(".validateform_login").validate({
           rules:{

                name:{
                    required: true,
                },
                surname:{
                    required: true,
                },
                email:{
                    required: true,
                    email: true
                },
                phone:{
                    required: true,
                },
                region:{
                    required: true,
                },
                password:{
                    required: true,
                },
                second_password:{
                    required: true,
                },
           },

           messages:{
                // Это поле обязательно для заполнения
                name:{
                    required: "Error.....",
                },
                surname:{
                    required: "Error.....",
                },
                email:{
                    required: "Error.....",
                    email: "Error.....",
                },
                phone:{
                    required: "Error.....",
                },
                region:{
                    required: "Error.....",
                },
                password:{
                    required: "Error.....",
                },
                second_password:{
                    required: "Error.....",
                },
           },

    });
  }

  if($('.validateform_enter').length){

    $(".validateform_enter").validate({
           rules:{

                email:{
                    required: true,
                    email: true
                },
                password:{
                    required: true,
                },
           },

           messages:{
                // Это поле обязательно для заполнения
                email:{
                    required: "Error.....",
                    email: "Error.....",
                },
                password:{
                    required: "Error.....",
                },
           },

    });
  }

  if($('.validateform_email').length){

    $(".validateform_email").validate({
           rules:{

                email:{
                    required: true,
                    email: true
                },

           },

           messages:{
                // Это поле обязательно для заполнения
                email:{
                    required: "Error.....",
                    email: "Error.....",
                },
           },

    });
  }

  $(".modal_btn").on("click",function(event){

      event.preventDefault();

      var id = $(this).attr("data-modal"),
          src = $(this).attr("data-src");

      $('#'+id).arcticmodal({

          beforeOpen : function(){

              $('#'+id).find("iframe").attr("src", src+"?wmode=transparent");

          }

      });

  });

  if($('.jcf').length){

      $(function() {
          jcf.replaceAll();
      });
  }

  if($('.fancybox').length){

      $('.fancybox').fancybox({
        prevEffect : 'none',
        nextEffect : 'none',
      });

  }
  if($('.tooltip').length){

    if($(window).width() > 767) {

            $('.tooltip').tooltipster({
                theme: 'tooltipster-borderless',
                maxWidth: 290,
                // side: 'bottom',
                // delay: 0,
                contentAsHTML: true,
                interactive: true,
                contentCloning: true,
                // trigger: 'click'
            });

        }
        else {

            $('.tooltip').tooltipster({
                theme: 'tooltipster-borderless',
                maxWidth: 290,
                // side: 'bottom',
                // delay: 0,
                trigger: 'click',
                contentAsHTML: true,
                interactive: true,
                contentCloning: true,
            });

        }


      // $('.tooltip').tooltipster({
      //     theme: 'tooltipster-borderless',
      //     contentCloning: true
      // });

  }

    const targetElement = $('.overlayPopup');
    $('.open-signIn').on("click", function () {
        $('.overlay-signIn').addClass('active');

    });
    $('.overlay-signIn .closeBtn, .overlay-signIn .close').on("click", function () {
        $('.overlay-signIn').removeClass('active');
    });

    const targetElement2 = $('.onclickPopup');
    $('.open-onclick').on("click", function () {
        $('.overlay-onclick').addClass('active');

    });
    $('.overlay-onclick .closeBtn, .overlay-onclick .close').on("click", function () {
        $('.overlay-onclick').removeClass('active');
    });
    const targetElement3 = $('.questionPopup');
    $('.open-question').on("click", function () {
        $('.overlay-question').addClass('active');

    });
    $('.overlay-question .closeBtn, .overlay-question .close').on("click", function () {
        $('.overlay-question').removeClass('active');
    });




});


;;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;

			self.navResp();
			//self.navAnchor();
			self.backToTopBtn();
			self.deferredBtn();
			self.filterRespOpen();
			self.accordion();
			self.fileInput();
			self.editForm();
			self.tableRadioClick();

		},

		windowLoad: function(){

			var self = this;

			self.preloader();
			// self.footerHeight.init();

		},

		/**
		**  Nav Resp
		**/

		deferredBtn : function(){

            var self = this;

            $(".deferred_btn").on('click', function () {

                $(this).toggleClass("active");

            });
            $(".deferred_btn_js").on('click', function () {

                $(this).toggleClass("active");

            });
        },



		/**
		**  Nav Anchor


		navAnchor : function(){

            var self = this;

            $(".btn_anchor").on("click", function (event) {
		    //отменяем стандартную обработку нажатия по ссылке
		    event.preventDefault();

		    //забираем идентификатор бока с атрибута href
		    var id  = $(this).attr('href'),

		    //узнаем высоту от начала страницы до блока на который ссылается якорь
		      top = $(id).offset().top;

		    //анимируем переход на расстояние - top за 1500 мс
		    $('body,html').animate({scrollTop: top}, 800);
		  });

        },**/

		/**
		**  Nav Resp
		**/

		navResp : function(){

            var self = this;

            self.w = $(window);


            $(".btn_nav").on('click', function () {

                $(this).toggleClass("active").next(".header_resp_nav").fadeToggle(10);

            });

           if(self.w.width() < 769){

                $(document).on('click', function(event){

                   if(!$(event.target).closest('.resp_nav_wr').length){

                    $('.btn_nav').removeClass('active').next(".header_resp_nav").fadeOut(10);

                   }

                });

	            $(".header_resp_nav a").on('click', function () {

	                $(".header_resp_nav").fadeToggle(10).prevAll(".btn_nav").removeClass('active');

	            });

            }

        },


		/**
		**	Preloader
		**/

		preloader: function(){

			var self = this;

			self.preloader = $('#page-preloader');
	        self.spinner   = self.preloader.find('.preloader');

		    self.spinner.fadeOut();
		    self.preloader.delay(350).fadeOut('slow');
		},

		/**
        **  Back to top
        **/

        backToTopBtn: function(config){

            config = $.extend({
            	top: 50,
                offset: 350,
                transitionIn: 'bounceInRight',
                transitionOut: 'bounceOutRight'
            }, config);

            var btn = $('.back_to_top'),
            $wd = $(window),
            $html = $('html'),
            $body = $('body');


            $wd.on('scroll.back_to_top', function(){

                if($wd.scrollTop() > config.offset){

                    btn.removeClass('hide '+config.transitionOut).addClass(config.transitionIn);

                }
                else{

                    btn.removeClass(config.transitionIn).addClass(config.transitionOut);

                }

            });

            btn.on('click', function(){

                $html.add($body).animate({

                    scrollTop: 0

                });

            });

        },

		/**
		**	Footer Height
		**/

		footerHeight: {

			init: function(){

				var self = this;

				self.footer = $('#footer');
				self.page = $('.page_wrap');

				self.calculation();

				$(window).on('resize', function(){

					self.calculation();

				});

			},

			calculation : function(){

				var self = this;

			    var footerHeight = self.footer.outerHeight();

			    self.page.css({
			    	'padding-bottom': footerHeight
			    });

			}

		},

		/**
		**  Filter Resp
		**/

		filterRespOpen : function(){

            var self = this;

            $(".filter_resp_btn").on('click', function () {

                $(this).toggleClass("active").parent('.filter_resp_btn_wr').toggleClass("active").prev(".filter_resp_open").slideToggle("medium");

            });
        },

        accordion: function(){

	      $(".set > a").on("click", function(){
	        if($(this).hasClass('active')){
	          $(this).removeClass("active");
	          $(this).siblings('.left_nav_lv2').slideUp(200);
	          //$(".set > a i").removeClass("fa-minus").addClass("fa-plus");
	        }else{
	          //$(".set > a i").removeClass("fa-minus").addClass("fa-plus");
	          //$(this).find("i").removeClass("fa-plus").addClass("fa-minus");
	          $(".set > a").removeClass("active");
	          $(this).addClass("active");
	          $('.left_nav_lv2').slideUp(200);
	          $(this).siblings('.left_nav_lv2').slideDown(200);
	        }
	      });

	    },


		/**
        **  File input
        **/

        fileInput: function(){

            $('.files_btn').on('click', function(){

                var $this = $(this),
                    input = $this.parent().find('input[type="file"]');

                input.trigger('click');

            });

            $('input[type="file"]').on('change',function(){

                var $this = $(this),
                    nameFileBox = $this.parent().find('.name_file'),
                    nameFile = $this.val();

                if(nameFile != ''){

                    nameFileBox.text(nameFile).css('display', 'block');
                    $this.parent().addClass('selected');
                }
                else{

                    nameFileBox.text(nameFile).css('display', 'none');
                    $this.parent().removeClass('selected');

                }

            });

            $('.clear_file').on('click', function(){

                var $this = $(this),
                    nameFileBox = $this.parent().find('.name_file');

                $this.parent().removeClass('selected').find('input').val('');
                nameFileBox.text('').css('display', 'none');

            });

        },

        /**
		**  Edit Form
		**/

		editForm : function(){

            var self = this;

            $(".btn_edit_form").on('click', function () {

                $(this).toggleClass("active").closest(".form_box").toggleClass("active").find(".edit_form").toggleClass("active");

            });
        },

        /**
		**  tableRadioClick
		**/

		tableRadioClick : function(){

			var self = this;

			$(".table_radio_js tr").on('click', function () {

				$(this).find("input[type='radio']").prop('checked', true);

				var src = $(this).find("input[type='radio']").attr('data-id');
				$('.rama').removeClass('active');
                $('.' + src).addClass('active');
				console.log(src);

			});
		},

	}

	$('.radio_rama').on('click', function(){
		$('.card_img').addClass('clik');
	});

	$('.radio_close').on('click', function(){
		$('.card_img').removeClass('clik');
	});
	$(document).ready(function(){

		Core.DOMReady();

	});

	$(window).load(function(){

		Core.windowLoad();

	});


})(jQuery);
! function(i) {
	var o, n;
	i(".title_block").on("click", function() {
		o = i(this).parents(".accordion_item"), n = o.find(".info"),
				o.hasClass("active_block") ? (o.removeClass("active_block"),
						n.slideUp()) : (o.addClass("active_block"), n.stop(!0, !0).slideDown(),
						o.siblings(".active_block").removeClass("active_block").children(
								".info").stop(!0, !0).slideUp())
	})
}(jQuery);






$('.rama-photo').on("click", function () {
	$('.main-photo').addClass('active');

});



rh = $(".rama-height").height()
ra = $(".ram").width()
rch = $(".rama-corner").height()
rcw = $(".rama-corner").width()
$("#my-range").on("change", function () {
	$(".rama-height").css({ "height": rh - $(this).val() });
	$(".ram").css({ "width": ra - $(this).val() });
	$(".rama-corner").css({ 'height': rch - $(this).val() });
	$(".rama-corner").css({ 'width': rcw - $(this).val() });
	$(".main-photo.active").css({ "padding": ra - $(this).val() });
});
