import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <div className="section-header">
      <h2>Welcome to my first react APP</h2>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>This paragraph to create a valid change</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
