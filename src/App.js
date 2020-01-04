import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import Nav from './Component/Nav/Nav';
import HomePage from './Page/HomePage';
import AboutPage from './Page/AboutPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Route exact path='/'>
          <HomePage/>
        </Route>
        <Route path='/about'>
          <AboutPage/>
        </Route>
     
      </Router>
    </div>
  );
}

export default App;
