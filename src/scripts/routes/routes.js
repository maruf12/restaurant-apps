import Detail from '../views/pages/detail';
import ListResto from '../views/pages/list-resto';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': ListResto,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
