const countDownDate = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;
const x = setInterval(function() {  
  var now = new Date().getTime();  
  var distance = countDownDate - now;  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.querySelector('.run-counter-days').innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector('.run-counter-hours').innerHTML = hours <10 ? `0${hours}`: hours;
  document.querySelector('.run-counter-min').innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector('.run-counter-sec').innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}, 1000);