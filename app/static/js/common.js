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

  $('.world-map').vectorMap({
    map: 'continents_mill',
    backgroundColor: '#fff',
    zoomOnScroll: false,
    regionStyle: {
      initial: {
        fill: '#d3d5d6',
        "fill-opacity": 1,
        stroke: 'none',
        "stroke-width": 0,
        "stroke-opacity": 1
      },
      hover: {
        fill: '#e18e19',
        cursor: 'default'
      }
    },
    onRegionOver: function(e, code) {
      if (code == 'AF') {
        $('.map__list li').removeClass('active');
        $('.map__list .africa').addClass('active');
      }
      else if (code == 'AS') {
        $('.map__list li').removeClass('active');
        $('.map__list .asia').addClass('active');
        $('.map__list .me').addClass('active');
      }
      else if (code == 'NA') {
        $('.map__list li').removeClass('active');
        $('.map__list .na').addClass('active');
      }
      else if (code == 'SA') {
        $('.map__list li').removeClass('active');
        $('.map__list .csa').addClass('active');
      }
      else if (code == 'EU') {
        $('.map__list li').removeClass('active');
        $('.map__list .wee').addClass('active');
      }
    },
    onRegionOut: function(e, code) {
      if (code != 'AF' || code != 'AS' || code != 'NA' || code != 'SA' || code != 'EU') {
        $('.map__list li').removeClass('active');
      }
    }
  });


  // SVG
  svg4everybody({});

});