$(document).ready(function() {

    'use strict';

    function preloader() {
        $('body').addClass('loaded_hiding');
        setTimeout(function() {
            $('body').addClass('loaded');
            $('body').removeClass('loaded_hiding');
        }, 500);
    }

    function homepageResize() {

        var windowWidth = $(window).width(),
            windowHeight = $(window).height();

        if (windowWidth > windowHeight) {

            $('.home__presentation').css({
                width: '50%',
                height: '100%'
            });

        } else {

            $('.home__presentation , .home__menu, .title, .information').css({
                width: '100%',
                height: '50%'
            });

        }

    }

    function scrollbarChange() {
        if ($('.home').is(':visible')) {
            $('body').css('overflow-y', 'hidden');
        } else {
            $('body').css('overflow-y', 'scroll');
        }
    }

    $(window).on('load', preloader);

    $(window).on('load resize', homepageResize);

    $(window).on('load', scrollbarChange);


    $('.home__menu > div').on('click', function() {

        var presentationWidth = $('.home__presentation').width(),
            menuWidth = $('.home__menu').width();
        $('.home__presentation').animate({
            left: '-' + presentationWidth
        }, 1000, 'easeInQuad');
        $('.home__menu').animate({
            left: menuWidth
        }, 1000, 'easeInQuad', function() {
            $('.home').css({
                display: 'none'
            });
            scrollbarChange();

        });
    });

    $('.home__menu div.portfolio__button').on('click', function() {
        $('.portfolio').fadeIn(1200);
    });
    $('.home__menu div.catalog__button').on('click', function() {
        $('.catalog').fadeIn(1200);
    });
    $('.home__menu div.about__button').on('click', function() {
        $('.about').fadeIn(1200);
    });
    $('.home__menu div.contacts__button').on('click', function() {
        $('.contacts').fadeIn(1200);
    });
    $('.close__button').on('click', function() {
        $('body').css('overflow-y', 'hidden');
        $('.home').css({
            display: 'block'
        });
        $('.home__presentation, .home__menu').animate({
            left: 0
        }, 1000, 'easeOutCubic');
        $('.portfolio, .catalog, .about').fadeOut(800);
    });

    $('.filter').on('click', function() {
        $('.filter').removeClass('active');
        $(this).addClass('active');
    });

    $('[data-filter]').on('click', function(e) {
        var category = $(this).data('filter');

        if (category == 'all') {
            $('[data-category]').removeClass('hidden');
        } else {
            $('[data-category]').each(function() {
                var workCategory = $(this).data('category');

                if (workCategory != category) {
                    $(this).addClass('hidden');
                } else {
                    $(this).removeClass('hidden');
                };

            });
        };
        e.preventDefault();
    });

    $('.item__name').on('click', function() {
        if ($(this).hasClass('item__active')) {
            $(this).removeClass('item__active');
            $(this).next().slideUp(300);
        } else {
            $(this).addClass('item__active');
            $(this).next().slideToggle(300);
        };
    });


});