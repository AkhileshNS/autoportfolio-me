// import Home from './Home/Home';
import Portfolio from './Portfolio/Portfolio';

export default [
  {
    path: '/:name',
    component: Portfolio,
  },
  {
    path: '/',
    component: Portfolio,
  },
];
