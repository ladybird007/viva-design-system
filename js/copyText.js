function copyText(el) {
  const copyText = document.getElementById("copy-content").textContent;
  navigator.clipboard.writeText(copyText);
  el.classList.add('copied');
}

const copyBtns = document.querySelectorAll('code');
copyBtns.forEach((btn) => {
  const codeText = btn.textContent;
  btn.addEventListener('click', () => {
    copyBtns.forEach((btn) => btn.classList.remove('copied'));
    navigator.clipboard.writeText(codeText);
    btn.classList.add('copied');
  });
});


