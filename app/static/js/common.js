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
    var position = el.position();
    var left = position.left;
    console.log(position);
    var right = $(window).width() - position.left - el.width();
    if (left != 0) {
      el.css({'left': '-' + left + 'px', 'right': '-' + right + 'px', 'width': $(window).width() + 'px'});
    }
  }

  fullwidth();

  $(window).resize(function() {
    // fullwidth();
  });


  // SVG
  svg4everybody({});

});