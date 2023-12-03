import { useState } from 'react';
import PropTypes from 'prop-types';


const useButton = (onClick) => {
  const [buttonText, setButtonText] = useState('Load more');

  const handleClick = () => {
    setButtonText('Loading...'); // Zmiana tekstu przycisku na "Loading" po kliknięciu
    onClick();
  };

  return { buttonText, handleClick };
};


useButton.propTypes = {
    onClick: PropTypes.func.isRequired,
  };

export default useButton;
