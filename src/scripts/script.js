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

// fetching and displaying data
const baseUrl = 'https://restaurant-api.dicoding.dev';
const content = document.querySelector('#content');
let movies = null;

async function getResto() {
  const response = await fetch(`${baseUrl}/list`);
  movies = await response.json();
}

function getDetail(item) {
  document.querySelector('.detail-button').addEventListener('click', async () => {
    const response = await fetch(`${baseUrl}/detail/${item.id}`);
    const detailMovie = await response.json();
    console.log(detailMovie);
    // window.location.href('https://google.com');
    // eslint-disable-next-line no-restricted-globals
    location.replace('/detail');
  });
}

function displayListData() {
  movies.restaurants.forEach((item) => {
    const testing = `
    <article class="post-item">
    <img class="post-item__thumbnail"
      src="${baseUrl}/images/medium/${item.pictureId}"
      alt="${item.name}"
      height="280">
    <div class="post-item__content">
      <p class="post-item__city">${item.city}</p>
      <h1 class="post-item__title"><a href="#" tabindex="5">${item.name}</a></h1>
      <p class="post-item__description">${item.description}</p>
      <button class="detail-button">Detail</button>
    </div>
    </article>
    `;
    content.insertAdjacentHTML('afterbegin', testing);
    getDetail(item);
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  await getResto();
  displayListData();
});
