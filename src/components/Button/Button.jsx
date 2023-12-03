import React from 'react';
import PropTypes from 'prop-types';
import useButton from './useButton';
import css from './Button.module.css';

const Button = ({ onClick }) => {
  const { buttonText, handleClick } = useButton(onClick);

  return (
    <button className={css.loadButton} type="button" onClick={handleClick}>
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export { Button };
