import { useLocation } from 'react-router';
import styles from './NotFoundPage.module.css';
import img from './img/not-found.png';

const NotFoundPage = (props) => {
  let location = useLocation();

  return (
    <>
      <img className={styles.img} src={img} alt="404 not found" />
      <p className={styles.text}>
        No match for <u>{location.pathname}</u>
      </p>
    </>
  );
};

export default NotFoundPage;
