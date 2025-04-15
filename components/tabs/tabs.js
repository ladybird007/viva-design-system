(function ($) {
  $(document).ready(function(){
    $('.js-tab-link').on('click', function(e) {
      e.preventDefault();
      const target = $(this).attr('href'),
            contentId = $(this).closest('.js-tabs').find(target);

      $(this).closest('.js-tabs').find('.js-tab-link').removeClass('active');
      $(this).addClass('active').blur();

      $(this).closest('.js-tabs').find('.js-tab-content').removeClass('active');
      contentId.addClass('active');
    });
  })
})(jQuery)