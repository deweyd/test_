'use strict';
/////////heder/////////////////////
$(document).ready(function() {
    $('.menu-trigger').click(function () {
        $('.header-menu').slideToggle();
        // $('.header__menu__box ul').animate({'width': 'toggle'});
    });
    if (window.matchMedia("screen and (max-width:580px)").matches){
        // $(".news-tabs__item").slice(0, 4).show();
        // $(".news-button-more").on("click", function (e) {
        //     e.preventDefault();
        //     $(".news-tabs__item:hidden").slice(0, 4).slideDown();
        //     if ($(".news-tabs__item:hidden").length == 0) {
        //         $(".news-button-more").text("Больше нет новостей").addClass("noContent");
        //     }
        // });
        var x=3;
        // $('.news-tabs__item').slice(0, 3).show();
        // $('.news-button-more').on('click', function (e) {
        //     e.preventDefault();
        //     x = x+5;
        //     $('.news-button-more').slice(0, x).slideDown();
        // });
    };

    // $('.header-menu__item').hover(function(){
    //     $(this).find("ul").fadeIn();
    // });

////////переход по якорю/////////////////////
    $(document).ready(function(){
        $("#menu").on("click","a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });


});
$(window).resize(function() {
    if ($(window).width() > 992) {
        $('.header-menu__ul li').removeAttr('style');
    }
})

$(".menu-trigger").on('click',function(){
    $(this).toggleClass('menu-closed');
});

// $('.express-slider').slick({
//     infinite: true,
//     slidesToShow: 6,
//     slidesToScroll: 1
// });
/////слайдер index.html/////////
// $('.customer-slider').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     prevArrow: $('.left'),
//     nextArrow: $('.right')
//     // autoplay: true
// });

// $('.course-slider').slick({
//     slidesToShow: 7,
//     slidesToScroll: 3,
//     infinite: true,
//     speed: 300,
//     prevArrow: '.express-prev',
//     nextArrow: '.express-next',
//     autoplay: true,
//     autoplaySpeed: 2000,
//     responsive: [
//         {
//             breakpoint: 1800,
//             settings: {
//                 slidesToShow: 6,
//                 slidesToScroll: 3
//             }
//         },
//         {
//             breakpoint: 1600,
//             settings: {
//                 slidesToShow: 5,
//                 slidesToScroll: 3
//             }
//         },
//         {
//             breakpoint: 1320,
//             settings: {
//                 slidesToShow: 4,
//                 slidesToScroll: 3
//             }
//         },
//         {
//             breakpoint: 1050,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1
//             }
//         },
//         {
//             breakpoint: 820,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//
//     ]
// });
$('.video-container__seasons').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    infinite: true,
    speed: 300,
    prevArrow: '.video-container__arrow-left',
    nextArrow: '.video-container__arrow-right',
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1800,
            settings: {
                slidesToShow: 8,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 1320,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 1050,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 820,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }

    ]
});
$('.video-container__play').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    fade: true,
    asNavFor: '.video-container__programs'
});
$('.video-container__programs').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    speed: 300,
    asNavFor: '.video-container__play',
    prevArrow: '.video-container__arrow-left-sl',
    nextArrow: '.video-container__arrow-right-sl',
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1800,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 1320,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 1050,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '60px',
            }
        },
        {
            breakpoint: 475,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,

            }
        },
        {
            breakpoint: 356,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '60px',
            }
        }
    ]
});

///////map/////////////
$('.map-region').on('click', function(){
    $(this).addClass("active");
});

$('.map-box__element').on('click', function(){
    $(this).toggleClass("map-box__element-active")
    $(this).find('.map-box__element-list').toggle('normal');
});


