import React from 'react'
import './index.css'

// Components
import { Carousel } from './components/carousel'
import { Selection } from './components/selection'

// External Components
import  Navbar from '../../components/navbar'
import  Footer from '../../components/footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: 'white', width: '100vw', height: '2vh', marginTop: '7vh' }}></div>
      <div class="welcome-container">
        <div class="welcome">
          <div class="jumbotron jumbotron-fluid">
            <div class="container rounded">
              <h1 class="display-4">Welcome to my page!</h1>
              <p class="lead">This is my personal page that you can get to know me better!</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: 'white', width: '100vw', height: '1vh' }}></div>
      <Carousel />
      <Selection />
      <Footer />
    </>
  )
}

export default Home