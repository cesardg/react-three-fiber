import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei';

const CodeBox = ({position, color, mainText, subText}) => {

  const ref = useRef()
  const [hovered, setHover] = useState(false)

  
  
  useFrame(() => {
    //ref.current.rotation.x = ref.current.rotation.y += 0.01
  })
  return (
    <mesh
      position={position}
      ref={ref}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <boxGeometry args={[3, .5, .5]} />
      <meshStandardMaterial color={hovered ? 'black' : 'blue'} />
      <Html  className="content code-content"  rotation-z={Math.PI} rotation-y={Math.PI}  rotation-x={Math.PI} position={[0, 0, (.5/2)+ 0.001]} transform occlude>
          <div  className="wrapper code-wrapper">
           
    <p>{`< ${mainText}/>`}<span>{subText}</span></p>
          </div>
        </Html>
    </mesh>
  )
}

export default CodeBox