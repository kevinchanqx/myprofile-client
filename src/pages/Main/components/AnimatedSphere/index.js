import React from 'react'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'

const AnimatedSphere = () => {

  return (
    <Sphere visible args={[2, 100, 200]} scale={1}>
      <MeshDistortMaterial 
        color="#A1D6E2"
        attach="material" 
        distord={5} 
        speed={10}
      />
    </Sphere>
  )
}

export default AnimatedSphere