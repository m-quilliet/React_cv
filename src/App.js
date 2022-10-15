import logo from './logo.svg';
import './App.css';
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Maybelline QUILLIET</p>
      </header>
      <NavBar/>
    </div>
  );
}

export default App;
