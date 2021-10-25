$(document).ready(function () {
    // $('.slider').slick({
    //     dots: true,
    //     adaptiveHeight: true,
    //     slidesToShow: 3,
    //     initialSlide: 0,
    //     autoplay: false,
    //     waitForAnimate: false,
    // });
    const screenWidth = window.screen.width;
    console.log(screenWidth);
    if(screenWidth < 550){
        $('.slider').slick({
            dots: true,
            adaptiveHeight: true,
            slidesToShow: 1,
            initialSlide: 0,
            autoplay: false,
            waitForAnimate: false,
        });
    };
    if ((screenWidth < 760) && (screenWidth >= 550)){
        $('.slider').slick({
            dots: true,
            adaptiveHeight: true,
            slidesToShow: 2,
            initialSlide: 0,
            autoplay: true,
            waitForAnimate: false,
        });
    }
    if (screenWidth >= 760){
        $('.slider').slick({
            dots: true,
            adaptiveHeight: true,
            slidesToShow: 3,
            initialSlide: 0,
            autoplay: true,
            waitForAnimate: false,
        });
    }
    //REVIEW СЛАЙДЕР
    if (screenWidth < 695) {
        $('.reviews__slider').slick({
            adaptiveHeight: true,
            slidesToShow: 1,
            initialSlide: 0,
            waitForAnimate: false,
        })
    };
    if ((screenWidth < 960) && (screenWidth >= 695)) {
        $('.reviews__slider').slick({
            adaptiveHeight: true,
            slidesToShow: 2,
            initialSlide: 0,
            waitForAnimate: false,
        })
    }
    if (screenWidth >= 960) {
        $('.reviews__slider').slick({
            adaptiveHeight: true,
            slidesToShow: 3,
            initialSlide: 0,
            waitForAnimate: false,
        })
    }
});