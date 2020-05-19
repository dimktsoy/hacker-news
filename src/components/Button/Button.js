import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

function Button({
  type,
  onClick,
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

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
  children: 'Button',
  className: '',
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
