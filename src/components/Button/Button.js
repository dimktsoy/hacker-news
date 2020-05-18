import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

function Button({ onClick, children }) {
  return (
    <button
      className="button"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
