(function ($) {
  $(document).ready(function(){

    $('.js-dropdown-btn').on('click', function(e) {
      e.stopPropagation();
      if($(this).hasClass('opened')) {
        $(this).next().stop(true,true).slideUp('slow'); 
        $(this).removeClass('opened')
      } else {
        if($(this).hasClass('accordion-header')) {
          $('.js-dropdown-btn').removeClass('opened');
          $('.js-dropdown-content').slideUp('slow');
        }
        $(this).addClass('opened');
        $(this).next().stop(true,true).slideDown('slow');
      }
      
    })
  })
})(jQuery)
