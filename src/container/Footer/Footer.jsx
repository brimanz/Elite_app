import React from 'react';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
import images from '../../constants/images';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">
          Contactanos
        </h1>
        <p className="p__opensans">Av. 8, Entre Calles 19 Y 20, Mérida. Venezuela</p>
        <p className="p__opensans">+58 04244293217</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.elite} alt="footer-logo"/>
        <p className="p__opensans">Los Mejores Platillos Del Mundo En Un Solo Lugar.</p>
        <img src={images.spoon} alt="footer-spoon"/>

        <div className="app__footer-links_icons">
          <FiFacebook/>
          <FiTwitter/>
          <FiInstagram/>
        </div>

      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">
          Nuestro Horario
        </h1>
        <p className="p__opensans">Lun - Vie: 10:00am - 11:00pm.</p>
        <p className="p__opensans">Sab - Dom: 10:00am - 70:00pm.</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">Development by <strong>Jonathan Briceño</strong> - 2022</p>
    </div>
  </div>
);

export default Footer;
