import React, {useRef, useState} from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';
import {meal} from '../../constants';
import './Intro.css';

const Intro = () => {
  const videoRef = useRef();
  const [playVideo, setplayVideo] = useState(false);

  const handleVideo = () =>{
    setplayVideo((prevPlayVideo) => !prevPlayVideo); 
    
    if(playVideo){
      videoRef.current.pause();
    }else{
      videoRef.current.play();
    }
  }

  return(
    <div className="app__video">
      <video 
        src={meal}
        ref={videoRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />

      <div className="app__video-overlay flex__center">
        <div 
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo 
            ? <BsPauseFill color="#f5f5f5" fontSize={27}/>
            : <BsFillPlayFill color="#f5f5f5" fontSize={27}/>
          }
        </div>
      </div>

    </div>


  );
};

export default Intro;
