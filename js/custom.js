$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    });
});




$(function () {
    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 2000
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },

        on: {
            init: function () {
                // {this.slides.length
                $('.cont strong').text(this.slides.length)
            },
            slideChangeTransitionEnd: function () {
                $('.cont span').text(this.realIndex + 1)
            }
        }
    });

    $('.main_visual .prev').on('click', function () {
        main_visual_slide.slidePrev();
    });

    $('.main_visual .next').on('click', function () {
        main_visual_slide.slideNext();
    });


    const TXT = ['스페니쉬 연유 라떼', '롱블랙', 'TWG 1837 블랙티', '스트로베리 피치 프라페', '스페니쉬 연유 라떼', '롱블랙', 'TWG 1837 블랙티', '스트로베리 피치 프라페']


    const coffee_slide = new Swiper('.coffee_slide', {
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 30,
        // centeredSlides: true,
        on: {
            init: function () {
                // {this.slides.length
                $('.coffee.tit span').text(TXT[0])
            },
            slideChangeTransitionEnd: function () {
                $('.coffee.tit span').text(TXT[this.realIndex]);

            },
            slideChangeTransitionStart: function () {
                $('.main_menu .inner .right .swiper-slide-active').addClass('on');
                $('.main_menu .inner .right .swiper-slide-active').nextAll().removeClass('on');
            },
        },

    });

    $('.right .coffee.tit .prev').on('click', function () {
        coffee_slide.slidePrev();
    });

    $('.right .coffee.tit .next').on('click', function () {
        coffee_slide.slideNext();
    });



    const TXT2 = ['스트로베리 초콜릿 생크림', '마스카포네 티라미수', '레드벨벳', '뉴욕 치즈 케이크', '아이스 박스', '마카롱 세트(6개입)', '소프트 아이스크림(컵)']

    const dessert_slide = new Swiper('.dessert_slide', {
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 30,
        on: {
            init: function () {
                // {this.slides.length
                $('.dessert.tit span').text(TXT2[0])
            },
            slideChangeTransitionEnd: function () {
                $('.dessert.tit span').text(TXT2[this.realIndex])
            },
            slideChangeTransitionStart: function () {
                $('.main_menu .inner .right .swiper-slide-active').addClass('on');
                $('.main_menu .inner .right .swiper-slide-active').nextAll().removeClass('on');
            },
        },

    });


    $('.right .dessert.tit .prev').on('click', function () {
        dessert_slide.slidePrev();
    });

    $('.right .dessert.tit .next').on('click', function () {
        dessert_slide.slideNext();
    });

    const TXT3 = ['페스토 햄치즈 파니니', '그릴드 치킨 샐러드', '호밀 B. E. L. T', '다음에그 샐러드번', '코코넛 카야 크루아상']


    const deli_slide = new Swiper('.deli_slide', {
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 30,
        on: {
            init: function () {
                // {this.slides.length
                $('.deli.tit span').text(TXT3[0])
            },
            slideChangeTransitionEnd: function () {
                $('.deli.tit span').text(TXT3[this.realIndex])
            },
            slideChangeTransitionStart: function () {
                $('.main_menu .inner .right .swiper-slide-active').addClass('on');
                $('.main_menu .inner .right .swiper-slide-active').nextAll().removeClass('on');
            },
        }

    });


    $('.right .deli.tit .prev').on('click', function () {
        deli_slide.slidePrev();
    });

    $('.right .deli.tit .next').on('click', function () {
        deli_slide.slideNext();
    });

    // 
    const support_slide = new Swiper('.support_slide', {
        loop: true,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        on: {
            init: function () {
                // {this.slides.length
                $('.cont2 strong').text(this.slides.length)
            },
            slideChangeTransitionEnd: function () {
                $('.cont2 span').text(this.realIndex + 1)
            }
        }

    });


    $('.support .arrows .prev').on('click', function () {
        support_slide.slidePrev();
    });

    $('.support .arrows .next').on('click', function () {
        support_slide.slideNext();
    });
});

$(function () {
    $('.main_menu .tap_menu>*').on('click', function () {
        let idx = $(this).index(); // 클릭한 것의 번호를 가져와서 저장하기
        console.log(idx)
        $('.main_menu .tap_menu>*').removeClass('on');
        $(this).addClass('on');

        $('.main_menu .right .swiper').removeClass('on');
        $('.main_menu .right .swiper').eq(idx).addClass('on');

        $('.main_menu .right .tit').removeClass('on');
        $('.main_menu .right .tit').eq(idx).addClass('on');
    });
})