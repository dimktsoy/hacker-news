import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Articles from '../Articles';
import Search from '../Search';
import Button from '../Button';
import Logo from '../Logo';
import LogoImage from '../../images/logo.png';

import './index.scss';

import {
  DEFAULT_QUERY,
  DEFAULT_HPP,
  DEFAULT_PAGE,
  PATH_BASE,
  PATH_SEARCH,
  PARAM_SEARCH,
  PARAM_PAGE,
  PARAM_HPP,
} from '../../constants';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY,
      isLoading: false,
      error: null,
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  componentDidMount() {
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm, DEFAULT_PAGE);
  }

  onSearchChange(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  onSearchSubmit(event) {
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
    event.preventDefault();
  }

  onDismiss(id) {
    const { result } = this.state;
    const isNotID = (item) => item.objectID !== id;
    const updatedList = result.hits.filter(isNotID);
    this.setState({
      result: { ...result, hits: updatedList },
    });
  }

  setSearchTopStories(result) {
    const { hits, page } = result;
    const { result: prevResult } = this.state;
    const oldHits = page !== 0 ? prevResult.hits : [];
    const updatedList = [...oldHits, ...hits];
    this.setState({
      result: {
        hits: updatedList,
        page,
      },
      isLoading: false,
    });
  }

  fetchSearchTopStories(searchTerm, page = 0) {
    this.setState({ isLoading: true });
    axios(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
      .then((result) => this.setSearchTopStories(result.data))
      .catch((error) => this.setState({ error }));
  }

  render() {
    const {
      result,
      searchTerm,
      isLoading,
      error,
    } = this.state;
    const page = (result && result.page) || 0;
    const list = (result && result.hits) || [];

    return (
      <div className="app">
        <header className="app__header">
          <div className="app__container app__container--d-flex">
            <Logo
              className="app__header-logo"
              src={LogoImage}
              href="/"
              alt="Hacker News"
              width={94}
              height={40}
            />
            <Search
              className="app__header-form"
              value={searchTerm}
              onChange={this.onSearchChange}
              onSubmit={this.onSearchSubmit}
            >
              Search
            </Search>
          </div>
        </header>
        <div className="app__content">
          <div className="app__container">
            { error
              ? <h2>Something went wrong!</h2>
              : (
                <Articles
                  list={list}
                  onDismiss={this.onDismiss}
                />
              )}
          </div>
          <div className="app__bottom">
            { isLoading
              ? <FontAwesomeIcon icon={faSpinner} size="lg" spin />
              : (
                <Button
                  onClick={() => this.fetchSearchTopStories(searchTerm, page + 1)}
                  className="button--primary"
                  type="button"
                >
                  More
                </Button>
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
