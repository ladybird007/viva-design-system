////// Air Datepicker //////

const standartCalendar = document.querySelector('.standart-calendar'),
      rangeCalendar = document.querySelector('.range-calendar');

new AirDatepicker(standartCalendar, {
  timeFormat: "hh:ii AA",
  timepicker: true,
  inline: true
});

new AirDatepicker(rangeCalendar, {
  range: true,
  multipleDatesSeparator: ' - '
});


////// Range Datepicker ///////

$(function() {
  $('input[name="birthday"]').daterangepicker({
    autoApply: true,
    singleDatePicker: true,
    showDropdowns: true,
    minYear: 1901,
    parentEl: 'div[data-for="birthday"]',
    maxYear: parseInt(moment().format('YYYY'),10)
  });

  $('input[name="daterange"]').daterangepicker({
    parentEl: 'div[data-for="daterange"]'
  });
});