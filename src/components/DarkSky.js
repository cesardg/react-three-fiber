import {useThree} from '@react-three/fiber'
import { CubeTextureLoader } from "three";
import side1 from '../assets/textures/1.jpg';
import side2 from '../assets/textures/2.jpg';
import side3 from '../assets/textures/3.jpg';
import side4 from '../assets/textures/4.jpg';
import side5 from '../assets/textures/5.jpg';
import side6 from '../assets/textures/6.jpg';

const DarkSky = () => {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  const texture = loader.load([ side1, side2, side3, side4, side5, side6]);
  scene.background = texture;
  return null;
}

export default DarkSky