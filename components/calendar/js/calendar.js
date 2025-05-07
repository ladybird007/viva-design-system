////// Air Datepicker //////

const singleCalendar = document.querySelectorAll('.single-calendar'),
      singleTimelineCalendar = document.querySelectorAll('.single-timeline-calendar'),
      rangeCalendar = document.querySelectorAll('.range-calendar'),
      rangeTimelineCalendar = document.querySelectorAll('.range-timeline-calendar');
 
singleCalendar.forEach((calendarItem) => {
  new AirDatepicker(calendarItem, {
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
});

singleTimelineCalendar.forEach((calendarItem) => {
  new AirDatepicker(calendarItem, {  
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
});

rangeCalendar.forEach((calendarItem) => {
  new AirDatepicker(calendarItem, {
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
});

rangeTimelineCalendar.forEach((calendarItem) => {
  new AirDatepicker(calendarItem, {
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
});
