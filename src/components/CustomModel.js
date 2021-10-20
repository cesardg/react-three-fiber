import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame } from '@react-three/fiber'
import { useRef} from 'react'
import { Html } from '@react-three/drei';

import styles from "../styles/Slides.module.css";

const CustomModel = ({position}) => {

  const ref = useRef()

  useFrame(() => {
    ref.current.rotation.y = ref.current.rotation.y += 0.01
  })

 const gltf = useLoader(GLTFLoader, "./GalaxyS10.gltf");
  return (
    <>
      <primitive ref={ref} object={gltf.scene}  position={position}  scale={20} />
      <mesh>
        <Html className={styles.content} rotation-x={-Math.PI / 2} position={position} transform occlude>
          <div  className={styles.wrapper}>
          <p>Mobile?</p>
          </div>
        </Html>
      </mesh>
    </>
  );
}

export default CustomModel