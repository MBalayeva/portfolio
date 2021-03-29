import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
      <div className="Homepage">
        <header className="hero">
          <h1 className="hero-text">
            Hi, my name is <span>Lorem Ipsum</span>
          </h1>
          <p className="h-sub-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            aliquet lacinia venenatis. Sed nec risus ex. Cras pharetra eros
            tristique viverra posuere. Sed vitae libero nec lacus iaculis
            mollis. Vivamus ut urna eu enim vehicula scelerisque ut non ex.
            Maecenas dictum efficitur sapien non bibendum. Nam rhoncus efficitur
            erat, id faucibus turpis maximus et. Nullam sagittis venenatis massa
            ac semper.
          </p>
          <div className="icons">
            <Link to="test" className="icon-holder">
              <FontAwesomeIcon icon={faFacebook} className="icon" />
            </Link>
            <Link to="test" className="icon-holder">
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </Link>
            <Link to="test" className="icon-holder">
              <FontAwesomeIcon icon={faYoutube} className="icon" />
            </Link>
          </div>
        </header>
      </div>
    );
}

export default HomePage