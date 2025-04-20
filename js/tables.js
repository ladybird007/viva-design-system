(function ($) {
  $(document).ready(function(){
    const tableFiltersBtn = $('.js-table-filters-btn'),
          tableSearchBtn = $('.js-table-search-btn');
     

    tableFiltersBtn.on('click', function(e) {
      e.preventDefault();
      const filters = $(this).closest('.table-filters-bar').find('.js-table-filters');

      console.log(filters);

      if (filters.hasClass('opened')) {
        filters.removeClass('opened');
      } else {
        filters.addClass('opened');
      }
    });

    $('.js-table-filters').on('click', function(e) {
      const target = $(e.target);

      if (target.hasClass('js-table-filters')) {
        $(this).removeClass('opened');
      } else if (target.hasClass('js-table-filters-btn')) {
        e.stopPropagation();
      }
    });

    tableSearchBtn.on('click', function(e) {
      e.preventDefault();
      const search = $(this).closest('.table-filters-bar').find('.js-table-search');
      console.log('ddd');
      if (search.hasClass('opened')) {
        $(this).html('<i class="fa-regular fa-magnifying-glass"></i>');
        search.removeClass('opened').slideUp();
      } else {
        $(this).html('<i class="fa-regular fa-xmark"></i>');
        search.addClass('opened').slideDown();
      }
    })

  })
})(jQuery)