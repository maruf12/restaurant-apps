import { createRestoListTemplate, favoriteEmptyTemplate } from '../templates/template-creator';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Favorite = {
  async render() {
    return `
    <div class="latest">
      <h1 class="latest__label">Cafe Favorit</h1>
      <div id="content">
        <!-- Content -->
      </div>
    </div>
    `;
  },

  async afterRender() {
    const favorites = await FavoriteRestoIdb.getAllResto();
    const favoriteContainer = document.querySelector('#content');

    if (!favorites.length) {
      favoriteContainer.innerHTML = favoriteEmptyTemplate();
      return;
    }

    favoriteContainer.classList.add('posts');
    favorites.forEach((item) => {
      favoriteContainer.innerHTML += createRestoListTemplate(item);
    });
  },
};

export default Favorite;
