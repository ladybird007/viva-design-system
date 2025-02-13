function myFunction() {
  const button = document.getElementById("copy-btn");
  const copyText = document.getElementById("copy-content").textContent;
  
  navigator.clipboard.writeText(copyText);
}