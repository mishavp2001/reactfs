import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          href="/auth/google/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login using Google
        </a>
      </header>
    </div>
  );
}

export default App;