/////поворачивание карты ////////////////
$('.map-box-top__arrow-left img').on('click', function(){
    $('.map-box__card svg').css("float", "left")
});
$('.map-box-top__arrow-right img').on('click', function(){
    $('.map-box__card svg').css("float", "right")
});
////////карта меняется ширина в зависимости от ширины екрана//////////////
$(window).resize(function() {
    if ($(window).width() <= '510'){
        // var widt=($(this).width())*0.15;
        // ($('.map-rect').width())=widt
        var y=$('.map-rect').width();
        var x=($(this).width())*0.14;
        y=x+'px';
        $('.map-rect').css('width', y)

       }
    // else   {
    //     $('#shelf').hide(10)
    // }

});
if ($(window).width() <= '510'){
    // var widt=($(this).width())*0.15;
    // ($('.map-rect').width())=widt
    var y=$('.map-rect').width();
    var x=($(this).width())*0.14;
    y=x+'px';
    $('.map-rect').css('width', y)

}
///////////////////////podcasts добавление слайдера
if ($(window).width() <= '596'){
    $(".podcasts-popular__box").addClass("podcasts-popular-slider")
    $(".podcasts-chronograph__box").addClass("podcasts-chronograph-slider")
    $(".podcasts-politic__box").addClass("podcasts-politic-slider")
    $(".podcasts-situation__box").addClass("podcasts-situation-slider")
    $(".podcasts-school__box").addClass("podcasts-school-slider")

}
$('.podcasts-popular-slider, .podcasts-chronograph-slider, .podcasts-politic-slider, .podcasts-situation-slider, .podcasts-school-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 5000,
    // autoplay: true
    // centerMode: true,
    // centerPadding: '55px',
    // responsive: [
    //     {
    //         breakpoint: 524,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 1,
    //             // centerPadding: '120px',
    //         }
    //     },
    //     {
    //         breakpoint: 358,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             centerMode: true,
    //             centerPadding: '60px',
    //         }
    //     }
    // ]
});


//////////////////////актальные програмы teleprogram.html//////////////////////
(function($) {
    $(function() {
        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this).addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        })
    })
})(jQuery);

(function($) {
    $(function() {
        $('ul.tabs__captions').on('click', 'li:not(.active)', function() {
            $(this).addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        })
    })
})(jQuery)

$(function() {
    $('.right1').click(function(e) {
        var $current = $('.tabs__caption li.active');
        $current.removeClass('active');
        $current.next('.tabs__caption li').addClass('active');
        ////////
        var $current1 = $('.tabs__content.active');
        $current1.removeClass('active');
        $current1.next('.tabs__content').addClass('active');
        ///////
        if (!$current.next('.tabs__caption li').get(0)) {
            $('.tabs__caption li:first-child').addClass('active')


        }
        if (!$current1.next('.tabs.tabs__content').get(0)) {
            $('.tabs.tabs__content:first-child').addClass('active')
            console.log("111111")
        }
    });
    $('.left1').click(function(e) {
        var $current = $('.tabs__caption li.active');
        $current.removeClass('active');
        $current.prev('.tabs__caption li').addClass('active');
        ////////
        var $current1 = $('.tabs__content.active');
        $current1.removeClass('active');
        $current1.prev('.tabs__content').addClass('active');
        ///////
        if (!$current.prev('.tabs__caption li').get(0)) {
            $('.tabs__caption li:last-child').addClass('active')


        }
        if (!$current1.prev('.tabs.tabs__content').get(0)) {
            $('.tabs.tabs__content:last-child').addClass('active')
            console.log("111111")
        }
    });
});
// $(function() {
//     $('.right1').on('click', '.li:not(.active)', function() {
//         console.log('1111')
//         $('.tabs__caption li').addClass('active').siblings().removeClass('active')
//             .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
//     })
// })
////////////////////////////////////////////////////////////////////



