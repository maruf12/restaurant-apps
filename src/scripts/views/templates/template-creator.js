import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestoDetailTemplate = (item) => `
  <h2 class="resto-detail__title">${item.name}</h2>
  <img class="resto-detail__poster lazyload" src="${CONFIG.BASE_IMAGE_URL}/${item.pictureId}" alt="${item.name}" />
  <div class="resto-detail__info">
    <h3>Information</h3>
    <h4>Alamat</h4>
    <p>${item.address}</p>
    <h4>Kota</h4>
    <p>${item.city}</p>
    <h4>Menu Makanan</h4>
    <div>${item.menus.foods.map((food) => `<p>${food.name}</p>`).join('')}</div>
    <h4>Menu Minuman</h4>
    <div>${item.menus.drinks.map((drink) => `<p>${drink.name}</p>`).join('')}</div>
    <h4>Customer Review</h4>
    <div>${item.customerReviews.map((element) => `<p>${element.name}: ${element.review}</p>`).join('')}</div>
  </div>
  <div class="resto-detail__overview">
    <h3>Deskripsi</h3>
    <p>${item.description}</p>
  </div>
`;

const createRestoListTemplate = (item) => `
  <article class="post-item">
  <img class="post-item__thumbnail lazyload"
    src="${CONFIG.BASE_IMAGE_URL}/${item.pictureId}"
    alt="${item.name}"
    height="280">
  <div class="post-item__content">
    <p class="post-item__city">${item.city}</p>
    <h1 class="post-item__title"><a href="/#/detail/${item.id}">${item.name}</a></h1>
    <p class="post-item__description">${item.description}</p>
    <a href="/#/detail/${item.id}">
      <button class="favorite-button favorite-button__like">Detail</button>
    </a>
  </div>
  </article>
`;

const createLikeButtonTemplate = () => `
  <button id="likeButton" class="favorite-button favorite-button__like">Tambahkan Favorit</button>
`;

const createLikedButtonTemplate = () => `
  <button id="likeButton" class="favorite-button favorite-button__liked">Hapus Favorit</button>
`;

export {
  createRestoListTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
