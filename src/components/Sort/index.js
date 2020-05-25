import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

function Sort({
  onSort, sortKey, children, activeSortKey,
}) {
  return (
    <Button
      type="button"
      className="button"
      onClick={() => onSort(sortKey)}
    >
      {children}
    </Button>
  );
}

Sort.propTypes = {
  onSort: PropTypes.func,
  sortKey: PropTypes.string,
  children: PropTypes.node,
  activeSortKey: PropTypes.string,
};

export default Sort;
