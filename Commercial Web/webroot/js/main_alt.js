(function ($) {
    "use strict";

  /*===================
    Navigation
    ===================*/

    var leftPos, newWidth, isNavClicked = false,
        $mainNav_animate = $(".navbar-nav");

    $mainNav_animate.append("<li id='XV-lamp'></li>");
    var $animation_tool = $("#XV-lamp");

    $animation_tool
        .width($(".active").width())
        .css("left", $(".active").position().left)
        .data("origLeft", $(".active").position().left)
        .data("origWidth", $animation_tool.width());

    function xv_lava($el, speed) {
        leftPos = $el.position().left;
        newWidth = $el.width();
        $animation_tool.stop().animate({
            left: leftPos,
            width: newWidth,
        }, speed);
    }

    $(".navbar-nav a[href^='#']").click(function () {
        isNavClicked = true;
        $('.navbar-nav li').removeClass('active');
        $(this).parent().addClass('active');
        xv_lava($(this).parent(), 1000);
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 30
        }, 1500, function () {
            isNavClicked = false;
        });
        return false;
    });

    $(window).scroll(function () {
        if (!isNavClicked) {
            xv_lava($(".navbar-nav li.active"), 800);
        }
        if ($(window).scrollTop() >= 100) {


            if (!$("#sticktop").hasClass('slideInDown')) {
                $("#sticktop").addClass('animated slideInDown nav-shadow').removeClass('stickyNav');
            }
        } else if ($(window).scrollTop() <= 1) {
            if ($("#sticktop").hasClass('slideInDown')) {
                $("#sticktop").removeClass('animated slideInDown nav-shadow').addClass('stickyNav');
            }
        }

    });

    $('.navbar-nav li').hover(
        function () {
            if (!$(this).parent().hasClass('dropdown-menu')) {
                xv_lava($(this), 400);
            }
        }, function () {
            xv_lava($(".navbar-nav li.active"), 400);
        });


    $('ul.nav li.dropdown').click(
        function () {

            var state = $(this).data('toggleState');
            if (state) {
                $(this).children('ul.dropdown-menu').slideUp();
            } else {
                $(this).children('ul.dropdown-menu').slideDown();
            }
            $(this).data('toggleState', !state);
        });


    /*===================
    Sticky
    ===================*/
    $(window).on("resize", function () {
        xv_lava($(".navbar-nav li.active"), 100);
        $("#sticktop").sticky({
            topSpacing: 0
        });
    }).resize();

    /*==================
        BxSlider
    ====================*/

    $(document).ready(function(){
        $('.bxslider').bxSlider({
            mode: 'vertical',
        });
    });

})(jQuery);