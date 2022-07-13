import React from 'react';
import {SubHeading} from '../../components';
import './Header.css';
import {images} from '../../constants';


const Header = () => (
  <div 
    className="app__header app__wrapper section__padding" 
    id="home"
  >
    <div className="app__wrapper_info">
      <SubHeading title="Persiga sabores únicos"/>

      <h1 className="app__header-h1">Platillos con Clase</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>
        Los mejores platillos del mundo en un solo lugar.
      </p>

      <button className="custom__button">Nuestro Menú</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="img header"/>
    </div>
  </div>
); 

export default Header;
