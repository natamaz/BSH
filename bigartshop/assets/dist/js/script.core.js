;(function($){

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
