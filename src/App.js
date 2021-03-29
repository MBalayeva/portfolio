import './App.scss';
import React, { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PortfoliosPage from './pages/PortfoliosPage'
import BlogsPage from './pages/BlogsPage'
import ContactsPage from './pages/ContactsPage'

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Navbar />
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
