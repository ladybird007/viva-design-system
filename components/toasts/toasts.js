const toastInfo = Toastify({
  node: document.getElementById('toast-text-info'),
  className: "info",
  close: true,
  duration: 5000
});
const toastDanger = Toastify({
  node: document.getElementById('toast-text-danger'),
  className: "danger",
  close: true,
  duration: 5000
});

const toastSucces = Toastify({
  node: document.getElementById('toast-text-success'),
  className: "success",
  close: true,
  duration: 5000
});

const toastWarning = Toastify({
  node: document.getElementById('toast-text-warning'),
  className: "warning",
  close: true,
  duration: 5000
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

