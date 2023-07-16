import RestoDbSource from '../../data/restodb-source';
import { createRestoListTemplate } from '../templates/template-creator';

const ListResto = {
  async render() {
    return `
    <div class="latest">
      <h1 class="latest__label">Daftar Cafe</h1>
      <div class="posts" id="content">
        <!-- Content -->
      </div>
    </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const dataListResto = await RestoDbSource.getListResto();
    const listContainer = document.querySelector('#content');
    dataListResto.forEach((data) => {
      listContainer.innerHTML += createRestoListTemplate(data);
    });
  },
};

export default ListResto;
