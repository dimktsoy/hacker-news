import React from 'react';
import './App.scss';
import Articles from './components/Articles/Articles';
import Search from './components/Search/Search';

const DEFAULT_QUERY = 'react';
const DEFAULT_HPP = '10';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
const PARAM_HPP = 'hitsPerPage=';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY,
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  componentDidMount() {
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
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
    this.setState({
      result,
    });
  }

  fetchSearchTopStories(searchTerm, page = 0) {
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
      .then((response) => response.json())
      .then((result) => this.setSearchTopStories(result))
      .catch((error) => error);
  }

  render() {
    const { result, searchTerm } = this.state;

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
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
