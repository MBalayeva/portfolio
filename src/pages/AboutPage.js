import React from 'react';
import ImageSection from '../components/ImageSection';
import SkillsSection from '../components/SkillsSection';
import ServicesSection from '../components/ServicesSection';
import Title from '../components/Title';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
      <div className="About">
        <Title span="about me" title="about me" />
        <ImageSection />
        <Title span="skills" title="skills" />

          <div className="row">
            <div className="col-sm-6">
              <SkillsSection skill="java script" progress="60%" />
            </div>
            <div className="col-sm-6">
              <SkillsSection skill="java" progress="50%" />
            </div>
            <div className="col-sm-6">
              <SkillsSection skill="python" progress="40%" />
            </div>
            <div className="col-sm-6">
              <SkillsSection skill="java script" progress="80%" />
            </div>
          <Title span="services" title="services" />
          <div className="service-container">
            <div className="row">
              <div className="col-xl-4 col-md-6">
                <ServicesSection
                  image={design}
                  title={"Web design"}
                  text={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenea aliquet lacinia venenatis. Sed nec risus ex."
                  }
                />
              </div>
              <div className="col-xl-4 col-md-6">
                <ServicesSection
                  image={intelligence}
                  title={"Artificial Intelligence"}
                  text={
                    "Cras pharetra eros tristique viverra posuere. Sed vitae libero nec lacus iaculismollis."
                  }
                />
              </div>
              <div className="col-xl-4 col-md-6">
                <ServicesSection
                  image={gamedev}
                  title={"Game development"}
                  text={
                    "Vivamus ut urna eu enim vehicula scelerisque ut non ex. Maecenas dictum efficitur sapien non bibendum."
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AboutPage
