import React from 'react';
import './SpecialMenu.css';
import {images, data} from '../../constants';
import {SubHeading, MenuItem} from '../../components';


const SpecialMenu = () => (
  <div 
    className="app__specialMenu flex__center section__padding" 
    id="menu"
  >
    <div className="app__specialMenu-title">
      <SubHeading title="Nuestro menú para usted"/>
      <h1 className="headtext__cormorant">Especial del Día</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu_menu_heading">Vinos y Cervezas</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem 
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu_menu_img">
        <img src={images.menu} alt="menu"/>
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu_menu_heading">Cockteles</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem 
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>

    </div>
  </div>
);


export default SpecialMenu;
