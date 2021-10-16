import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'


const Torus = (position) => {
    // This reference will give us direct access to the mesh
  const ref = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    ref.current.rotation.x = ref.current.rotation.y += 0.01
  })

  return (
    <mesh
      {...position}
      ref={ref}
      scale={active ? 3 : 1}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <torusGeometry args={[.6, .2, 16, 100]} />
      <meshStandardMaterial color={hovered ? 'white' : 'orange'} />
    </mesh>
  )
}

export default Torus