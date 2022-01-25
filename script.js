$(document).ready(function () {
    let item_widthFirstRow = $('.content__slider-firstRow .slide').outerWidth();
    let item_widthSecondRow = $('.content__slider-secondRow .slide').outerWidth();

    $('#next').click(function () {

        $('.content__slider-firstRow').animate({ 'right': item_widthFirstRow }, 300, function () {
            $('.content__slider-firstRow .slide:first').before($('.content__slider-firstRow .slide:last'));
        });

        $('.content__slider-secondRow').animate({ 'right': item_widthSecondRow }, 300, function () {
            $('.content__slider-secondRow .slide:first').before($('.content__slider-secondRow .slide:last'));
        });
    });

    $('#prev').click(function () {
        $('.content__slider-firstRow').animate({ 'left': item_widthFirstRow }, 300, function () {
            $('.content__slider-firstRow .slide:last').after($('.content__slider-firstRow .slide:first'));
        });

        $('.content__slider-secondRow').animate({ 'left': item_widthSecondRow }, 300, function () {
            $('.content__slider-secondRow .slide:last').after($('.content__slider-secondRow .slide:first'));

        });
    });

});
