

import {Canvas} from '@react-three/fiber'
import Box from "../components/Box";
import Circle from "../components/Circle";
import Torus from "../components/Torus";
import {DeviceOrientationControls} from '@react-three/drei'


function Mobile() {
  return (
     <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <directionalLight color="blue" position={[0, 0, 5]} />
      <Box position={[-2, 0, 0]} />
      <Circle position={[0, 0, 0]}/>
      <Torus position={[2, 0, 0]}/>
      <DeviceOrientationControls />
    </Canvas>
  );
}

export default Mobile;


