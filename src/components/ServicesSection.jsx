import React from 'react'

function ServicesSection({image, title, text}) {
    return (
      <div className="ServicesSection">
        <div className="service">
          <img src={image} alt="" />
          <h5 className="s-title">{title}</h5>
          <p className="s-text">
            {text}
          </p>
        </div>
      </div>
    );
}

export default ServicesSection
