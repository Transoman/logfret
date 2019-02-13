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

  new Swiper ('.neolink__feature-row', {
    slidesPerView: 2,
    spaceBetween: 60,
    autoplay: true,
    speed: 1000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 1
      }
    }
  });

  new Swiper ('.services-prev', {
    slidesPerView: 'auto',
    spaceBetween: 80,
    autoplay: true,
    speed: 1000,
    breakpoints: {
      576: {
        slidesPerView: 1
      }
    }
  });

  new Swiper ('.case', {
    autoplay: true,
    // autoHeight: true,
    speed: 1000,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
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