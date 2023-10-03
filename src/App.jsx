
import React from 'react';
import './App.css';
import {Route ,BrowserRouter as Router , Routes} from 'react-router-dom';
import IndexPage from './Pages/IndexPage/IndexPage';
import CelciusPage from './Pages/CelciusPage/CelciusPage';

function App() {
 
  return (
    <Router>
      <Routes>
        <Route path='/' Component={IndexPage}/>
        <Route path='/celcius' Component={CelciusPage}/>
      </Routes>
    </Router>
  );
}

export default App;
