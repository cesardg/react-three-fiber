import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame } from '@react-three/fiber'
import { useRef} from 'react'

const CustomModel = ({position}) => {

  const ref = useRef()

  useFrame(() => {
    ref.current.rotation.y = ref.current.rotation.y += 0.01
  })

 const gltf = useLoader(GLTFLoader, "./GalaxyS10.gltf");
  return (
    <>
      <primitive ref={ref} object={gltf.scene}  position={position}  scale={20} />
     
    </>
  );
}

export default CustomModel