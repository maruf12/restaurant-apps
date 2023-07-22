/* eslint-disable import/prefer-default-export */
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createFavoriteButtonPresenterWithResto = async (content) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    content,
  });
};

export { createFavoriteButtonPresenterWithResto };
