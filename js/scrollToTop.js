// --------------- Scroll To Top ------------------
const btn = document.querySelector('.up-arrow');

window.onscroll = function(){
  if(this.scrollY >= 700){
    btn.classList.add('active');
  } else {
    btn.classList.remove('active');
  }
}

btn.onclick = function(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};