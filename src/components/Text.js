import React, { useRef} from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei';

import styles from "../styles/Slides.module.css";

const Text = ({position}) => {

  const ref = useRef()

  
  useFrame(() => {
    ref.current.rotation.x = ref.current.rotation.y += 0.01
  })
  return (
    <mesh ref={ref}  position={position} >
      <boxGeometry args={[.5, .5, .5]} />
      <meshStandardMaterial color={'white'} />
      <mesh>
        <Html className={styles.content} rotation-x={-Math.PI / 2} position={[0, .5/2+0.001, 0]} transform occlude>
          <div  className={styles.wrapper}>
          <p>VS</p>
          </div>
        </Html>
    
        <Html className={styles.content} rotation-y={Math.PI / 2} rotation-z={-Math.PI / 2} position={[.5/2+0.001, 0, 0]} transform occlude>
          <div className={styles.wrapper}>
            <p>VS</p>
          </div>
        </Html>
         <Html className={styles.content} rotation-x={Math.PI / 2} rotation-z={Math.PI / 1}  position={[0, -(.5/2+0.001), 0]} transform occlude>
          <div className={styles.wrapper}>
             <p>VS</p>
          </div>
        </Html>
           <Html className={styles.content} rotation-x={-Math.PI / 2} rotation-y={-Math.PI / 2} position={[-(.5/2+0.001), 0, 0]} transform occlude>
          <div className={styles.wrapper}>
           <p>VS</p>
          </div>
        </Html>
        <Html className={styles.content} rotation-z={Math.PI / 2} rotation-x={Math.PI / 1}  position={[0, 0, -(.5/2+0.001)]} transform occlude>
          <div className={styles.wrapper}>
             <p>VS</p>
          </div>
        </Html>
        <Html className={styles.content} rotation-z={Math.PI / 2}  position={[0, 0, .5/2+0.001]} transform occlude>
          <div className={styles.wrapper}>
            <p>VS</p>
          </div>
        </Html>
      </mesh>
    </mesh>
  )
}

export default Text