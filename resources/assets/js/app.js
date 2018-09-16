
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('slick-carousel');
require('jquery');

(function($) {

  function resizeHomeIndustryTiles() {
    $('.home-industries .row > div').each(function() {
      if($(this).hasClass('home-industries__title-area')) {
        $(this).css('margin-top', '-75px');
      } else {
        var w = $(this).innerWidth();
        $(this).find('> div').css('height', w);
      }
    })
  }

  function resizeHomeProjectTiles() {
    $('.featured-projects__image-tile, .home-services__image-tile').each(function() {
      var w = $(this).innerWidth();
      $(this).css('height', w);
    });
  }

  function resizeHomeServiceTiles() {
    $('.home-services__service-tile').each(function() {
      var w = $(this).innerWidth();
      $(this).css('height', w);

      if($(this).hasClass('home-services__service-tile--double-tall')) {
        $(this).css('height', ((w / 2) + w)).css('position', 'absolute').css('top', w);
      }
    });
  }

  function offsetHomeServiceTiles() {
    $('.home-services-offset-1').each(function() {
      var w = $(this).innerWidth();
      $(this).css('margin-top', w);
    });
  }

  $(document).ready(function() {
    
    $('.home-slider').slick({
      infinite: true,
      arrows: false,
      dots: true
    });
    
    $(window).on('load', function() {
      resizeHomeProjectTiles();
      resizeHomeServiceTiles();
      offsetHomeServiceTiles();
      resizeHomeIndustryTiles();
    });
  });
})(jquery);



