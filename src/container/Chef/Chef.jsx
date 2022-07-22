import React from 'react';
import {images} from '../../constants';
import {SubHeading} from '../../components';
import './Chef.css';

const Chef = () => (
  <div className="app__header app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef image"/>
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Nuetro Chef de Fama Mundial"/>
      <h1 className="headtext__cormorant">Pasión por la buena cocina</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote"/>

          <p className="p__cormorant">Lo mejor es cuando tus comensales sonríen al comer tus platillos, es la razon perfecta para despertar cada dia</p>
        </div>

        <div className="app__chef-sign">
          <p>Sean Adams</p>
          <p className="p__opensans">Ceo & Fundador</p>
          <img src={images.Sean} alt="firma"/>
        </div>

      </div>
    </div>
  </div>
);

export default Chef;
