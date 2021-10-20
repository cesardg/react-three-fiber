import React, { useRef} from 'react'
import { useFrame } from '@react-three/fiber'

const SimpleBox = (position) => {

  const ref = useRef()

  useFrame(() => {
    ref.current.rotation.x = ref.current.rotation.y += 0.01
  })
  return (
    <mesh {...position} ref={ref} >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'red'} />
    </mesh>
  )
}

export default SimpleBox