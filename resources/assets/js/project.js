(function($) {

  function resizeProjectTiles() {
    $('.project__tile').each(function() {
      var w = $(this).innerWidth();
      $(this).css('height', w);
    });
  }

  $(document).ready(function() {

    resizeProjectTiles();
  
    $('.project__category').click(function() {
      $('.selected').removeClass('selected');
      $(this).addClass('selected');
    });

    $('.project__tile').mouseover(function() {
      $(this).next().fadeIn().css('display', 'flex');
      $(this).css('background-size', 'auto 107%');
    });

    $('.project__tile-meta').mouseleave(function() {
      $(this).fadeOut();
      $(this).prev().css('background-size', 'auto 110%');
    });

  });

})(jquery);