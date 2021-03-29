import React from 'react'
import { NavLink } from 'react-router-dom';
import avatar from '../img/avatar.png';

function Navbar() {
    return (
      <div className="Navbar">
        <nav className="navbar">
          <div className="profile">
            <img src={avatar} className="profile-pic" alt="avatar" />
          </div>
          <ul className="navbar-items">
            <li className="navbar-item">
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/about" exact activeClassName="active">
                About
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/portfolios" exact activeClassName="active">
                Portfolios
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/blogs" exact activeClassName="active">
                Blogs
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/contacts" exact activeClassName="active">
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
