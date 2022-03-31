import './index.css'

export const Carousel = () => (
  
  <div class="custom-carousel-container">
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active jimmy-background" data-bs-interval="4000">
          <img src="https://firebasestorage.googleapis.com/v0/b/myprofile-3d66c.appspot.com/o/qbdp%20(signed).png?alt=media&token=e649e96a-f43f-4f48-a83c-e95318e998ad" class="d-block h-100 image-center" alt=''/>
          <div class="carousel-caption d-none d-md-block jimmy-font">
            <p>お姉様 ft. jimmy</p>
            <p>Show support to my friend! 
              <a target="_blank" class="jimmy-instagram" href="https://instagram.com/qbdpjim?utm_medium=copy_link">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </p>
          </div>
        </div>
        <div class="carousel-item mechanical-hand-background" data-bs-interval="4000">
          <img src="https://firebasestorage.googleapis.com/v0/b/myprofile-3d66c.appspot.com/o/mecha%20hand%20illustration%20final%20Production.bmp?alt=media&token=8d8e5033-06a8-43f7-ac22-3b70cdeed320" class="d-block h-100 image-center" alt=''/>
          <div class="carousel-caption d-none d-md-block mechanical-hand-font">
            <p>@<a href='https://instagram.com/qbdpjim?utm_medium=copy_link' style={{ color: 'black'}} target="_blank">qbdpjim</a></p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
)