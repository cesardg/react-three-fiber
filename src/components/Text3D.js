import React, { useRef, useState } from "react";
import * as THREE from "three";
import JSONfont from "../assets/Roboto_Regular.json";
import lava from "../assets/lavatile.jpg";
import carbon_fiber from "../assets/Carbon.png";
import { useFrame, useLoader } from '@react-three/fiber'

const  Text3D = (props)=>{
  const [hovered, setHover] = useState(false);
  const mesh = useRef();

  // actions to perform in current frame
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    mesh.current.geometry.center();
  });

  // create lava texture
  const lava_texture = useLoader(THREE.TextureLoader, lava);
  lava_texture.wrapS = THREE.RepeatWrapping;
  lava_texture.wrapT = THREE.RepeatWrapping;
  lava_texture.repeat.set(0.05, 0.05);

  // create carbon fiber texture
  const cf_texture = useLoader(THREE.TextureLoader, carbon_fiber);
  cf_texture.wrapS = THREE.RepeatWrapping;
  cf_texture.wrapT = THREE.RepeatWrapping;
  cf_texture.repeat.set(1, 1);

  // load in font
  const font = new THREE.FontLoader().parse(JSONfont);

  // configure font mesh
  const textOptions = {
    font,
    size: 5,
    height: hovered ? 0 : 1
  };

  const getTexture = () => {
    const textureMap = {
      lava: lava_texture,
      carbonFiber: cf_texture
    };

    return textureMap[props.texture];
  };

  return (
    <mesh
      {...props}
      ref={mesh}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <textGeometry attach="geometry" args={["three.js", textOptions]} />
      <meshStandardMaterial attach="material" args={[{ map: getTexture() }]} />
    </mesh>
  );
}

export default Text3D;