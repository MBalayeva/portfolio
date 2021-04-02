import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
    return (
      <div className="ImageSection">
        <div className="img">
          <img src={about} alt="" />
        </div>
        <div className="about-info">
          <h4>
            I'm <span>Lorem Ipsum</span>
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            aliquet lacinia venenatis. Sed nec risus ex. Cras pharetra eros
            tristique viverra posuere.
          </p>
          <div className="about-details">
            {/* <div className="left-section">
              <p>Full Name</p>
              <p>Age</p>
              <p>Nationality</p>
              <p>Languages</p>
              <p>Address</p>
              <p>Countries</p>
            </div>
            <div className="right-section">
              <p>: Lorem Ipsum</p>
              <p>: 50</p>
              <p>: French</p>
              <p>: French, Spanish, English</p>
              <p>: 2 Beightbridge, BN7 GB9, United kingdom</p>
              <p>: France, Spain, Germany</p>
            </div> */}
            <div className="about-details-item">
              <p>Full Name: </p>
              <p>Lorem Ipsum</p>
            </div>
            <div className="about-details-item">
              <p>Age: </p>
              <p>50</p>
            </div>
            <div className="about-details-item">
              <p>Languages: </p>
              <p> French, Spanish, English</p>
            </div>
            <div className="about-details-item">
              <p>Address: </p>
              <p> 2 Beightbridge, BN7 GB9, United kingdom</p>
            </div>
            <div className="about-details-item">
              <p>Countries:</p>
              <p>France, Spain, Germany</p>
            </div>
          </div>
          <button className="btn">download cv</button>
        </div>
      </div>
    );
}

export default ImageSection
