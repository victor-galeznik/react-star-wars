import styles from './HomePage.module.css';
import ChooseSide from './../../components/HomePage/ChooseSide/ChooseSide';

const HomePage = (props) => {
  return (
    <>
      <h1 className="header__text">Home Page</h1>
      <ChooseSide />
    </>
  );
};

export default HomePage;
