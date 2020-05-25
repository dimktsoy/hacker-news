import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

import Button from '../Button';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.inputReft = React.createRef();
  }

  componentDidMount() {
    if (this.inputReft.current) {
      this.inputReft.current.focus();
    }
  }

  render() {
    const { value, onSubmit, onChange } = this.props;

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
          ref={this.inputReft}
        />
        <Button
          className="button button--primary"
          type="submit"
        >
          Search
        </Button>
      </form>
    );
  }
}

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Search;
