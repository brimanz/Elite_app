import React from 'react';
import {images, data} from '../../constants';
import {SubHeading, MenuItem} from '../../components';


const FindUs = () => (
  <div className="app__gallery app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contactanos"/>
      <h1 
        className="headtext__cormorant"
        style={{marginBottom:"3rem"}} 
      >Visitanos:</h1>

      <div className="app__wrapper-content">
        <p className="p__opensans">Av. 8, entre calles 19 y 20, Mérida. Venezuela
        </p>
        <p 
          className="p__cormorant"
          style={{color: "#DCCA87", margin: "2rem 0"}}
        >Horario
        </p>
        <p className="p__opensans">Lun - Vie: 10:00am - 11:00pm.
        </p>
        <p className="p__opensans">Sab - Dom: 10:00am - 70:00pm
        </p>

      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.contact} alt="FindUs-image"/>
    </div>  
  </div>
);

export default FindUs;