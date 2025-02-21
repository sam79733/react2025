import logo from './logo.svg';
import './App.css';
import Footer from './Footer';

function Header() {
  return (
    <header className="App-header">
      <h3>Welcome to React JS 2025</h3>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <div className="product-container">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>lorem ipsum</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default App;
