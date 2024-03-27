const refs = {
  isOpenClose: document.querySelector('.menu-button'),
  menu:  document.querySelector('.header-container'),
}

refs.isOpenClose.addEventListener('click', openMenu);

function openMenu() {
  refs.menu.classList.toggle('is-open');
}