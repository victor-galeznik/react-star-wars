import PropTypes from 'prop-types';
import styles from './PersonPhoto.module.css';
import { useDispatch } from 'react-redux';
import {
  removePersonFromFavorite,
  setPersonToFavorite,
} from './../../../store/actions/index';

import iconFavorite from './img/favorite.svg';
import iconFavoriteFill from './img/favorite-fill.svg';

const PersonPhoto = ({
  personPhoto,
  personName,
  personId,
  personFavorite,
  setPersonFavorite,
}) => {
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId));
      setPersonFavorite(false);
    } else {
      dispatch(
        setPersonToFavorite({
          [personId]: {
            name: personName,
            img: personPhoto,
          },
        }),
      );
      setPersonFavorite(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt={personName} />
        <img
          src={personFavorite ? iconFavoriteFill : iconFavorite}
          alt="add to favorite"
          className={styles.favorite}
          onClick={dispatchFavoritePeople}
        />
      </div>
    </>
  );
};

PersonPhoto.propTypes = {
  personName: PropTypes.string,
  personPhoto: PropTypes.string,
  personId: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
};

export default PersonPhoto;
