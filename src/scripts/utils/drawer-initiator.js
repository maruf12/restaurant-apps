/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const DrawerInitiator = {
  init({ button, drawer, listMenu }) {
    const navListItems = listMenu;

    function toggleNav() {
      drawer.classList.toggle('nav-open');
    }

    function closeNav() {
      drawer.classList.remove('nav-open');
      drawer.style.transition = 'transform 0.3s';
    }

    button.addEventListener('click', toggleNav);

    navListItems.forEach((item) => {
      item.addEventListener('click', closeNav);
    });

    document.addEventListener('click', (event) => {
      const { target } = event;
      if (!target.closest('.nav') && !target.closest('.nav-toggle-label')) {
        closeNav();
      }
    });
  },
};

export default DrawerInitiator;
