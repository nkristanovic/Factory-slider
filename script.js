$(document).ready(function () {

    $('#next').click(function () {
        let item_widthFirstRow = $('.content__slider-firstRow .slide:last').width();
        let left_valueFirstRow = item_widthFirstRow * (-1);

        let item_widthSecondRow = $('.content__slider-secondRow .slide:last').width();
        let left_valueSecondRow = item_widthSecondRow * (-1);

        $('#next').addClass('disabled');

        $('.content__slider-firstRow').animate({ 'left': '+=' + item_widthFirstRow }, 2000, function () {
            $('.content__slider-firstRow .slide:last').prependTo($('.content__slider-firstRow'));
            $('.content__slider-firstRow').css({ 'left': '+=' + left_valueFirstRow });
            $('#next').removeClass('disabled');
        });

        $('.content__slider-secondRow').animate({ 'left': '+=' + item_widthSecondRow }, 2000, function () {
            $('.content__slider-secondRow .slide:last').prependTo($('.content__slider-secondRow'));
            $('.content__slider-secondRow').css({ 'left': '+=' + left_valueSecondRow });
        });
    });

    $('#prev').click(function () {
        let item_widthFirstRow = $('.content__slider-firstRow .slide:first').width();
        let left_valueFirstRow = item_widthFirstRow * (-1);

        let item_widthSecondRow = $('.content__slider-secondRow .slide:first').width();
        let left_valueSecondRow = item_widthSecondRow * (-1);

        $('#prev').addClass('disabled');

        $('.content__slider-firstRow ').animate({ 'left': '-=' + item_widthFirstRow }, 2000, function () {
            $('.content__slider-firstRow .slide:first').appendTo($('.content__slider-firstRow'));
            $('.content__slider-firstRow').css({ 'left': '-=' + left_valueFirstRow });
            $('#prev').removeClass('disabled');
        });

        $('.content__slider-secondRow').animate({ 'left': '-=' + item_widthSecondRow }, 2000, function () {
            $('.content__slider-secondRow .slide:first').appendTo($('.content__slider-secondRow'));

            $('.content__slider-secondRow').css({ 'left': '-=' + left_valueSecondRow });

        });
    });

});
