import ErrorMessage from '../components/ErrorMessage';
import FavoritePage from '../containers/FavoritePage/FavoritePage';
import HomePage from '../containers/HomePage';
import NotFoundPage from '../containers/NotFoundPage';
import PeoplePage from '../containers/PeoplePage';
import PersonPage from '../containers/PersonPage/PersonPage';
import SearchPage from '../containers/SearchPage/SearchPage';

const routesConfig = [
  {
    path: '/',
    exact: true,
    element: HomePage,
  },
  {
    path: '/people',
    exact: true,
    element: PeoplePage,
  },
  {
    path: '/people/:id',
    exact: true,
    element: PersonPage,
  },
  {
    path: '/favorites',
    exact: true,
    element: FavoritePage,
  },
  {
    path: '/search',
    exact: true,
    element: SearchPage,
  },
  {
    path: '/fail',
    exact: true,
    element: ErrorMessage,
  },
  {
    path: '/not-found',
    exact: true,
    element: NotFoundPage,
  },
  {
    path: '*',
    exact: false,
    element: NotFoundPage,
  },
];

export default routesConfig;
