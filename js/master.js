$(document).ready(function() {
  $('.info1').fadeOut(0, function() {

  });
  $('.info2').fadeOut(0, function() {

  });
  $('.imgHolder').hover(function(){
    $('.hoverBut').fadeOut('slow/300/fast', function() {
    });
  });

  $('.hover1').hover(function(){
    $('.bg').fadeOut('slow/100/fast', function() {
    });
    $('.titles').fadeOut('slow/100/fast', function() {
    });
    $('.info1').fadeOut('slow/100/fast', function() {
    });
    $('.cx5').fadeOut('slow/100/fast', function() {
    });
    $('.mx5').fadeIn('slow/100/fast', function() {
    });
    $('.info2').fadeIn('slow/100/fast', function() {
    });
  });

  $('.hover2').hover(function(){
    $('.bg').fadeOut('slow/100/fast', function() {
    });
    $('.titles').fadeOut('slow/100/fast', function() {
    });
    $('.info2').fadeOut('slow/100/fast', function() {
    });
    $('.mx5').fadeOut('slow/100/fast', function() {
    });
    $('.cx5').fadeIn('slow/100/fast', function() {
    });
    $('.info1').fadeIn('slow/100/fast', function() {
    });

  });

});
