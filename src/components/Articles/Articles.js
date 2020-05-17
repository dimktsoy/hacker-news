import React from 'react';
import './Articles.scss';
import { arrayOf, object } from 'prop-types';

const formatDate = (date) => {
  const pos = date.indexOf('T');
  const dateResult = date.slice(0, pos).split('-').reverse().join('.');
  return dateResult;
};

function Articles({ list }) {
  return (
    <ul className="articles">
      {list.map((item) => (
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
        </li>
      ))}
    </ul>
  );
}

Articles.propTypes = {
  list: arrayOf(object).isRequired,
};

export default Articles;
