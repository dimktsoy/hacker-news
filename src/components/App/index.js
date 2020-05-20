import React from 'react';
import './index.scss';
import Articles from '../Articles';
import Search from '../Search';
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
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
      .then((response) => response.json())
      .then((result) => this.setSearchTopStories(result))
      .catch((error) => error);
  }

  render() {
    const { result, searchTerm, isLoading } = this.state;
    const page = (result && result.page) || 0;

    return (
      <div className="app">
        <header className="app__header">
          <div className="app__container">
            <Search
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
            { result && (
              <Articles
                list={result.hits}
                onDismiss={this.onDismiss}
                onShowMore={() => this.fetchSearchTopStories(searchTerm, page + 1)}
                isLoading={isLoading}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
