import './index.css'

// External Components
import  Navbar from '../../components/navbar'
import  Footer from '../../components/footer'

const Aboutme = () => {
  return (
    <>
      <Navbar />
      <div class='aboutme-page'>
        <div style={{ backgroundColor: 'lightyellow', width: '100vw', height: '2vh', marginTop: '7vh' }}></div>
        <div class='aboutme-outer-container'>
          <div class='row aboutme-container'>
            <div class='col col-7 column1'>
              <h1 class="name">Hi, I'm Kevin</h1>
              <p class="introduction aboutme-paragraph">
                I was born on January 20th 1995 in Kuala Lumpur, Malaysia.
              </p>
              <p class="introduction aboutme-paragraph">
                I completed my degree in Aerospace Engineering at Universiti Sains Malaysia (USM). Even though being a graduate engineer, I decided to switch my career over to IT-related field.
              </p>
              <p class="introduction aboutme-paragraph">
                Despite the difficulties and challanges, my passion give me the courage to fight and persevere through all the obstacles.
              </p>
              <p class="introduction aboutme-paragraph">
                Starting off with 0 knowledge in web development, it was tough. Thankfully, everything went well after I joined a 10 Weeks Full-Time Intensive Bootcamp for Full-Stack Web Developer in <a href='https://www.nextacademy.com/quantum-degrees/coding/full-time/full-stack-web-development/' target='_blank'><strong>Next Academy</strong></a>.
              </p>
              <p class="introduction aboutme-paragraph">
                I'm glad that my projection for this career path is clearer after working for 1 year in this industry. I'm exicited and can't wait to explore more in my career!
              </p>
            </div>
            <img src='https://firebasestorage.googleapis.com/v0/b/myprofile-3d66c.appspot.com/o/275718563_309957981236963_8603825760478865865_n.jpg?alt=media&token=b8d267f2-f26f-4272-9f05-24c4bf15ad61' class='col col-5 column2' />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Aboutme