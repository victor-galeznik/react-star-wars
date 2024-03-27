import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import Favorite from '../Favorite/Favorite';
import droidImg from './img/droid.svg';
import lightsaberImg from './img/lightsaber.svg';
import spaceStationImg from './img/space-station.svg';
import {
  THEME_DARK,
  THEME_LIGHT,
  THEME_NEUTRAL,
  useTheme,
} from '../../context/ThemeProvider';

import { useEffect, useState } from 'react';

const Header = (props) => {
  const [icon, setIcon] = useState(spaceStationImg);

  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(lightsaberImg);
        break;
      case THEME_DARK:
        setIcon(droidImg);
        break;
      case THEME_NEUTRAL:
        setIcon(spaceStationImg);
        break;

      default:
        setIcon(spaceStationImg);
    }
  }, [isTheme]);

  return (
    <div className={styles.container}>
      {/* <img className={styles.logo} src={icon} alt="Logo icon" /> */}

      <Link to="/">
        <img className={styles.logo} src={icon} alt="Logo icon" />
      </Link>

      <ul className={styles.list__container}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=1">People</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        <li>
          <NavLink to="/not-found">Not Found</NavLink>
        </li>
        <li>
          <NavLink to="/fail">Fail</NavLink>
        </li>
      </ul>

      <Favorite />
    </div>
  );
};

export default Header;
