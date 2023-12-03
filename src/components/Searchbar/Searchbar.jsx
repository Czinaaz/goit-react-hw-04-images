import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import css from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handlerInput = (event) => {
    const {value } = event.target;
    setQuery(value);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();

    if (!query.trim()) {
      toast.error('empty field', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={css.header}>
      <div className={css.cziSearch}>
        <div>
          Czinaaz <span>Search</span>
        </div>
      </div>
      <form onSubmit={handlerSubmit}>
        <button className={css.button} type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>

        <input
          className={css.input}
          type="text"
          name="query"
          value={query}
          autoComplete="off"
          onChange={handlerInput}
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { Searchbar };

