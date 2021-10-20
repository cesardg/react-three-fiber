import * as THREE from 'three'
import React, { useRef, useMemo } from 'react'
import { extend, useThree, useLoader, useFrame } from '@react-three/fiber'
import { Water } from 'three-stdlib'
import waterTex from '../assets/textures/water.jpg'

extend({ Water})

const WaterSurface = ({waterLevel}) => {


 const ref = useRef()
  const gl = useThree((state) => state.gl)
  const waterNormals = useLoader(THREE.TextureLoader, waterTex)
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), [])
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x00ffff,
      distortionScale: 3.7,
      fog: false,
      format: gl.encoding
    }),
    [gl.encoding, waterNormals]
  )
  useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta))
  return <water ref={ref} position={[0, (waterLevel - 60), 0]} args={[geom, config]} rotation-x={-Math.PI / 2} />
}

export default WaterSurface