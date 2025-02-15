function copyText(el) {
  const copyText = el.closest('.example-html').children[1].children[0].textContent;
  const copiedClassBtn = document.querySelectorAll('.copy-btn');

  copiedClassBtn.forEach((btn) => {
    btn.classList.remove('copied');
  });
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

