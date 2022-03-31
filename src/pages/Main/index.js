import React, { Suspense } from 'react'
import './index.css'

/** Three */
import * as THREE from 'three'
import { Canvas } from 'react-three-fiber'
import { OrbitControls, Torus } from '@react-three/drei'

/** Components */
import Box from './components/Box'
import AnimatedSphere from './components/AnimatedSphere'
import Medal from './components/Medal/components/Medal'
import TorusKnot from './components/TorusKnot'

const Main = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container box-container">
          <h1 className='text-white line-height-2 text-1'>
            Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious. 
            <br />
            -Stephen Hawking
          </h1>
          <Canvas className="box-canvas">
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Suspense fallback={null}>
              <TorusKnot />
            </Suspense>
          </Canvas>
        </div>
        <div className="container sphere-container">
          <Canvas className="sphere-canvas">
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Suspense fallback={null}>
              <AnimatedSphere />
            </Suspense>
          </Canvas>
          <h1 className='text-white line-height-2 text-2'>
            Everything turns, rotates, spins, circles, loops, pulsates, resonates, and repeats. Circles of life, born from pulses of light, vibrate to breathe, while spiraling outwards for infinity through the lens of time... <br />-Suzy Kassem
          </h1>
        </div>
        <div className="medal-container">
          <Canvas className="medal-canvas">
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[-2, 5, 2]} intensity={2} />
            <directionalLight position={[4, 5, 2]} intensity={2} />
            <directionalLight position={[0, -5, 2]} intensity={2} />
            <Suspense fallback={null}>
              <Medal />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </>
  )
}

export default Main