/* eslint-disable no-undef */
const assert = require('assert');

Feature('Favorite Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Remove favorite resto', async ({ I }) => {
  I.see('Tidak ada resto favorite', '.resto-favorite__not-found');

  I.amOnPage('/');

  I.waitForElement('.post-item__title a', 4);
  I.seeElement('.post-item__title a');

  const firstResto = locate('.post-item__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForElement('#likeButton', 2);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');

  const favoriteRestoTitle = await I.grabTextFrom('.post-item__title');
  assert.strictEqual(firstRestoTitle, favoriteRestoTitle);

  const firstRestoFavorite = locate('.post-item__title a').first();
  I.click(firstRestoFavorite);

  I.seeElement('#likeButton', '[aria-label="unlike this resto"]');
  I.click('#likeButton');
  I.seeElement('#likeButton', '[aria-label="like this resto"]');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada resto favorite', '.resto-favorite__not-found');
});
