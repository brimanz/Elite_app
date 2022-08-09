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
          Conoce mas detalles sobre nuestro trabajo y sobre nuestro personal
        </p>

        <button type="button" className="custom__button">Mas sobre...</button>
      </div>

      <div className="app__aboutus-content_knife">
        <img src={images.wine} alt="wine bottle"/>
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Nuestra historia</h1>
        <img src={images.spoon} alt="about-us" className="spoon_img"/>
        <p className="p__opensans">
          Conoce como inició este sueño de cocinar la mejor comida.
        </p>

        <button type="button" className="custom__button">Mas sobre...</button>
      </div>
    </div>

  </div>
);

export default AboutUs;
