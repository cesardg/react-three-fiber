
import {Canvas} from '@react-three/fiber'
import React  from 'react'
import SimpleBox from "../components/SimpleBox";

const  Simple = () => {

  return (
    <Canvas>
      <ambientLight intensity={1} />
      <SimpleBox position={[0, 0, 0]} />
      <color attach="background" args={"black"} />

    </Canvas>
  );
}

export default Simple;

