import React from 'react'

const TorusKnot = () => {

  return (
    <mesh scale={0.15}>
      <torusKnotBufferGeometry attach='geometry' args={[8.55, 2.7027, 234, 9, 2, 5]} />
      <meshNormalMaterial attach='material' />
    </mesh>
  )
}

export default TorusKnot