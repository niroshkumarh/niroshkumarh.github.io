jQuery(document).on('ready', function ($) {
    "use strict";

    /*--------------------------
        SCROLLSPY ACTIVE
    ---------------------------*/
    $('body').scrollspy({
        target: '.bs-example-js-navbar-scrollspy',
        offset: 50
    });


    /*--------------------------
        STICKY MAINMENU
    ---------------------------*/
    $("#mainmenu-area").sticky({
        topSpacing: 0
    });


    /*-----------------------------
        SLIDER ACTIVE
    ------------------------------*/
    var mySlider = $('.pogoSlider').pogoSlider({
        pauseOnHover: false
    }).data('plugin_pogoSlider');


    /*---------------------------
        SMOOTH SCROLL
    -----------------------------*/
    $('ul#nav li a[href^="#"],a.navbar-brand,.slider-area h3 a,a.scrolltotop').on('click', function (event) {
        var id = $(this).attr("href");
        var offset = 40;
        var target = $(id).offset().top - offset;
        $('html, body').animate({
            scrollTop: target
        }, 1500, "easeInOutExpo");
        event.preventDefault();
    });


    /*----------------------------
        SCROLL TO TOP
    ------------------------------*/
    $(window).scroll(function () {
        var totalHeight = $(window).scrollTop();
        if (totalHeight > 300) {
            $(".scrolltotop").fadeIn();
        } else {
            $(".scrolltotop").fadeOut();
        }
    });


    /*---------------------------
        SCREENSHOT SLIDER
    -----------------------------*/
    $('.videos_catagory').owlCarousel({
        merge: true,
        video: true,
        items: 1,
        smartSpeed: 1000,
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplay: false,
        autoplayTimeout: 2000,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    /*----------------------------
        TAB PANEL ACTIVE
    ------------------------------*/
    $('.panel').on('click', function (e) {
        $('.panel').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        e.preventDefault();
    });

}(jQuery));


jQuery(window).load(function () {
    "use strict";
    /*--------------------------
        PRE LOADER
    ----------------------------*/
    $(".preeloader").fadeOut(1000);
});