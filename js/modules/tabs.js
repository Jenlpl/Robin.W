export function initTabs() {
  const tabs = document.querySelectorAll('.photography__tabs li');
  const tabContent = document.querySelectorAll('.photography__content ol');

  function resetClass() {
    tabs.forEach((tab, index) => {
      tab.classList.remove('active-tab');
      tabContent[index].classList.remove('active-picture');
    })
  };

  tabs.forEach((tab, index) => {
    tab.firstElementChild.addEventListener('click', () => {
      resetClass();
      tabContent[index].classList.toggle('active-picture')
      tab.classList.toggle('active-tab')
    })
  })
}