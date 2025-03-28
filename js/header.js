(function ($) {
  $(document).ready(function(){

    $('.js-mobile-btn').on('click', function(e) {
      e.stopPropagation();
      if($(this).hasClass('opened')) {
        $(this).closest('.header').find('.js-main-nav').stop(true,true).slideUp(); 
        $(this).removeClass('opened');
        $('.js-nav-link').removeClass('opened');
        $('.sub-nav').slideUp();
      } else {
        $(this).addClass('opened');
        $(this).closest('.header').find('.js-main-nav').stop(true,true).slideDown();
      }
    });

    $('.js-nav-link').on('click', function(e) {
      e.stopPropagation();
      const windowWidth = $(window).width();
      if(windowWidth < 767) {
        if($(this).hasClass('opened')) {
          $(this).next().stop(true,true).slideUp(); 
          $(this).removeClass('opened');
        } else {
          $('.js-nav-link').removeClass('opened');
          $('.sub-nav').slideUp();
          $(this).addClass('opened');
          $(this).next().stop(true,true).slideDown();
        }
      }
    });

    $('.js-nav-item').hover(function(e) {
      e.stopPropagation();
      const windowWidth = $(window).width();
      if(windowWidth > 766) {
        if($(this).hasClass('opened')) {
          $(this).find('.sub-nav').stop(true,true).fadeOut(); 
          $(this).removeClass('opened');
        } else {
          $(this).addClass('opened');
          $(this).find('.sub-nav').stop(true,true).fadeIn();
        }
      }
    });

    $(window).resize(function() {
      $('.js-nav-link').removeClass('opened');
      $('.sub-nav').slideUp();
    });
  })
})(jQuery)