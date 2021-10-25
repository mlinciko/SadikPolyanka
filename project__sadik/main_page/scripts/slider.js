$(document).ready(function () {
    let position = 0;
    let indecatorPosition = 25;
    const slidesToShow = 3;
    const slidesToScroll = 1;
    const container = $('.slider__container');
    const track = $('.slider__track');
    const item = $('.slider__item__image');
    const btnPrev = $('.button__left');
    const btnNext = $('.button__right');
    const itemWidth = container.width() / slidesToShow;
    console.log(itemWidth);
    const movePosition = slidesToScroll * itemWidth;
    const indecator = $('.indecator__item__color');
    const indecatorMovePosition = 25;

    item.each(function (index, item) {
        $(item).css({
            maxWidth: itemWidth,
        })
    })

    btnPrev.click(function () {
        $(btnNext).css({
            pointerEvents: 'auto',
        })
        position += movePosition;
        indecatorPosition -= indecatorMovePosition;
        setPosition();
        if (position > 339) {
            $(btnPrev).css({
                pointerEvents: 'none',
            })
        }
    })

    btnNext.click(function () {
        $(btnPrev).css({
            pointerEvents: 'auto',
        })
        position -= movePosition;
        indecatorPosition += indecatorMovePosition;
        setPosition();
        if (position <= -1357.3333333333333) {
            $(btnNext).css({
                pointerEvents: 'none',
            })
        }
    })

    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px)`,
            transition: '0.2s'
        })
        indecator.css({
            left: `${indecatorPosition}px`,
        })
    };
});