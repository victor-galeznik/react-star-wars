import PropTypes from 'prop-types';
import styles from './UiInput.module.css';
import cn from 'classnames';
import '../index.css';
import cancelIcon from './img/cancel.svg';

const UiInput = ({ value, handleInputChange, placeholder, classes }) => {
  return (
    <div className={cn(styles.wrapper__input, classes)}>
      <input
        type="text"
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
      />
      <img
        className={cn(styles.clear, !value && styles.clear__disabled)}
        src={cancelIcon}
        alt="Clear"
        onClick={() => value && handleInputChange('')}
      />
    </div>
  );
};

UiInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  classes: PropTypes.string,

  handleInputChange: PropTypes.func,
};

export default UiInput;
