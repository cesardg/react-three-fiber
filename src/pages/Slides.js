import {Canvas} from '@react-three/fiber'
import {OrbitControls, PerspectiveCamera, Sky, Stars} from '@react-three/drei'
import React, {useState, useEffect, Suspense}  from 'react'
import { useSpring } from '@react-spring/core'

import HtmlBox from "../components/HtmlBox";
import ColorBox from "../components/ColorBox";
import CodeBox from "../components/CodeBox";
//import Text3D from "../components/Text3D";
import Text from "../components/Text";
import BudaDome from "../components/BudaDome";
import DarkSky from "../components/DarkSky";

import slide7left from '../assets/deck2/Slide7-1.png';
import slide7right from '../assets/deck2/Slide7-2.png';


const  Slides =  () => {
  const Pi = Math.PI/180;
  const rotationValues  = [[Pi*90,0, 0], [Pi*90, 0, Pi*90], [Pi*90, 0, Pi*180] ,[Pi*90, 0, Pi*270] , [Pi*180,0,Pi*90] , [0,0, Pi * -90] ];
  const [index, setIndex] =  useState(0);
  const [color, setColor] =  useState("#88cccc");
  const [zoom, setZoom] =  useState(10);
  const [background, setBackground] =  useState("day");

  const { spring } = useSpring({
    spring: index,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 }
  })

  let rotationX= spring.to([0, 1, 2, 3, 4, 5], [rotationValues[0][0], rotationValues[1][0], rotationValues[2][0], rotationValues[3][0], rotationValues[4][0], rotationValues[5][0]])
  let rotationY= spring.to([0, 1, 2, 3, 4, 5], [rotationValues[0][1] , rotationValues[1][1], rotationValues[2][1], rotationValues[3][1], rotationValues[4][1], rotationValues[5][1]])
  let rotationZ= spring.to([0, 1, 2, 3, 4, 5], [rotationValues[0][2], rotationValues[1][2], rotationValues[2][2], rotationValues[3][2], rotationValues[4][2], rotationValues[5][2]])






  
  const downHandler = ({ key }) => {
  
    let newIndex ;
    if (key === "ArrowLeft"){
      if (index === 0) {
      newIndex = 0
      } else {
      newIndex = index - 1;
      }
      setIndex(newIndex);

    } else if (key === "ArrowRight") {
      if (index === 5) {
        newIndex = 5
        } else {
        newIndex = index + 1;
        }
      setIndex(newIndex);
    }
  
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  });

  return (
    <>
    {
      <div className="controlls">
        <p className="controlText">cube s(l)ide: <span>{index + 1}</span>/6</p>
        <div className="controllsBackground">
        <p className="controlText"> background:</p>
        <select value={background} onChange={(e) => setBackground(e.target.value)}>
          <option value="day">Day</option>
          <option value="night">Night</option>
          <option value="devine">Devine</option>
        </select>
        </div>
      </div>
       }
     <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera position={[0, 0, 7]} makeDefault={true} />
          <ambientLight intensity={0.5} />
          <spotLight position={[zoom, zoom, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <pointLight position={[20, 0, 20]} intensity={0.6}  />
          <HtmlBox position={[0, 0, 0]}  rotationy={rotationY}  rotationx={rotationX}  rotationz={rotationZ}  color={color} onChangeColor={(value) => setColor(value)} zoom={zoom} onChangeSlider={(value) => setZoom(value)} />
          <ColorBox position={[10, 0, 0]} img={slide7right} color={'red'}/>
         {/* <Text3D position={[0, 0, 0]} texture={"lava"}/>*/ }
          <Text position={[12, 0, 0]}/>
          <ColorBox position={[14, 0, 0]} img={slide7left} color={'green'}/>
          <CodeBox position={[12, -6, 0]} color={'blue'} mainText={"Canvas"} subText={"(component)"}/>
          <CodeBox position={[12, -6.6, 0]} color={'blue'} mainText={"mesh"} subText={"(native JSX element)"}/>
          <CodeBox position={[12, -7.5, 0]} color={'blue'} mainText={"boxGeometrie"} subText={""}/>
          <CodeBox position={[12, -8.1, 0]} color={'blue'} mainText={"meshStandardMaterial"} subText={""}/>
          { background === "devine" &&
              <BudaDome />
           }

          { background === "night" &&
              <DarkSky/>
           }

              { background === "day" &&
              <>
        <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0} />
     
          <Stars radius={50} depth={5}  count={5000}  factor={6}  saturation={0} fade />
         </>
           }
    
           
          <OrbitControls />
      
      </Suspense>
    </Canvas>
    </>
  );
}

export default Slides;



