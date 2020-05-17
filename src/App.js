import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
    };
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
            content
          </div>
        </div>
      </div>
    );
  }
}

export default App;
