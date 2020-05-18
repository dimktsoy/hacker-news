import React from 'react';
import './Search.scss';
import PropTypes from 'prop-types';

function Search({
  value,
  onSubmit,
  onChange,
  children,
}) {
  return (
    <form
      className="search"
      onSubmit={onSubmit}
    >
      <input
        className="search__control"
        type="text"
        value={value}
        onChange={onChange}
      />
      <button
        className="search__btn"
        type="submit"
      >
        {children}
      </button>
    </form>
  );
}

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Search;
