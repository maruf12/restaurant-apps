/* eslint-disable no-undef */
const assert = require('assert');

Feature('Favorite Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Add favorite resto', async ({ I }) => {
  I.see('Tidak ada resto favorite', '.resto-favorite__not-found');

  I.amOnPage('/');

  I.waitForElement('.post-item__title a', 2);
  I.seeElement('.post-item__title a');

  const firstResto = locate('.post-item__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');

  const likedFilmTitle = await I.grabTextFrom('.post-item__title');
  assert.strictEqual(firstRestoTitle, likedFilmTitle);
});
