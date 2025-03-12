const toastInfo = Toastify({
  text: "This is a toast",
  className: "info",
  close: true,
  duration: 50000
});
const toastDanger = Toastify({
  text: "This is a toast",
  className: "danger",
  close: true,
  duration: 50000
});

const toastSucces = Toastify({
  text: "This is a toast",
  className: "success",
  close: true,
  duration: 50000
});

const toastWarning = Toastify({
  text: "This is a toast",
  className: "warning",
  close: true,
  duration: 50000
});

const btnInfo = document.querySelector('.btn-toast-info'),
      btnDanger = document.querySelector('.btn-toast-danger'),
      btnSuccess = document.querySelector('.btn-toast-success'),
      btnWarning = document.querySelector('.btn-toast-warning');

btnInfo.addEventListener('click', () => {
  toastInfo.showToast();
});
btnDanger.addEventListener('click', () => {
  toastDanger.showToast();
});
btnSuccess.addEventListener('click', () => {
  toastSucces.showToast();
});
btnWarning.addEventListener('click', () => {
  toastWarning.showToast();
});

