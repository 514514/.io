$(function () {
    new WOW({
        mobile: false
    }).init();

    var navTop = $('.header').find('.nav').offset().top;

    $(window).scroll(function() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop >= navTop) {
            $('.header').addClass('header-fix');
        } else {
            $('.header').removeClass('header-fix');
        }
    });

    $('.sc-btn').on('click', function () {
        $('.sc-box').show();
    });
    $('.sc-box .close').on('click', function () {
        $('.sc-box').hide();
    });

    $('.hform').find('form').submit(function () {
        var val = $(this).find('input').val();
        if (!val) {
            alert('璇疯緭鍏ュ叧閿瓧');
            return false
        }
    });

    $('.menu-btn').on('click', function () {
        $('.header').find('.nav').toggle();
    });

    if ($(window).width() > 991) {
        $('.dropdown').hover(function () {
            $(this).addClass('open');
        }, function () {
            $(this).removeClass('open');
        });
    } else {
        $('.dropdown').find('.arr').on('click', function () {
            $(this).parent().toggleClass('open');
        });
    }

    $('.lanmu').find('.arr').on('click', function () {
        $(this).parent().toggleClass('open');
    });

    // 鍙充晶婊戝姩杩斿洖椤堕儴
    $('.kf .kf-side').click(function(){
        //$('.kf').animate({ right: '-208' }, "slow");
        var rt = $('.kf').css("right");
        //alert(rt);
        var num = parseInt(rt);
        //alert(num);
        if(num < 0){
            $('.kf').animate({ right: '20px' }, "slow");
            $('.kf .kf-side span.arrow').addClass('on');
        }else{
            $('.kf').animate({ right: '-208px' }, "slow");
            $('.kf .kf-side span.arrow').removeClass('on');
        }
    });
    $('.kt-top span.close').click(function(){
        $('.kf').animate({ right: '-208px' }, "slow");
    });

    $('.kf .backTop').click(function() {
        $("html,body").stop().animate({ scrollTop: '0' }, 500);
    });

    $('.in-prd').on('click', 'dt', function () {
        if ($(this).parent('dl').hasClass('active')) {
            $(this).parent('dl').removeClass('active');
            $(this).parent('dl').find('dd').stop().slideUp();
        } else {
            $(this).parent('dl').addClass('active').siblings().removeClass('active');
            $(this).parent('dl').find('dd').stop().slideDown();
            $(this).parent('dl').siblings().find('dd').stop().slideUp();
        }
    })
});

function tabsSwiper(menu, con, allowTouchMove) {
    var swiper = new Swiper(con, {
        speed: 500,
        spaceBetween: 10,
        autoHeight: true,
        allowTouchMove: !allowTouchMove,
        on: {
            slideChangeTransitionStart: function () {
                $(menu).find('li').eq(this.activeIndex).addClass('active').siblings().removeClass('active');
            }
        }
    });
    $(menu).on('click', 'li', function (e) {
        $(this).addClass('active').siblings().removeClass('active');
        swiper.slideTo($(this).index());
    });
}