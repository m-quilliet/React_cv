import logo from './logo.svg';
import './App.css';
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Maybelline QUILLIET</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          maybelline cv
        </a>
      </header>
      <NavBar/>
    </div>
  );
}

export default App;
