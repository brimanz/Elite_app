import React from 'react';
import {images, data} from '../../constants';
import {SubHeading, MenuItem} from '../../components';
import './Laurels.css';


const AwardCard = ({award: {imgUrl, title, subtitle}}) =>(
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="premio"/>
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{color: "#DCCA87"}}>{title}</p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
);


const Laurels = () => (
  <div className="app__aboutus app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Reconocimientos"/>
      <h1 className="headtext__cormorant">Premios</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => 
          <AwardCard award={award} key={award.title} />
        )}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.salmon} alt="salmon"/>
    </div>
  </div>
);


export default Laurels;
