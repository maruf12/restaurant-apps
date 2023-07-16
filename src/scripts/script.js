document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav-toggle-label');
  const navListItems = document.querySelectorAll('.nav-list li a');

  function toggleNav() {
    nav.classList.toggle('nav-open');
    navToggle.classList.toggle('active');
  }

  function closeNav() {
    nav.classList.remove('nav-open');
    nav.style.transition = 'transform 0.3s';
    navToggle.classList.remove('active');
  }

  navToggle.addEventListener('click', toggleNav);
  navToggle.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleNav();
    }
  });

  navListItems.forEach((item) => {
    item.addEventListener('click', closeNav);
  });

  document.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.closest('.nav') && !target.closest('.nav-toggle-label')) {
      closeNav();
    }
  });
});
