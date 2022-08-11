import React from 'react';
import {images} from '../../constants';
import './AboutUs.css';


const AboutUs = () => (
  <div 
    className="app__gallery app__bg flex__center section__padding" 
    id="about"
  >
    
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Sobre nosotros</h1>
        <img src={images.spoon} alt="about-us" className="spoon_img"/>
        <p className="p__opensans">
          Somos una familia que nos apoyamos siempre, crecemos juntos
          y aprendemos cada día, eso nos permite mejorar constantemente.
        </p>

      </div>

      <div className="app__aboutus-content_knife">
        <img src={images.wine} alt="wine bottle"/>
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Nuestra historia</h1>
        <img src={images.spoon} alt="about-us" className="spoon_img"/>
        <p className="p__opensans">
          Nuestro inicio fue solo con tres personas, luego seguimos
          creciendo y la pasión por la creación de nuevos platillos
          nos permitió llegar a nuestro lugar actualmente.
        </p>

      </div>
    </div>

  </div>
);

export default AboutUs;
