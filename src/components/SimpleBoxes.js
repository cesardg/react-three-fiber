import React from 'react'
import SimpleBox from "../components/SimpleBox";

const  SimpleBoxes = () => {

  const amount = 20
  const cubes = []
  for (let x = 0; x < amount; x++)
      for (let y = 0; y < amount; y++)
        for (let z = 0; z < amount; z++) {
          cubes.push(<SimpleBox key={`${x}-${y}-${z}`} position={[(x*2) + 30, y*2, z*2]} />)
        }

  return (
    <>
      {cubes}
    </>
  );
}

export default SimpleBoxes;

