import './App.css';
import {Custnavbar} from "./components/Custnav/Custnavbar.js";
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
// import {Header} from './components/Head/Header';
// import Me from './components/About/Aboutme';
// import Services from './components/Service/Services';
// import Tool from './components/Tools/Tool';




function App() {
  return (
    <Router>       
        <Custnavbar/>
          {/* <Routes>
            <Route exact path='/' element={<Header/>} />
            <Route path='/about' element={<Me/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/tool' element={<Tool/>} />
          </Routes> */}
    </Router>    
  );
}

export default App;
