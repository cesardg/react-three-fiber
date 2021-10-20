import React from 'react'
import budaDome from '../assets/buda.jpg'
import {useLoader} from '@react-three/fiber'
import * as THREE from 'three';

const BudaDome = () => {
   const texture = useLoader(THREE.TextureLoader, budaDome)
   // async?
    return (
      <mesh>
        <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
        <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
      </mesh>
    )
}

export default BudaDome