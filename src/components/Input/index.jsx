import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.scss';

const Input = React.forwardRef(
  ({
    id, className, label, ...attrs
  }, ref) => {
    const classes = classNames(
      'input__control',
      className,
    );
    return (
      <div className="input">
        {label && <label className="input__label" htmlFor={id}>{label}</label>}
        <input
          ref={ref}
          id={id}
          className={classes}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...attrs}
        />
      </div>
    );
  },
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
};

Input.defaultProps = {
  className: '',
  label: '',
};

Input.displayName = 'Input';

export default Input;
