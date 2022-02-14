$(document).ready(() => {

    $('#next').on("click", () => {
        let item_widthFirstRow = $('.content__slider-firstRow .content__slide:last').width();
        let left_valueFirstRow = item_widthFirstRow * (-1);

        let item_widthSecondRow = $('.content__slider-secondRow .content__slide:last').width();
        let left_valueSecondRow = item_widthSecondRow * (-1);

        $('.btn').addClass('disabled');

        $('.content__slider-firstRow').animate({ 'left': '+=' + item_widthFirstRow }, 1000, () => {
            $('.content__slider-firstRow .content__slide:last').prependTo($('.content__slider-firstRow'));
            $('.content__slider-firstRow').css({ 'left': '+=' + left_valueFirstRow });
            $('.btn').removeClass('disabled');
        });

        $('.content__slider-secondRow').animate({ 'left': '+=' + item_widthSecondRow }, 1000, () => {
            $('.content__slider-secondRow .content__slide:last').prependTo($('.content__slider-secondRow'));
            $('.content__slider-secondRow').css({ 'left': '+=' + left_valueSecondRow });
        });
    });

    $('#prev').on('click', () => {
        let item_widthFirstRow = $('.content__slider-firstRow .content__slide:first').width();
        let left_valueFirstRow = item_widthFirstRow * (-1);

        let item_widthSecondRow = $('.content__slider-secondRow .content__slide:first').width();
        let left_valueSecondRow = item_widthSecondRow * (-1);

        $('.btn').addClass('disabled');

        $('.content__slider-firstRow ').animate({ 'left': '-=' + item_widthFirstRow }, 1000, () => {
            $('.content__slider-firstRow .content__slide:first').appendTo($('.content__slider-firstRow'));
            $('.content__slider-firstRow').css({ 'left': '-=' + left_valueFirstRow });
            $('.btn').removeClass('disabled');
        });

        $('.content__slider-secondRow').animate({ 'left': '-=' + item_widthSecondRow }, 1000, () => {
            $('.content__slider-secondRow .content__slide:first').appendTo($('.content__slider-secondRow'));
            $('.content__slider-secondRow').css({ 'left': '-=' + left_valueSecondRow });

        });
    });

});
