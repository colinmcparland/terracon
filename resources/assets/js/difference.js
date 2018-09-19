(function($) {

  function resizeLeadershipTiles() {
    $('.diff-leadership__img-section').each(function() {
      var w = $(this).innerWidth();
      $(this).css('height', w * .75);
    });
  }

  function initSlider() {
    $('.diff-slider').slick({
      infinite: true,
      dots: true,
      arrows: false,
    })
  }

  $(document).ready(function() {
    resizeLeadershipTiles();
   
    $(window).on('load', function() {
      initSlider();
    });

  });
})(jquery);