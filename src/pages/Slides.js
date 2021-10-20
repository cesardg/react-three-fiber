import {Canvas} from '@react-three/fiber'
import {Environment, OrbitControls, PerspectiveCamera, Sky, Stars} from '@react-three/drei'
import React, {useState, useEffect, Suspense}  from 'react'
import { useSpring } from '@react-spring/core'
import { Slider } from '@mui/material';

import HtmlBox from "../components/HtmlBox";
import ColorBox from "../components/ColorBox";
import CodeBox from "../components/CodeBox";
import Text from "../components/Text";
import BudaDome from "../components/BudaDome";
import DarkSky from "../components/DarkSky";
import Water from "../components/Water";
import CustomModel from "../components/CustomModel";
import Loader from "../components/Loader";
//import Text3D from "../components/Text3D";

import styles from "../styles/Slides.module.css";

import slide7left from '../assets/deck2/Slide7-1.png';
import slide7right from '../assets/deck2/Slide7-2.png';


const  Slides =  () => {
  const Pi = Math.PI/180;
  const rotationValues  = [[Pi*90,0, 0], [Pi*90, 0, Pi*90], [Pi*90, 0, Pi*180] ,[Pi*90, 0, Pi*270] , [Pi*180,0,Pi*90] , [0,0, Pi * -90] ];
  const [index, setIndex] =  useState(0);
  const [color, setColor] =  useState("#88cccc");
  const [zoom, setZoom] =  useState(10);
  const [background, setBackground] =  useState("day");
  const [waterLevel, setWaterLevel] =  useState(0);
  const [camPos, setCamPos] =  useState([0, 0, 7]);

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

    if (key === "1"){
      setCamPos([0,0,7])
    }

    if (key === "2"){
      setCamPos([0,0,30])
    }

  };

  const handleChange = (event, newValue) => {
    console.log(newValue);
      setWaterLevel(newValue)
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  });

  return (
    <>

      <div className={styles.controlls}>
        <p className={styles.controlText}>cube s(l)ide: <span>{index + 1}</span>/6</p>
        <div className={styles.controllsBackground}>
        <p className={styles.controlText}> background:</p>
        <select value={background} onChange={(e) => setBackground(e.target.value)}>
          <option value="day">Day</option>
          <option value="night">Night</option>
          <option value="devine">Devine</option>
          <option value="black">Black</option>
          <option value="sunset">Sunset</option>
          <option value="">None</option>
        </select>
        </div>
        { background !== "black" && 
        <Slider aria-label="Small" valueLabelDisplay="auto" min={0} max={100}  value={waterLevel} onChange={handleChange} />
        }
        </div>
       
     <Canvas>
        <Suspense fallback={<Loader/>}>
          <PerspectiveCamera position={camPos} makeDefault={true} />
          <ambientLight intensity={0.5} />
          <spotLight position={[zoom, zoom, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <pointLight position={[20, 0, 20]} intensity={0.6}  />
          <HtmlBox position={[0, 0, 0]}  rotationy={rotationY}  rotationx={rotationX}  rotationz={rotationZ}  color={color} onChangeColor={(value) => setColor(value)} zoom={zoom} onChangeSlider={(value) => setZoom(value)} />
          <ColorBox position={[10, 0, 0]} img={slide7right} color={'red'}  link={"http://127.0.0.1:5500/index.html"}/>
         {/* <Text3D position={[0, 0, 0]} texture={"lava"}/>*/ }
          <Text position={[12, 0, 0]}/>
          <ColorBox position={[14, 0, 0]} img={slide7left} color={'green'} link={"/simple"}/>
          <CodeBox position={[23, 1.4, 0]} color={'blue'} mainText={"Canvas"} subText={"(component)"}/>
          <CodeBox position={[23, .8, 0]} color={'blue'} mainText={"mesh"} subText={"(native JSX element)"}/>
          <CodeBox position={[23, 0, 0]} color={'blue'} mainText={"boxGeometrie"} subText={""}/>
          <CodeBox position={[23, -.6, 0]} color={'blue'} mainText={"meshStandardMaterial"} subText={""}/>
          <CodeBox position={[23, -1.4, 0]} color={'blue'} mainText={"ambientLight intensity={0.1}"} subText={""}/>
          <CodeBox position={[23, -2, 0]} color={'blue'} mainText={`directionalLight color="red" position={[0, 0, 5]} `} subText={""}/>
          <CustomModel position={[30, -2, 0]} />
          {background === "devine" && <BudaDome />}
          {background === "night" && <DarkSky/>} 
          {background === "sunset" &&  <Environment preset={background} background />} 
          {background === "black" && 
            <>
             <color attach="background" args={"black"} />
              <Stars radius={400} depth={20}  count={10000}  factor={20}  saturation={0} fade />
            </>
          } 
          { background === "day" && 
            <>
              <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0} />
              <Stars radius={400} depth={20}  count={10000}  factor={20}  saturation={0} fade />
            </>
           }

           { waterLevel > 0 && 
          <Water waterLevel={waterLevel}/>
           }
          <OrbitControls />
      
      </Suspense>
    </Canvas>
    </>
  );
}

export default Slides;