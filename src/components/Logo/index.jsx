import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from '../Image';

import './index.scss';

const Logo = ({
  className, href, ...atrs
}) => {
  const classes = classNames(
    'logo',
    className,
  );

  const Tag = href ? 'a' : 'div';

  return (
    <Tag
      className={classes}
      href={href || null}
    >
      <Image
        className="logo__image"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...atrs}
      />
    </Tag>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  src: PropTypes.string,
};

Logo.defaultProps = {
  className: '',
  href: '',
  src: '',
};

export default Logo;