////////////////////block player podcasts.html//////////////////////////////
// var button = $('.podcasts-info__svg');
var playerBlock = $('.podcasts-player-min');
var audioPlayer = document.querySelectorAll('audio');
$('.podcasts-box__item').on('click', function (event){
    event.preventDefault();
});
$('.podcasts-box__svg').on('click', function (){
    $('.progress').css({'background':'#49ba35'});
    var parent = $(this).parent().parent();
    var source = parent.find('.podcasts-player-min')[0];
    var player = parent.find('audio')[0];
    var poscastButton = parent.find('.podcasts-box__svg')[0];
    var play = parent.find('.podcasts-player__play')[0];
    var stop = parent.find('.podcasts-player__stop')[0];
    //меняем текст в плеере на текст с кликабельного блока
    var text=$(this).parent().parent().find(".podcasts-box__text h4").text();
    $(this).parent().parent().find('.podcasts-player__text p').text(text);
    //меняем картинку в плеере на картинку с кликабельного блока
    var img=$(this).siblings("img").attr('src');
    $(this).parent().parent().find('.podcasts-player__img img').attr('src',img);

    parent.find(".podcasts-box__text h4").addClass('blink1');

    $(this).attr('data-status');
    audioPlayer.forEach(function (play) {
        play.pause();
    });
    playerBlock.hide();
    $(source).show();
    play.style.display = 'none';
    stop.style.display = 'block';

    play.onclick = function () {
        player.play();
        play.style.display = 'none';
        stop.style.display = 'block';
    };

    stop.onclick = function () {
        console.log(555);
        player.pause();
        stop.style.display = 'none';
        play.style.display = 'block';
    };
    player.ontimeupdate = function progressUpdate() {
        // Устанавливаем позицию воспроизведения
        var positionBar = parent.find(".progress")[0];
        positionBar.style.width = (this.currentTime / this.duration * 100) + "%";
        //
        //кнопка 15 мин вперед/////////
        var options1 = parent.find('source');
        var next1 = parent.find(".podcasts-player__next-back");
        next1.on('click',function (){
            // Устанавливаем позицию воспроизведения
            var positionBar = parent.find(".progress")[0];
            var n=$(positionBar).css("width")
            console.log(n)
        });



        // var pin = parent.find(".pin")[0];
        // pin.style.right = -(this.currentTime / this.duration) + "%";

        // Заполняем текстовую надпись текущим значением
        var displayStatus = parent.find(".current-time")[0];
        // var time=this.currentTime;
        var s = parseInt(this.currentTime % 60);
        var m = parseInt((this.currentTime / 60) % 60);
        s = (s >= 10) ? s : "0" + s;
        m = (m >= 10) ? m : m;
        displayStatus.innerHTML = m + '.' + s ;
        // displayStatus.innerHTML = (Math.round(this.currentTime) / 100);

        //все времья воспроизведения
        var displayStatus1 = parent.find(".total-time")[0];
        var sec = parseInt(this.duration % 60);
        var min = parseInt((this.duration / 60) % 60);
        sec = (sec >= 10) ? sec : "0" + sec;
        min = (min >= 10) ? min : min;
        displayStatus1.innerHTML = min + ':' + sec;

        //проверка закончился ли трек(если да, то автоматом включается следующий трек)
        if(this.currentTime===this.duration){
            audio_count++;
            if (audio_count > options.length-1){
                audio_count = 0
            }
            $(player).attr('src',options[audio_count].getAttribute('data-src'));
            player.play();
        }

    };

    $('.pin').mouseup(function(e){

        // var displayStatus = parent.find(".current-time")[0];
        // // var time=this.currentTime;
        // var s = parseInt(this.currentTime % 60);
        // var m = parseInt((this.currentTime / 60) % 60);
        // s = (s >= 10) ? s : "0" + s;
        // m = (m >= 10) ? m : m;
        // displayStatus.innerHTML = m + '.' + s ;
    });
    //кнопка 15 мин вперед/////////
    var options1 = parent.find('source');
    var next1 = parent.find(".podcasts-player__next-back");
    next1.on('click',function (){
        // var positionBar = parent.find(".progress")[0];
        // positionBar.style.width = ((this.currentTime / this.duration * 101) + "%")-0.15+"%";
        // console.log(positionBar.style.width)
        // // // Устанавливаем позицию воспроизведения
        // // var positionBar = parent.find(".progress")[0];
        // // positionBar.style.width = (this.currentTime / this.duration * 100) + "%";
    })

    //кнопка next (перелистование треков вперед)
    var options = parent.find('source');
    var next = parent.find(".podcasts-player__next");
    var audio_count = 0;
    $(player).attr('src',options[audio_count].getAttribute('data-src'));
    player.play();
    next.on('click',function () {
        audio_count++;
        if (audio_count > options.length-1){
            audio_count = 0
        }
        $(player).attr('src',options[audio_count].getAttribute('data-src'))
        player.play();
        play.style.display = 'none';
        stop.style.display = 'block';
    });

    var prewius = parent.find(".podcasts-player__prev");
    prewius.on('click',function () {
        audio_count--;
        if (audio_count < 0){
            audio_count = options.length-1
        }
        $(player).attr('src',options[audio_count].getAttribute('data-src'))
        player.play();
        play.style.display = 'none';
        stop.style.display = 'block';
    });
    //кнопка закрыть плеер
    var close = $(".podcasts-player__close");
    var player_block = $(".podcasts-player-min");
    close.on('click', function () {
        player_block.css("display", "none");
        player.pause();
        parent.find(".podcasts-box__text h4").removeClass('blink1');
        $('.progress').css({'background':'none'});
    });

});

