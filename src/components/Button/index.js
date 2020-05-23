import React from 'react';
import './index.scss';
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
      className={className}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  onClick: () => null,
  children: 'Button',
  className: 'button',
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
