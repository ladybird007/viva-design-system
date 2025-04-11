(function ($) {
  $(document).ready(function(){

    $('.js-modal-btn').on('click', function(e) {
      e.preventDefault();
      const dataId = $(this).attr('data-id');
      $(dataId).fadeIn()
      $('body').css('overflow', 'hidden');
    });

    $('.js-modal-close').on('click', function(e) {
      e.preventDefault();
      $(this).closest('.modal').fadeOut()
      $('body').css('overflow', 'auto');
    });
  })
})(jQuery)