///////////////////поява плеера при скроле вниз////////////////
// $(document).on("scroll", window, function () {
//     if ($(window).scrollTop()>500)
//     {
//         $(".podcasts-player-hidden").show();
//
//     }
//     else
//     {
//         $(".podcasts-player-hidden").hide();
//
//     }
// });

/////////podcasts//////////////
// $(function() {
//     $('.podcasts-block--bgc').each(function() {
//
//         $(this).width($(window).width() - $(this).offset().left);
//     });
// });
/////////////////////
$('.link-slider-look').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    speed: 300,
    prevArrow: '.right-news',
    nextArrow: '.left-news',
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1800,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 1320,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 1050,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 820,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: "unslick"
        }

    ]
});

///////////////title получение текста//////////////////////////
$(".link-box__title p").mouseover(function () {
    var text = $(this).html();
    $(this).closest(".link-box__title").attr("data-tippy-content", text);

    tippy('.link-box__title', {
        theme: 'light',
        content: text,
        interactive: true,
        arrow: true,
        arrowType: 'round', // or 'sharp' (default)
        animation: 'fade',
    })
});
//////////////////вставка блоока/////////////
if ($(window).width() < 768){
    $(".news-box__insert").html($(".news-box__aside"));
    $(".news-box__aside").hide;
}

/////////////////больше меньше новостей ????????////////////////////////////
$(document).ready(function(){
    if (window.matchMedia("screen and (min-width:596px)").matches){
        $(".news-tabs__item").slice(0, 10).show();
        $(".news-button-more").on("click", function (e) {
                e.preventDefault();
                $(".news-tabs__item:hidden").slice(0, 4).slideDown();
                if ($(".news-tabs__item:hidden").length == 0) {
                    $(".news-button-more").text("Больше нет новостей").addClass("noContent");
                }
            });
        //////////////кнопка polls.html////////////
        $('.news-box__arrow').on('click', function(){
            $(this).parent().toggleClass("news-box__arrow-active")
        });
        ///////////////////////////////////////////
    }
    else{
        $('.news-box__info--column .active').on('click', function(){
            $(this).find('.news-box__poll-item').toggleClass("news-box__arrow-active")
        });
    }

})
///////кнопка показать текста больше////////
// $('.link-box__info button').click(function() {
//     $('.link-box__text').removeClass('hide');
//     return false;
// });
// $(".search__input").on("focus", function () {
//     $(this).addClass("search__active")
// });
$('.search__input').focusin(function () {
    $(this).addClass('search__active');
});

