import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button';
import Input from '../Input';

import './index.scss';

const Search = ({
  value, onSubmit, onChange, className,
}) => {
  const inputReft = useRef(null);
  useEffect(() => {
    if (inputReft.current) {
      inputReft.current.focus();
    }
  });

  const classes = classNames(
    'search',
    className,
  );

  return (
    <form
      className={classes}
      onSubmit={onSubmit}
    >
      <div className="search__input-wrap">
        <Input
          ref={inputReft}
          id="search"
          type="text"
          value={value}
          onChange={onChange}
        />
      </div>
      <Button
        className="button--primary"
        type="submit"
      >
        Search
      </Button>
    </form>
  );
};

Search.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

Search.defaultProps = {
  className: '',
  value: '',
  onChange: () => {},
  onSubmit: () => {},
};

export default Search;
