import './App.scss';
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PortfoliosPage from './pages/PortfoliosPage'
import BlogsPage from './pages/BlogsPage'
import ContactsPage from './pages/ContactsPage'

function App() {
  const [navToggle, setNavToggle] = useState(false);
  const [navBtn, setNavBtn] = useState(false);
  const showNav = () => {
    setNavToggle(!navToggle);
    setNavBtn(!navBtn);
  }

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'show-nav' : ''}`}>
        <Navbar showNav={showNav} />
      </div>
      <div className={`nav-btn ${navBtn ? 'nav-close-btn' : ''}`} onClick={showNav}>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>
      <div className="main-content">
        <div className="content">
            <Switch>
              <Route path='/' exact><HomePage /></Route>
            </Switch>
            <Switch>
              <Route path='/about' exact><AboutPage /></Route>
            </Switch>
            <Switch>
              <Route path='/portfolios' exact><PortfoliosPage /></Route>
            </Switch>
            <Switch>
              <Route path='/blogs' exact><BlogsPage /></Route>
            </Switch>
            <Switch>
              <Route path='/contacts' exact><ContactsPage /></Route>
            </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
