const standartCalendar = document.querySelector('.standart-calendar'),
      rangeCalendar = document.querySelector('.range-calendar');

new AirDatepicker(standartCalendar);

new AirDatepicker(rangeCalendar, {
  range: true,
  multipleDatesSeparator: ' - ',
  inline: true
});
