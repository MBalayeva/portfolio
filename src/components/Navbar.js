import React from 'react'
import { NavLink } from 'react-router-dom';
import avatar from '../img/avatar.png';

function Navbar({showNav}) {
    return (
      <div className="Navbar">
        <nav className="navbar">
          <div className="profile">
            <img src={avatar} className="profile-pic" alt="avatar" />
          </div>
          <ul className="navbar-items">
            <li className="navbar-item">
              <NavLink to="/" exact activeClassName="active" onClick={showNav}>
                Home
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/about" exact activeClassName="active" onClick={showNav}>
                About
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/portfolios" exact activeClassName="active" onClick={showNav}>
                Portfolios
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/blogs" exact activeClassName="active" onClick={showNav}>
                Blogs
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/contacts" exact activeClassName="active" onClick={showNav}>
                Contacts
              </NavLink>
            </li>
          </ul>
          <footer className='footer'>
              <p>
                  @2021 LoremIpsum
              </p>
          </footer>
        </nav>
      </div>
    );
}

export default Navbar
