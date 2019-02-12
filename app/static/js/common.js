jQuery(document).ready(function($) {

  // Toggle nav menu
  $('.nav-toggle').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.header__nav').toggleClass('open');
  });

  // Modal
  $('.modal').popup({
    transition: 'all 0.3s',
    onclose: function() {
      $(this).find('label.error').remove();
    }
  });

  new Swiper ('.review', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });

  var fullwidth = function() {
    var el = $('.article__img-wrap');
    if (el.length) {
      var position = el.position();
      var left = 0 - el.offset().left;
      console.log(el.offset().left);
      var right = $(window).width() - position.left - el.width();
      if (el.offset().left >= 0 || left > 0) {
        el.css({'left': left, 'width': $(window).width()});
      }
    }
  }

  fullwidth();

  $(window).on('resize', function() {
    // fullwidth();
  });


  // SVG
  svg4everybody({});

});