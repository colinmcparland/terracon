var Rellax = require('rellax');

(function($) {
  $(document).ready(function() {

    if($('.case-studies').length) {
      var rellax = new Rellax('.rellax', {
        speed: 5,
        wrapper: '.case-studies',
        relativeToWrapper: true
      });
    }

    $('.case-studies__section img').mouseenter(function(e) {
      $(this).next().fadeIn().css('display', 'flex');
    });

    $('.case-studies__overlay').mouseleave(function(e) {
      $(this).fadeOut();
    });


  })
})(jquery);