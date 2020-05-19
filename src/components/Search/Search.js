import React from 'react';
import './Search.scss';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

function Search({
  value,
  onSubmit,
  onChange,
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
      <Button
        className="button--primary"
        type="submit"
      >
        Search
      </Button>
    </form>
  );
}

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Search;