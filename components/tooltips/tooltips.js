tippy('[data-tippy-content]');

tippy('[data-template]', {
  content(reference) {
    const id = reference.getAttribute('data-template');
    const template = document.getElementById(id);
    return template.innerHTML;
  },
  allowHTML: true,
  maxWidth: 300,
});