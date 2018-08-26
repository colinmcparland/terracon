
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('slick-carousel');
require('jquery');

(function($) {
  $(document).ready(function() {
    
    $('.home-slider').slick({
      infinite: true,
      arrows: false,
      dots: true
    });

  });
})(jquery);



