import React from 'react';
import { Html } from '@react-three/drei';
import { a } from '@react-spring/three';
import { Slider } from '@mui/material';
import slide1 from '../assets/deck1/Slide1.png';
import slide2 from '../assets/deck1/Slide2.png';
import slide3 from '../assets/deck1/Slide3.png';
import slide4 from '../assets/deck1/Slide4.png';
import slide5top from '../assets/deck1/Slide5top.png';
import slide5bottom from '../assets/deck1/Slide5bottom.png';
import slide6 from '../assets/deck1/Slide6.png';

const HtmlBox = ({position, rotationy, rotationx, rotationz, color, onChangeColor, onChangeSlider, zoom}) => {

    const handleChange = (event, newValue) => {
      onChangeSlider(newValue)
  };

  return (
    <a.mesh  position={position}  rotation-y={rotationy}  rotation-x={rotationx}  rotation-z={rotationz}>
      <boxGeometry args={[4, 4, 4]} />
      <a.meshStandardMaterial color={color} />
      <a.mesh>
        <Html className="content" rotation-x={-Math.PI / 2} position={[0, 2.001, 0]} transform occlude>
          <div  className="wrapper">
            <img src={slide1} alt="Logo" width="160" height="160" />
          </div>
        </Html>
    
        <Html className="content" rotation-y={Math.PI / 2} rotation-z={-Math.PI / 2} position={[2.001, 0, 0]} transform occlude>
          <div className="wrapper">
              <img src={slide2} alt="Logo" width="160" height="160" />
          </div>
        </Html>
         <Html className="content" rotation-x={Math.PI / 2} rotation-z={Math.PI / 1}  position={[0, -2.001, 0]} transform occlude>
          <div className="wrapper">
              <img src={slide3} alt="Logo" width="160" height="160" />
          </div>
        </Html>
           <Html className="content" rotation-x={-Math.PI / 2} rotation-y={-Math.PI / 2} position={[-2.001, 0, 0]} transform occlude>
          <div className="wrapper">
          <img src={slide4} alt="Logo" width="160" height="160" />
          </div>
        </Html>
        <Html className="content" rotation-z={Math.PI / 2} rotation-x={Math.PI / 1}  position={[0, 0, -2.001]} transform occlude>
          <div className="wrapper wrapper5">
             <img src={slide5top} alt="Logo" width="160" height="96" />
             <div className={"slidersContainer"}>
             <input className={"color"}  onChange={(e) => onChangeColor(e.target.value)} type="color" id="color" name="color"
              value={color}></input>
              <div className={"sliderContainer"}>
            <Slider aria-label="Small" valueLabelDisplay="auto" min={-40} max={60}  value={zoom} onChange={handleChange} />
              </div>
             </div>
               <img src={slide5bottom} alt="Logo" width="160" height="20" />
          </div>
        </Html>
        <Html className="content" rotation-z={Math.PI / 2}  position={[0, 0, 2.001]} transform occlude>
          <div className="wrapper">
              <img src={slide6} alt="Logo" width="160" height="160" />
          </div>
        </Html>
      </a.mesh>
    </a.mesh>
  )
}

export default HtmlBox