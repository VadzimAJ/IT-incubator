import logo from './logo.svg';
import './App.css';

const App = ()  => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ReactJS learning page <code>src/App.js</code> and save to reload.
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
      <footer className="App-footer">
        <ul>
          <li className ="App-footer__li">CSS</li>
          <li className ="App-footer__li">HTML</li>
          <li className ="App-footer__li">JS</li>
          <li className ="App-footer__li">REACT</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
