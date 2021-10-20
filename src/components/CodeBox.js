import React from 'react'
import { Html } from '@react-three/drei';

import styles from "../styles/Slides.module.css";

const CodeBox = ({position, color, mainText, subText}) => {


  return (
    <mesh position={position} >
      <boxGeometry args={[3.6, .5, .5]} />
      <meshStandardMaterial color={color} />
      <mesh>
      <Html   
              className={styles.codeContent}  
              rotation-z={Math.PI} 
              rotation-y={Math.PI}  
              rotation-x={Math.PI} 
              position={[0, 0, (.5/2)+ 0.001]} 
              transform 
              occlude>
            <div  className={styles.codeWrapper}>
              <p>{`< ${mainText}/>`}<span>{subText}</span>
            </p>
          </div>
        </Html>
        </mesh>
    </mesh>
  )
}

export default CodeBox