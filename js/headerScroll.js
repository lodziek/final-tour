// --------------- Header Scroll ------------

var header = document.querySelector('.navigation');

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
})