// Remove the "hover" class when lost focus
$('.search__input').focusout(function () {
    $(this).removeClass('search__active');
});
/////слайдер продукция index.html/////////
$('.link-slider').slick({
    infinite: true,
    dots: false,
    arrows: true,
    prevArrow: $('.right'),
    nextArrow: $('.left'),
    slidesToShow: 7,


    // autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    // centerMode: true,
    // slidesPerRow: 4,
    // cssEase: 'linear',
    // variableWidth: true,
    responsive: [
        {
            breakpoint: 1320,
            settings: {
                slidesToShow: 5,
                variableWidth: false

            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                variableWidth: false,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                variableWidth: false,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                variableWidth: false,
                slidesToScroll: 1
            }
        }
    ]
});
$('.link-slider1').slick({
    infinite: true,
    dots: false,
    arrows: true,
    prevArrow: $('.left1'),
    nextArrow: $('.right1'),
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    // centerMode: true,
    // slidesPerRow: 4,
    // cssEase: 'linear',
    // variableWidth: true,
    responsive: [
        {
            breakpoint: 1320,
            settings: {
                slidesToShow: 2,
                variableWidth: false

            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                variableWidth: false,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 995,
            settings: {
                slidesToShow: 3,
                variableWidth: false,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                variableWidth: false,
                slidesToScroll: 1
            }
        }
    ]
});
$('.link-slider2').slick({
    infinite: true,
    dots: false,
    arrows: true,
    prevArrow: $('.left2'),
    nextArrow: $('.right2'),
    slidesToShow: 3,
    // autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    // centerMode: true,
    // slidesPerRow: 4,
    // cssEase: 'linear',
    // variableWidth: true,
    responsive: [
        {
            breakpoint: 1320,
            settings: {
                slidesToShow: 2,
                variableWidth: false

            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                variableWidth: false,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 995,
            settings: {
                slidesToShow: 3,
                variableWidth: false,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                variableWidth: false,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: "unslick"
        }
    ]
});
$('.link-slider-news').slick({
    infinite: true,
    dots: false,
    arrows: true,
    prevArrow: $('.right-news'),
    nextArrow: $('.left-news'),
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    // centerMode: true,
    // slidesPerRow: 4,
    // cssEase: 'linear',
    // variableWidth: true,
    responsive: [
        {
            breakpoint: 1320,
            settings: {
                slidesToShow: 3,
                variableWidth: false

            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                variableWidth: false,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 995,
            settings: {
                slidesToShow: 4,
                variableWidth: false,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                variableWidth: false,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: "unslick"
        }
    ]
});

///////////////хедер/////////////////////
$(document).ready(function () {
    if ($(window).width() > 567){
        // $('.header-menu__programs').mCustomScrollbar({
        //     theme:"white"
        // });
        $('.video-container__programs1').mCustomScrollbar({
            theme:"#67CF45"
        });
    }
    else {

        $(".tabs__caption").mCustomScrollbar({
            axis:"x" // vertical and horizontal scrollbar

        });
        $(".header__news ul").mCustomScrollbar({
            axis:"x" // vertical and horizontal scrollbar

        });
    }
})

$(document).ready(function () {
    if ($(window).width() > 992){
        $('.header-menu__programs').mCustomScrollbar({
            theme:"black"
        });
    }
    else {
        // $(".header-menu__programs li").slice(0, 2).show();
    }
});

//////////////кнопка polls.html////////////



///////форма/////////////////
$("#form-email").submit(function(e) {
    e.preventDefault();
    var self = this;
    var interval=500;
    var $popup=$('.popup')
    $.ajax({
        url:    "send.php", //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "json", //формат данных
        data: $(self).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
            $popup.fadeIn(interval)
            setTimeout(function () {
                $popup.fadeOut(interval);
            }, 3000);
        },
        error: function(response) { // Данные не отправлены
            ////////////удалить//////////////////////
            $popup.fadeIn(interval)
            setTimeout(function () {
                $popup.fadeOut(interval);
            }, 3000);
            ////////////////////////////////////////
        }
    });
});

///якорь к блокам
$("#menu").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
});


//first slider
$('.slider-box').slick({
    dots: true,
    fade: true,
    cssEase: 'linear',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000
});

///////хедер блок контакты/////////
$('#check').click(function() {
    if($("#check").is(':checked'))
        $(".svg-tel").css({"transform":"rotate(182deg)"});
    else
        $(".svg-tel").css({"transform":"rotate(0deg)"});
});
$('#check1').click(function() {
    if($("#check1").is(':checked'))
        $(".svg-tel1").css({"transform":"rotate(182deg)"});
    else
        $(".svg-tel1").css({"transform":"rotate(0deg)"});
});

///////////////добавление класа на клик///////////////
$('.header-menu__item').click(function(){
    $(this).toggleClass("active");
});


//////back to top кнопка///////////
$(document).ready(function(){
    $('body').append('<a href="#" id="go-top" title="Вверх"><i class="fa fa-caret-up" aria-hidden="true"></i>Вверх</a>');
});

$(function() {
    $.fn.scrollToTop = function() {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
        var scrollDiv = $(this);
        $(window).scroll(function() {
            if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
            else $(scrollDiv).fadeIn("slow")
        });
        $(this).click(function() {
            $("html, body").animate({scrollTop: 0}, "slow")
        })
    }
});

$(function() {
    $("#go-top").scrollToTop();
});

