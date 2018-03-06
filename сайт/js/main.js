$(function () {
    scroll_waves();
    open_video();
    garda_Paralax();
    open_mob_menu();
    open_input();
    seach_mobile();
    map_Paralax();
    // laptop_highestBox();
    // mob_highestBox();
    show_map();
    show_color();
    lp_highestBox();
    open_before();
    open_search();

})
function open_before() {

    $('.menu__links .city').on('click', function () {
        $('.menu-mobile-hover').toggleClass('st_open');
        $('.city').toggleClass('st_bef');
    });
    $('.menu__links .services').on('click', function () {
        $('.menu-mobile-services').toggleClass('st_open');
        $('.services').toggleClass('st_bef');
    });
    $('.menu__links .classes').on('click', function () {
        $('.menu-mobile-classes').toggleClass('st_open');
        $('.classes').toggleClass('st_bef');
    });
}


// $('.menu-submenu').toggleClass('state_open');
//
// function open_mobile_menu() {
//     if (!$('.state_open').hasClass('open')) {
//         $('.state_open').addClass('open');
//         $('.state_open').stop().animate({'left': 0}, 600);
//     } else {
//         $('.state_open').removeClass('open').stop().animate({'left': '-1140px'}, 500);
//     }
// }


function show_map() {
    $('.main-info h2').addClass('show');
}

function show_color() {
    $('.blue-block').addClass('show');
    if ($(window).width() < 1024) {
        $('.blue-block').removeClass('show');
    }
}

//
function scroll_waves() {
    if ($(window).width() > 1024) {
        $(window).scroll(function () {

            var scrolled = $(this).scrollTop();
            // console.log("scrollTop " + scrolled);
            if (scrolled > 100 && scrolled < 400) {
                var vr = scrolled - 100;
                vr = (vr / 3);
                $('.section-information').css({"margin-top": "-" + ((vr * 1.7) + 230) + "px"});
                $(window).trigger('resize');
            }
            if (scrolled > 400) {
                $('.section-information').css({"margin-top": "-400px"});
                $(window).trigger('resize');
            }
            if (scrolled < 100) {
                $('.section-information').css({"margin-top": "-230px"});
                $(window).trigger('resize');
            }
        });
    };
}


function open_mob_menu() {

    $('.menu__icon').on('click', function () {
        // $('.menu__icon').toggleClass('menu_state_open');
        $('.menu__icon').toggleClass('menu_state_open');
        $('.menu-submenu').toggleClass('state_open');
        $('.logo-mobile').toggleClass('state_logo');
        $('.search').toggleClass('state_form');
        $('.search-open').css('display','none');

    });
}

// function open_input() {
//
//     $('.default-button').on('click', function() {
//     	$('.form-group').toggleClass('open-form-laptop');
//
//         $("input[type=text]").focus(function() {
// $('.default-button').css('display','none');
//     	})
//
//         // if (!$("input[type=text]" ).is(":focus")){
//
//
//         $("input[type=text]")|| $("button").blur(function() {
// $('.default-button').css('display','block');
// $('.form-group').removeClass('open-form-laptop');
//     	})
//
//
//
//
//
//
// //     	    	$('.default-button').css('display','none');
// //     	    	$( "input[type=text] " ).blur(function() {
// // $('.default-button').css('display','block');
// // })
//     	     });
//   }


function open_input() {

    $('.default-button').on('click', function () {
        $('.form-group').toggleClass('open-form-laptop');
        // $('.default-button').css('display', 'block');


        $('.form-control').focus(function () {
            $('.default-button').css('display', 'none');
        })

        // if (!$("input[type=text]" ).is(":focus")){


        // $("input[type=text]").blur(function () {
        $('.form-control').blur(function () {
            $('.form-group').removeClass('open-form-laptop');
            // $('.default-button').css('display', 'block');
            if(  ! $('.form-group').hasClass('open-form-laptop')){
                $('.default-button').css('display', 'block');}
        });
        })
        // $('.default-button').css('display', 'block');

}





function open_search() {
    $('.default-mobile').on('click', function () {
        $("input[type=text]") && $("button[type=submit]").focus(function () {
        })
            $("input[type=text]").blur(function () {
                $('.seach-mobile').removeClass('search-open');
            })
    });
}














function seach_mobile() {

    $('.default-mobile').on('click', function () {
        $('.seach-mobile').toggleClass('search-open');
    });
}

//
// function laptop_highestBox() {
//     if ($(window).width() > 1024) {
//         $('.container').each(function () {
//             var highestBox = 0;
//             $('.row-flex ', this).each(function () {
//                 if ($(this).height() > highestBox) {
//                     highestBox = $(this).height();
//                 }
//             });
//             $('.row-flex ', this).height(highestBox);
//         });
//     }
// };
//
// function mob_highestBox() {
//     if ($(window).width() > 1024) {
//         $('.container').each(function () {
//             var highestBox = 0;
//             $('.container-fluid ', this).each(function () {
//                 if ($(this).height() > highestBox) {
//                     highestBox = $(this).height();
//                 }
//             });
//             $('.container-fluid ', this).height(highestBox);
//         });
//     }
// };

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


function garda_Paralax() {
    $('.paralax-viewport .parall').parallax({
        xorigin: 0.51,
        yorigin: 0.35,
        decay: 0.3,
        xparallax: 0.3,
        yparallax: 0.3
    });
};

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
            });

        if (scrolled > 2000) {
            $('.backg-pict').removeClass('close-backg');
            $('.back-green').removeClass('close-green');
            $('.video-play').removeClass('open-video');
        }
    })
};


