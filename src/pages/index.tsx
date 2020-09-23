import Home from './Home/Home';
import Portfolio from './Portfolio/Portfolio';

export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/:name',
    component: Portfolio,
  },
];
