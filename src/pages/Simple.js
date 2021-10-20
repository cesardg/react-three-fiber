
import {Canvas} from '@react-three/fiber'
import React, {Suspense} from 'react'
import {OrbitControls} from '@react-three/drei'
import SimpleBox from "../components/SimpleBox";
import SimpleBoxes from "../components/SimpleBoxes";

const  Simple = () => {

  return (

    <Canvas>
       <Suspense fallback={null}>
      <ambientLight intensity={1} />
      <SimpleBox position={[0, 0, 0]} />
      <SimpleBoxes/>
       <OrbitControls/>
      <color attach="background" args={"black"} />
      </Suspense>
    </Canvas>

  );
}

export default Simple;

