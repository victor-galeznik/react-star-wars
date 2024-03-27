import PeoplePage from './../PeoplePage/PeoplePage';
import HomePage from '../HomePage';
import { NavLink, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import routesConfig from './../../routes/routesConfig';
import Header from '../../components/Header/Header';

const App = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <Routes>
          {routesConfig.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={<route.element />}
              />
            );
          })}
        </Routes>
      </div>
    </>
  );
};

export default App;
