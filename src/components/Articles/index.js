import React from 'react';
import PropTypes from 'prop-types';
import { sortBy } from 'lodash';
import './index.scss';

import Sort from '../Sort';
import Button from '../Button';

const SORTS = {
  NONE: (list) => list,
  TITLE: (list) => sortBy(list, 'title'),
  AUTHOR: (list) => sortBy(list, 'author'),
  COMMENTS: (list) => sortBy(list, 'num_comments').reverse(),
  POINTS: (list) => sortBy(list, 'points').reverse(),
};

const formatDate = (date) => {
  const pos = date.indexOf('T');
  const dateResult = date.slice(0, pos).split('-').reverse().join('.');
  return dateResult;
};

class Articles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortKey: 'NONE',
      isSortReverse: false,
    };

    this.onSort = this.onSort.bind(this);
  }

  onSort(sortKey) {
    const isSortReverse = this.state.sortKey === sortKey && !this.state.isSortReverse;
    this.setState({ sortKey, isSortReverse });
  }

  render() {
    const { list, onDismiss } = this.props;
    const { sortKey, isSortReverse } = this.state;
    const sortedList = SORTS[sortKey](list);
    const reverseSortedList = isSortReverse ? sortedList.reverse() : sortedList;

    return (
      <div className="articles">
        <ul className="articles__sort">
          <li>
            <Sort
              sortKey="TITLE"
              onSort={this.onSort}
            >
              Title
            </Sort>
          </li>
          <li>
            <Sort
              sortKey="AUTHOR"
              onSort={this.onSort}
            >
              Author
            </Sort>
          </li>
          <li>
            <Sort
              sortKey="COMMENTS"
              onSort={this.onSort}
            >
              Comments
            </Sort>
          </li>
          <li>
            <Sort
              sortKey="POINTS"
              onSort={this.onSort}
            >
              Points
            </Sort>
          </li>
        </ul>
        <ul className="articles__list">
          {reverseSortedList.map((item) => (
            <li
              className="articles__item"
              key={item.objectID}
            >
              <h3 className="articles__title"><a href={item.url}>{item.title}</a></h3>
              <div className="articles__meta">
                <span className="articles__meta-item articles__meta-item--author">{item.author}</span>
                <span className="articles__meta-item">{formatDate(item.created_at)}</span>
                <span className="articles__meta-item">
                  {item.points}
                  &nbsp;points
                </span>
                <span className="articles__meta-item">
                  {item.num_comments}
                  &nbsp;comments
                </span>
              </div>
              <Button
                onClick={() => onDismiss(item.objectID)}
                type="button"
                className="button"
              >
                Dismiss
              </Button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Articles.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDismiss: PropTypes.func.isRequired,
};

export default Articles;
