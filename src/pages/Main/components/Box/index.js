import React from 'react'
import flame from '../../images/flame.jpg'

import { useLoader } from 'react-three-fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

const Box = () => {

  const colorMap = useLoader(TextureLoader, flame);

  return (
    <mesh rotation={[0, 45, 0]}>
      <boxBufferGeometry attach='geometry' args={[3, 3, 3]}/>
      <meshNormalMaterial attach='material' />
    </mesh>
  )
}

export default Box