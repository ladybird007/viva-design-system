(function ($) {
  $(document).ready(function(){

    $('.js-single-slider').slick({
      infinite: true,
      dots: true,
    });


    $('.js-thumbnail-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.js-thumbnail-nav-slider'
    });
    $('.js-thumbnail-nav-slider').slick({
      asNavFor: '.js-thumbnail-slider',
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      centerMode: false,
      focusOnSelect: true
    });

  })
})(jQuery)