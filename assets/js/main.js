(function ($) {
"use strict";
    /*---------------------------------
        Preloader JS
    -----------------------------------*/ 
    var prealoaderOption = $(window);
    prealoaderOption.on("load", function () {
        var preloader = jQuery('.spinner');
        var preloaderArea = jQuery('#preloader');
        preloader.fadeOut();
        preloaderArea.delay(350).fadeOut('slow');
    });
    /*---------------------- 
        Scroll top js
    ------------------------*/
    $(window).on('scroll', function() {
      if ($(this).scrollTop() > 100) {
          $('#scroll_up').fadeIn();
      } else {
          $('#scroll_up').fadeOut();
      }
    });
    $('#scroll_up').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    /*---------------------------------  
        mobilemenu JS
    -----------------------------------*/
    $('.main-menu nav').meanmenu({
      meanMenuContainer: '.mobile_menu',
      meanScreenWidth: "991"
    });
    /*---------------------------------  
        Slick slider JS
    -----------------------------------*/
    // mainSlider
    function mainSlider() {
      var BasicSlider = $('.homepage-slider');
      BasicSlider.on('init', function (e, slick) {
        var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
      });
      BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
      });
      BasicSlider.slick({
        autoplay: true,
        autoplaySpeed: 10000,
        infinite: true,
        arrows: true,
        fade: true,
        dots: false,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1
      });
      function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function () {
          var $this = $(this);
          var $animationDelay = $this.data('delay');
          var $animationType = 'animated ' + $this.data('animation');
          $this.css({
            'animation-delay': $animationDelay,
            '-webkit-animation-delay': $animationDelay
          });
          $this.addClass($animationType).one(animationEndEvents, function () {
            $this.removeClass($animationType);
          });
        });
      }
    }
    mainSlider();
    $('.event-slider').slick({
        infinite: true,
        arrows: true,
        autoplay: true,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
    $('.testimonial-carousel').slick({
        infinite: true,
        arrows: true,
        autoplay: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.testimonial-carousel-2').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.brand-slide-1').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
    $('.brand-slide-2').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
    /* magnificPopup img view */
    $('.gallery-img-popup, .view').magnificPopup({
    	type: 'image',
    	gallery: {
    	  enabled: true
    	}
    });
    /*----------------------
        Counter js
    ------------------------*/
    $('.counter').counterUp({
        delay: 50,
        time: 2000
    });
    /*---------------------------------  
        mmagnific pop-up js
    -----------------------------------*/
    $('.video-icon').magnificPopup({
    	type: 'iframe'
    });

    /*---------------------------------  
        Isotope js
    -----------------------------------*/
    $('#gallary').imagesLoaded( function() {
        var $grid = $('.gallery-grid').isotope({
            itemSelector: '.grid-item',
            layoutMode: 'fitRows'
        })
        $('.filter-button').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({filter: filterValue});
        });
        $('.filter-button').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'button', function () {
                $buttonGroup.find('.active_btn').removeClass('active_btn');
                $(this).addClass('active_btn');
            });
        });
    });
    $('#blog_grid').imagesLoaded( function() {
        var $grid = $('.masonry_grid').isotope({
            itemSelector: '.grid_item',
            percentPosition: true,
            masonry: {
              columnWidth: 1
            }
        });
    });

    /*---------------------------------  
        WOW js
    -----------------------------------*/
    new WOW().init();


})(window.jQuery); 