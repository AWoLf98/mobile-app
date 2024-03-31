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
  if (window.innerWidth <= 768) {
    refs.listNav.classList.add('visually-hidden');
  } else {
    refs.menu.classList.remove('is-open');
    refs.listNav.classList.remove('visually-hidden');
  }
}

function openModal() {

}

// function findPath(mountain) {
//   let count = 0;
//   let indexNaighbor = 0;
//   return mountain.reduce((accumulator, currentValue, i) => {
//     if(Array.isArray(currentValue)) {
//       return count += findPath(currentValue);
//     }

//     if(accumulator < currentValue && (i === indexNaighbor || 1 - i === indexNaighbor) ){
//       // if(indexNaighbor)
//     	accumulator = currentValue;
//       indexNaighbor = i;
//       console.log(`accumulator: ${accumulator} indexNaighbor:${indexNaighbor}`);
//     }
// 		return accumulator;
//   }, -1);
// }

// //[6], [7,10], [12,11,9], [90,25,13,14]]
// console.log(findPath([[6], [7,10], [12,11,9], [90,25,13,14]]));

// // console.log(count);
