$(function () {
    scroll_waves();
    open_video();
    // garda_Paralax();
    open_mob_menu();
    open_input();
    seach_mobile();
    map_Paralax();
    show_map();
    show_color();
    lp_highestBox();
    open_before();
    tabs_menu();
    tabs_quest();
    date_pick();
styler_input();

});


function styler_input() {

    $('input, select').styler();

};

function open_before() {

    $('.menu__links .city').on('click', function () {
        $('.menu-mobile-hover').toggleClass('st_open');
        $('.city').toggleClass('st_bef');
        $('.menu-mobile-services').removeClass('st_open');
        $('.services').removeClass('st_bef');
        $('.menu-mobile-classes').removeClass('st_open');
        $('.classes').removeClass('st_bef');

    });
    $('.menu__links a').on('click', function () {
        $('.menu-mobile-hover').removeClass('st_open');
        $('.city').removeClass('st_bef');
        $('.menu-mobile-services').removeClass('st_open');
        $('.services').removeClass('st_bef');
        $('.menu-mobile-classes').removeClass('st_open');
        $('.classes').removeClass('st_bef');
    });


    $('.menu__links .services').on('click', function () {
        $('.menu-mobile-services').toggleClass('st_open');
        $('.services').toggleClass('st_bef');
        $('.menu-mobile-hover').removeClass('st_open');
        $('.city').removeClass('st_bef');
        $('.menu-mobile-classes').removeClass('st_open');
        $('.classes').removeClass('st_bef');
    });
    $('.menu__links .classes').on('click', function () {
        $('.menu-mobile-classes').toggleClass('st_open');
        $('.classes').toggleClass('st_bef');
        $('.menu-mobile-services').removeClass('st_open');
        $('.services').removeClass('st_bef');
        $('.menu-mobile-hover').removeClass('st_open');
        $('.city').removeClass('st_bef');
    });
}



function show_map() {
    $('.main-info h2').addClass('show');
}

function show_color() {
    $('.blue-block').addClass('show');
    if ($(window).width() < 1024) {
        $('.blue-block').removeClass('show');
    }
}

function scroll_waves() {
    if ($(window).width() > 1024) {
        $(window).scroll(function () {

            var scrolled = $(this).scrollTop();
            if (scrolled > 100 && scrolled < 400) {
                var vr = scrolled - 100;
                vr = (vr / 3);
                $('.section-information').css({"margin-top": "-" + ((vr * 1.75) + 230) + "px"});
                $(window).trigger('resize');
            }
            if (scrolled > 400) {
                $('.section-information').css({"margin-top": "-410px"});
                $(window).trigger('resize');
            }
            if (scrolled < 100) {
                $('.section-information').css({"margin-top": "-230px"});
                $(window).trigger('resize');
            }
        });
    }
    ;
}


function open_mob_menu() {

    $('.menu__icon').on('click', function () {
        $('.menu__icon').toggleClass('menu_state_open');
        $('.menu-submenu').toggleClass('state_open');
        $('.form-group .js-button').toggleClass('state_top');
        $('.default').toggleClass('js_but');



        $('.logo-mobile').toggleClass('state_logo');
        $('.search').toggleClass('state_form');
        $('.seach-mobile').removeClass('search-open');

    });
}


function open_input() {

    $('.default-button').on('click', function () {
        $('.form-group').addClass('open-form-laptop');
        $('.default-button').css('display', 'none');
        $('.js-button').focus();
    })
    // $("button").click(function () {
    // })
    $('.js-button').blur(function (r) {
            if (r.relatedTarget!= null && $(r.relatedTarget).hasClass('default') ) {
                $('.form-group').submit();
            }
            else{
                $('.form-group').removeClass('open-form-laptop');
                $('.default-button').css('display', 'block');
            }
        }
    )
};

function seach_mobile() {

    $('.default-mobile').on('click', function () {
        $('.seach-mobile').toggleClass('search-open');
    });
}

function lp_highestBox() {
    if ($(window).width() > 991) {

        $('.container').each(function () {
            var highestBox = 0;
            $('.lapt', this).each(function () {
                if ($(this).height() > highestBox) {
                    highestBox = $(this).height();
                }
            });
            $('.lapt', this).height(highestBox);
        });
    }
};


// function garda_Paralax() {
//     var scene = document.getElementById('scene');
//     var parallaxInstance = new Parallax(scene);
//
// // $('.paralax-viewport .parall').parallax({
//         // xorigin: 0.51,
//         // yorigin: 0.35,
//         // decay: 0.3,
//         // xparallax: 0.3,
//         // yparallax: 0.3
//     // });
// };

function map_Paralax() {
    $('.section-map').parallax_1({imageSrc: '/img/index/block6/backg2.png'});

}


function open_video() {
    $(window).scroll(function () {
        var scrolled = $(this).scrollTop();
        $('.play-but').click(
            function () {
                $('.backg-pict').addClass('close-backg');
                $('.back-green').addClass('close-green');
                $('.video-play').addClass('open-video');
                $('.video-play').toggleClass('video-heigth');
            });
        if (scrolled > 1200) {
            $('.backg-pict').removeClass('close-backg');
            $('.back-green').removeClass('close-green');
            $('.video-play').removeClass('open-video');
            $('.video-play').removeClass('video-heigth');
            $('.video-play iframe').each(function () {
                var el_src = $(this).attr("src");
                $(this).attr("src", el_src);
            });
        }
    })
};


// function tabs_menu() {
//     $('.tabs_menu a').click(function(e) {
//         e.preventDefault();
//         $('.tabs_menu .active').removeClass('active');
//         $(this).addClass('active');
//         var tab = $(this).attr('href');
//         $('.tab').not(tab).css({'display':'none'});
//         $(tab).fadeIn(400);
//     });
// };



function tabs_menu() {
//     $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
//         $(this)
//             .addClass('active').siblings().removeClass('active')
//             .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
//     });
//
// });
};

(function($) {
    $(function() {

        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);


function tabs_quest() {
    //прикрепляем клик по заголовкам acc-head
    $('.tabs_menu_rigth .acc-head').on('click', function(e){
        e.preventDefault();
        $('.tabs_menu_rigth .tab-quest').not($(this).next()).slideUp(500);
        $(this).next().slideToggle(1000);
    });
};

// function f_acc(){
// //скрываем все кроме того, что должны открыть
//     $('.tabs_menu_rigth .tab-quest').not($(this).next()).slideUp(1000);
// // открываем или скрываем блок под заголовком, по которому кликнули
//     $(this).next().slideToggle(2000);
// }

// function tabs_quest() {
//     $('.tabs_menu_rigth li').click(function () {
//         $('.tab-quest').toggleClass('active-tabs');
//     });
// };

// function date_pick() {
//     var $j = jQuery.noConflict();
//     $j("#datepicker").datepicker();
// };


function date_pick() {
    $("#datepicker").datepicker({
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель',
            'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
            'Октябрь', 'Ноябрь', 'Декабрь'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        firstDay: 1,
    });
    $("#datepicker2").datepicker({
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель',
            'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
            'Октябрь', 'Ноябрь', 'Декабрь'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        firstDay: 1,
    });
};