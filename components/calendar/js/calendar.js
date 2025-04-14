////// Air Datepicker //////

const singleCalendar = document.querySelector('.single-calendar'),
      singleTimelineCalendar = document.querySelector('.single-timeline-calendar'),
      rangeCalendar = document.querySelector('.range-calendar'),
      rangeTimelineCalendar = document.querySelector('.range-timeline-calendar');
      

new AirDatepicker(singleCalendar, {
  autoClose: true,
  dateFormat: 'MM/dd/yyyy',
  navTitles: {
    days: 'MMMM yyyy',
  },
  locale: {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dateFormat: 'MM/dd/yyyy',
  }
});

new AirDatepicker(singleTimelineCalendar, {  
  timepicker: true,
  buttons: ['clear', 'apply'],
  dateFormat: 'MM/dd/yyyy',
  navTitles: {
    days: 'MMMM yyyy',
  },
  locale: {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    apply: 'Apply',
    clear: 'Clear',
    dateFormat: 'MM/dd/yyyy',
    timeFormat: 'HH:mm',
    firstDay: 1
  }
});

new AirDatepicker(rangeCalendar, {
  range: true,
  buttons: ['clear', 'apply'],
  multipleDatesSeparator: ' - ',
  dateFormat: 'MM/dd/yyyy',
  navTitles: {
    days: 'MMMM yyyy',
  },
  locale: {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    apply: 'Apply',
    clear: 'Clear',
    dateFormat: 'MM/dd/yyyy'
  }
});

new AirDatepicker(rangeTimelineCalendar, {
  range: true,
  timepicker: true,
  buttons: ['clear', 'apply'],
  multipleDatesSeparator: ' - ',
  dateFormat: 'MM/dd/yyyy',
  classes: 'calendar-wide',
  navTitles: {
    days: 'MMMM yyyy',
  },
  locale: {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    apply: 'Apply',
    clear: 'Clear',
    dateFormat: 'MM/dd/yyyy'
  }
});