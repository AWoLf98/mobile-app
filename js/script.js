const refs = {
  header: document.querySelector('.header'),
  isOpenCloseMenu: document.querySelector('.menu-button'),
  listNav: document.querySelector('.header-list-url'),
  menu: document.querySelector('.header-container'),
};

resizeWindow();

window.addEventListener('resize', resizeWindow);

refs.listNav.addEventListener('click', e => {
  if(e.target.nodeName  === 'A' && window.innerWidth <= 768) {
    refs.menu.classList.remove('is-open');
    refs.header.classList.remove('is-hidden');
    refs.listNav.classList.add('visually-hidden');
  }
});

refs.isOpenCloseMenu.addEventListener('click', openMenu);

function openMenu() {
  refs.menu.classList.toggle('is-open');
  refs.header.classList.toggle('is-hidden');
  if (refs.menu.classList.contains('is-open')) {
    refs.listNav.classList.remove('visually-hidden');
  } else {
    refs.listNav.classList.add('visually-hidden');
  }
}

function resizeWindow() {
  if (window.innerWidth <= 768 && !refs.menu.classList.contains('is-open')) {
    refs.listNav.classList.add('visually-hidden');
  } else {
    refs.header.classList.remove('is-hidden');
    refs.menu.classList.remove('is-open');
    refs.listNav.classList.remove('visually-hidden');
  }
}

function openModal() {

}