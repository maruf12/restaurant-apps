import FavoriteRestoIdb from '../data/favorite-resto-idb';
import { createFavoriteRestoButtonTemplate, createUnfavoriteRestoButtonTemplate } from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, content }) {
    this._likeButtonContainer = likeButtonContainer;
    this._content = content;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._content;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const resto = await FavoriteRestoIdb.getResto(id);
    return !!resto;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createFavoriteRestoButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putResto(this._content);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnfavoriteRestoButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteResto(this._content.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
