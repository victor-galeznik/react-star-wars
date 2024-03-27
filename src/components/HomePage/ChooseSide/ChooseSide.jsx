import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './ChooseSide.module.css';
import {
  THEME_DARK,
  THEME_LIGHT,
  THEME_NEUTRAL,
  useTheme,
} from '../../../context/ThemeProvider';

import lightSideImg from './img/light-side.jpg';
import darkSideImg from './img/dark-side.jpg';
import falconImg from './img/falcon.jpg';

const ChooseSideItem = ({ classes, theme, text, img }) => {
  const isTheme = useTheme();

  return (
    <div
      className={cn(styles.item, classes)}
      onClick={() => isTheme.change(theme)}
    >
      <div className={styles.item__header}>{text}</div>
      <img className={styles.item__img} src={img} alt={text} />
    </div>
  );
};

ChooseSideItem.propTypes = {
  theme: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
  classes: PropTypes.string,
};

const ChooseSide = () => {
  const elements = [
    {
      theme: THEME_LIGHT,
      text: 'Light Side',
      img: lightSideImg,
      classes: styles.item__light,
    },
    {
      theme: THEME_DARK,
      text: 'Dark Side',
      img: darkSideImg,
      classes: styles.item__dark,
    },
    {
      theme: THEME_NEUTRAL,
      text: "I'm Han Solo",
      img: falconImg,
      classes: styles.item__neutral,
    },
  ];

  return (
    <div className={styles.container}>
      {elements.map(({ theme, text, img, classes }, index) => (
        <ChooseSideItem
          key={index}
          theme={theme}
          text={text}
          img={img}
          classes={classes}
        />
      ))}
    </div>
  );
};

export default ChooseSide;
