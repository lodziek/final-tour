// ------------- Hamburger Button -----------

const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.onclick = function(clickEvent) {
  if(clickEvent.target.classList !== 'navbar' && clickEvent.target.id !== 'menu-icon'){
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
  }
}