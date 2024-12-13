// const tabsPhotographies = document.querySelectorAll('.photography__tabs li');

// async function loadModule() {
//   if (tabsPhotographies) {
//     const { initTabs } = await import('./modules/tabs.js');
//     initTabs();
//   }
// }
// loadModule();

const navMain = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');

navMain.classList.remove('nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
  }
});

