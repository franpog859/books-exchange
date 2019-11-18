import React from 'react';
import logo from './logo.svg';
import './App.css';

export class App extends React.Component {
  state = {
    message: "empty"
  };

  componentDidMount() {
    fetch("http://localhost:3001/hello")
      .then(res => res.json())
      .then(json => {
        this.setState({ message: json.message })
        console.log(this.state.message)
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            Books Exchange server message: {this.state.message}
          </p>
          <p>
            It should be something like "Hello" there!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
