(function($) {

  var initialHeaderTop;

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

      //  Stick the topbar
      $(window).trigger('scroll');
    });

    /*
      Event for toggling sub menus
     */
    $('.header ul:not(.child-list) > li, .header ul:not(.sub-child-list) > li').mouseover(function() {
      $(this).find('ul').addClass('sub-menu-visible');
    });
    $('.header ul:not(.child-list) > li, .header ul:not(.sub-child-list) > li').mouseenter(function(e) {
      if($(e.target).is('.sub-child-menu') || $(e.target).parents('.sub-child-list').length) {
        return;
      }
      $('.sub-child-list').hide();
    });
    $('.header ul:not(.child-list) > li, .header ul:not(.sub-child-list) > li').mouseleave(function() {
      $('.sub-menu-visible').removeClass('sub-menu-visible');
    });

    $('.child-list > li').mouseover(function() {
      var next = $(this).next();

      $('.sub-child-list').hide();

      if(next.is('.sub-child-list')) {
        next.show().css('display', 'flex');
      }
    });

    /*
      Sticky topbar
     */
    initialHeaderTop = $('.header').position().top;
    $(window).scroll(function() {
      var windowTop = $(window).scrollTop();
      if(windowTop >= initialHeaderTop) {
        $('.header').css('position', 'fixed').css('top', 0);
      } else {
        $('.header').css('position', 'relative').css('top', '');
      }
    });


  });
})(jquery);