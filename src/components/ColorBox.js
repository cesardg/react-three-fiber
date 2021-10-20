import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei';

const ColorBox = ({position, img, color, link}) => {

  const ref = useRef()
  const [hovered, setHover] = useState(false)
  
  useFrame(() => {
    //ref.current.rotation.x = ref.current.rotation.y += 0.01
  })

  const handleOnClickBox = () => {
    const win = window.open(link, "_blank");
    win.focus();
  }

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
      onClick={handleOnClickBox}
       >
       
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color={hovered ? color : 'white'} />
      <Html  className="content"  rotation-z={Math.PI} rotation-y={Math.PI}  rotation-x={Math.PI} position={[0, 0, (3/2)+ 0.001]} transform occlude>
          <div  className="wrapper">
            <img onPointerOver={(e) => setHover(true)} onClick={handleOnClickBox}
      onPointerOut={(e) => setHover(false)} className="trImg" src={img} alt="Logo" width="120" height="120" />
          </div>
        </Html>
    </mesh>
  )
}

export default ColorBox