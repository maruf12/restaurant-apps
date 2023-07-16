import { createRestoListTemplate } from '../templates/template-creator';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Favorite = {
  async render() {
    return `
    <div class="latest">
      <h1 class="latest__label">Cafe Favorit</h1>
      <div class="posts" id="content">
        <!-- Content -->
      </div>
    </div>
    `;
  },

  async afterRender() {
    const favorites = await FavoriteRestoIdb.getAllResto();
    const favoriteContainer = document.querySelector('#content');

    favorites.forEach((item) => {
      favoriteContainer.innerHTML += createRestoListTemplate(item);
    });
  },
};

export default Favorite;
