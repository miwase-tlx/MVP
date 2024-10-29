// import logo from './logo.svg';
import './App.css';
import React from 'react';
import ThalexMVPCalculator from './components/ThalexMVPCalculator';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <ErrorBoundary>
        <ThalexMVPCalculator />
      </ErrorBoundary>
      <p>
      This dashboard shows indicative volume for each product, for relevant trading days start and stop at 8am UTC. Note that the volumes shown on this page can lag behind actual trading volume, and are for indicative purposes only.
      </p>
    </div>
  );
}

export default App;
