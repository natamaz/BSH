
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


