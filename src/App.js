import './App.css';
import {Custnavbar} from "./components/Custnav/Custnavbar.js";

import {Header} from './components/Head/Header.js';

import 'bootstrap/dist/css/bootstrap.min.css';
// import {Aboutme} from "./components/About/Aboutme";


function App() {
  return (
    <div className="App">
      

      <Header/>
      <Custnavbar/>

      
    </div>
  );
}

export default App;
