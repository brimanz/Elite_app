import React, {useRef} from 'react';
import {BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';
import {images, data} from '../../constants';
import {SubHeading, MenuItem} from '../../components';
import './Gallery.css';


const galleryImages = [images.g1, images.g2, images.g3, images.g4];

const Gallery = () => { 
  
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const{current} = scrollRef;

    if(direction === "left"){
      current.scrollLeft -= 300;
    } else{
      current.scrollLeft += 300;
    }
  }


  return(
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="nuetra galería"/>
        <h1 className="headtext__cormorant">
          Galería de fotos
        </h1>
        <p 
          className="p__opensans" 
          style={{color: "#f5f5f5", marginTop: "2rem"}}
        >
          Nuetros mejores platillos.  
        </p>
        <a href="/" className="custom__button">Ver mas</a>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div 
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery images"/>
            </div>
          ))}
        </div>

        <div className="app__gallery-images_arrow">
          <BsArrowLeftShort 
            className="gallery__arrow-icon"
            onClick={() => scroll("left")} 
          />
          <BsArrowRightShort 
            className="gallery__arrow-icon"
            onClick={() => scroll("right")} 
          />
        </div>
      </div> 
    </div>
  );
}


export default Gallery;
