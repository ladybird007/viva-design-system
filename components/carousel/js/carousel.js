(function ($) {
  $(document).ready(function(){

    $('.js-simple-carousel').owlCarousel({
      loop: true,
      navText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
      items: 1,
      responsive: {
        0 : {
          nav: false,
        },
        1025 : {
          nav: true,
        }
      }
    });

    $('.js-cards-carousel').owlCarousel({
      loop: true,
      margin: 24,
      center:true,
      navText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
      responsive: {
        0 : {
          items: 1,
          nav: false,
        },
        768 : {
          items: 2,
        },
        1025 : {
          items: 3,
          nav: true,
        }
      }
    });

    $('.js-preview-carousel').owlCarousel({
      stagePadding: 24,
      margin: 12,
      navText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
      items: 1,
      responsive: {
        0 : {
          nav: false,
        },
        1025 : {
          nav: true,
        }
      }
    });

  })
})(jQuery)