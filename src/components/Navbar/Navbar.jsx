import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

//images imports
import images from '../../constants/images';
import './Navbar.css';


const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return(
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={images.elite} alt="logo"/>
        </div>

        <ul className="app__navbar-links">
          <li className="p__opensans">
            <a href="#home">Home</a>
          </li>

          <li className="p__opensans">
            <a href="#about">About</a>        
          </li>

          <li className="p__opensans">
            <a href="#menu">Menu</a>
          </li>

          <li className="p__opensans">
            <a href="#awards">Awards</a>
          </li>

          <li className="p__opensans">
            <a href="#contact">Contact</a>
          </li>   
        </ul>

        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu
            fontSize={25}
            color="#f5f5f5"
            cursor="pointer"  
            onClick={() => setToggleMenu(true)} 
          />


          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />
              <ul className="app__navbar-smallscreen-links">
                <li className="p__opensans">
                  <a href="#home">Home</a>
                </li>

                <li className="p__opensans">
                  <a href="#about">About</a>        
                </li>

                <li className="p__opensans">
                  <a href="#menu">Menu</a>
                </li>

                <li className="p__opensans">
                  <a href="#awards">Awards</a>
                </li>

                <li className="p__opensans">
                  <a href="#contact">Contact</a>
                </li>   
              </ul>
            </div>
          )}
          

          
        </div>
      </nav >
  )
};

export default Navbar;
