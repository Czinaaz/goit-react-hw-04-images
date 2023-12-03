import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const Modal = ({ image, onClose }) => {
  const onTap = useCallback(
    (event) => {
      if (event.code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  const handleBackDrop = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleCloseButtonClick = () => {
    onClose();
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      onTap(event);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onTap]);

  return (
    <div className={css.backdrop} onClick={handleBackDrop}>
      <div className={css.modal}>
        <button type="button" className={css.buttonMod} onClick={handleCloseButtonClick}>
          X
        </button>
        <img className={css.modalImg} src={image} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export { Modal };
