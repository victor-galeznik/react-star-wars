import PropTypes from 'prop-types';
import './../index.css';
import styles from './UiButton.module.css';
import cn from 'classnames';

const UiButton = ({ text, onClick, disabled, theme = 'dark', classes }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(styles.button, styles[theme], classes)}
    >
      {text}
    </button>
  );
};

UiButton.propTypes = {
  text: PropTypes.string,
  theme: PropTypes.string,
  classes: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default UiButton;
