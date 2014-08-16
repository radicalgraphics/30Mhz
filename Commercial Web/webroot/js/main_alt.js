(function ($) {
    "use strict";

    /*	Table OF Contents
	==========================
	
	1-Navigation
	2-Sticky
	3-sliders
	4-Blog layout
	5-Contact
	6-Portfolio Filtring/Popup
	7-Animations
	8-Statistics Handling (Records)
	9-Google Maps
  /*===================
    1-Navigation
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
    2-Sticky
    ===================*/
    $(window).on("resize", function () {
        xv_lava($(".navbar-nav li.active"), 100);
        $("#sticktop").sticky({
            topSpacing: 0
        });
    }).resize();

    /*===================
    3- sliders
    ===================*/

   

    /*================================
	9-Google Maps
	================================*/

    if ($('#contact-map').length) {
        var contact_map = 'contact-map',
            mapAddress = $('#contact-map').data('address'),
            mapType = $('#contact-map').data('maptype'),
            zoomLvl = $('#contact-map').data('zoomlvl');
        contactemaps(contact_map, mapAddress, mapType, zoomLvl);

    }

    function contactemaps(selector, address, type, zoom_lvl) {
        var map = new google.maps.Map(document.getElementById(selector), {
            mapTypeId: google.maps.MapTypeId.type,
            scrollwheel: false,
            draggable: true,
            zoom: zoom_lvl,
        });
        var map_pin = "images/ballon.png";
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
                'address': address
            },
            function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    new google.maps.Marker({
                        position: results[0].geometry.location,
                        map: map,
                        icon: map_pin
                    });
                    map.setCenter(results[0].geometry.location);



                }
            });
    }



})(jQuery);