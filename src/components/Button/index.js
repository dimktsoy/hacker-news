import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

function Button({
  type = 'button',
  onClick = () => {},
  children,
  className,
}) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={`button ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
