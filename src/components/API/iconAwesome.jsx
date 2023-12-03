import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const IconSearch = () => {
  return (
    <div>
      <p>Finder <FontAwesomeIcon icon={faSearch} /></p>
    </div>
  );
};

export { IconSearch };
