import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.scss';

const Image = ({
  src, alt, className, width, height, ...atrs
}) => {
  const classes = classNames(
    className,
  );

  if (!src) {
    // eslint-disable-next-line no-param-reassign
    src = `https://via.placeholder.com/${width}x${height}`;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={classes}
      width={width}
      height={height}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...atrs}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

Image.defaultProps = {
  src: '',
  alt: 'title image',
  className: '',
  width: 100,
  height: 100,
};

export default Image;
