import React from 'react';
import './App.scss';
import Articles from './components/Articles/Articles';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
    };
  }

  componentDidMount() {
    fetch('http://hn.algolia.com/api/v1/search?query=react')
      .then((response) => response.json())
      .then((result) => this.setState({ result }));
  }

  render() {
    const { result } = this.state;

    if (!result) {
      return null;
    }

    return (
      <div className="app">
        <header className="app__header">
          <div className="app__container">
            header
          </div>
        </header>
        <div className="app__content">
          <div className="app__container">
            <Articles list={result.hits} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
