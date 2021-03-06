import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import styles from './App.module.scss';

class App extends Component {
  render() {
    console.log(styles)

    return (
      <BrowserRouter>
        <div className={styles.App}>
          <header className={styles['App-header']}>
            <img src={logo} className={styles['App-logo']} alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className={styles['App-link']}
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
