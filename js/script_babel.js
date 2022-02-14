"use strict";

$(document).ready(function () {
  $('#next').on("click", function () {
    var item_widthFirstRow = $('.content__slider-firstRow .content__slide:last').width();
    var left_valueFirstRow = item_widthFirstRow * -1;
    var item_widthSecondRow = $('.content__slider-secondRow .content__slide:last').width();
    var left_valueSecondRow = item_widthSecondRow * -1;
    $('.btn').addClass('disabled');
    $('.content__slider-firstRow').animate({
      'left': '+=' + item_widthFirstRow
    }, 1000, function () {
      $('.content__slider-firstRow .content__slide:last').prependTo($('.content__slider-firstRow'));
      $('.content__slider-firstRow').css({
        'left': '+=' + left_valueFirstRow
      });
      $('.btn').removeClass('disabled');
    });
    $('.content__slider-secondRow').animate({
      'left': '+=' + item_widthSecondRow
    }, 1000, function () {
      $('.content__slider-secondRow .content__slide:last').prependTo($('.content__slider-secondRow'));
      $('.content__slider-secondRow').css({
        'left': '+=' + left_valueSecondRow
      });
    });
  });
  $('#prev').on('click', function () {
    var item_widthFirstRow = $('.content__slider-firstRow .content__slide:first').width();
    var left_valueFirstRow = item_widthFirstRow * -1;
    var item_widthSecondRow = $('.content__slider-secondRow .content__slide:first').width();
    var left_valueSecondRow = item_widthSecondRow * -1;
    $('.btn').addClass('disabled');
    $('.content__slider-firstRow ').animate({
      'left': '-=' + item_widthFirstRow
    }, 1000, function () {
      $('.content__slider-firstRow .content__slide:first').appendTo($('.content__slider-firstRow'));
      $('.content__slider-firstRow').css({
        'left': '-=' + left_valueFirstRow
      });
      $('.btn').removeClass('disabled');
    });
    $('.content__slider-secondRow').animate({
      'left': '-=' + item_widthSecondRow
    }, 1000, function () {
      $('.content__slider-secondRow .content__slide:first').appendTo($('.content__slider-secondRow'));
      $('.content__slider-secondRow').css({
        'left': '-=' + left_valueSecondRow
      });
    });
  });
});
