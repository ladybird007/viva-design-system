(function ($) {
  $(document).ready(function(){

    $('.js-modal-btn').on('click', function(e) {
      e.preventDefault();
      const dataId = $(this).attr('data-id');
      $(dataId).fadeIn()
      $('body').css('overflow', 'hidden');
    });

    $('.js-modal-video-btn').on('click', function(e) {
      e.preventDefault();
      const dataId = $(this).attr('data-id'),
            dataSrc = $(this).attr('data-src');
      $(dataId).fadeIn();
      $(dataId).find('#js-modal-video').attr('src', dataSrc);
      $('body').css('overflow', 'hidden');
    });

    $('.js-modal-close').on('click', function(e) {
      e.preventDefault();
      $(this).closest('.modal').fadeOut();
      $('body').css('overflow', 'auto');
      $('#js-modal-video').attr('src', '');
    });

    $(".modal-overlay").on('click', function(event) {
      event.stopPropagation();
      let eTarget = event.target;
      if(!(eTarget.classList.contains('modal-container'))) {
        $(this).closest('.modal').fadeOut();
        $('body').css('overflow', 'auto');
        $('#js-modal-video').attr('src', '');
      } 
    });
  })
})(jQuery)