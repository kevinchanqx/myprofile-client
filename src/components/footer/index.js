import './index.css'

const Footer = () => (
  <>
    <div class="container-fluid footer">
      <div class="row footer-row1">
        <h2>Follow me on </h2>
      </div>
      <div class="row footer-row2">
        <div class="col font-shadow">
          <a target="_blank" href='https://www.facebook.com/KevinChanqx/' class='facebook'>
            <i class="fa-brands fa-facebook-square" ></i>
          </a>
        </div>
        <div class="col">
          <a target="_blank" href="https://instagram.com/kevinchan0120?r=nametag" class ="instagram">
            <i class="fa-brands fa-instagram-square"></i>
          </a>
        </div>
        <div class="col">
          <a target="_blank" href="https://www.linkedin.com/in/chan-quan-xin-kevin-283314168/" class ="linkedin">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div class="row footer-row3">
        <h3 class="footer-font"><i class="fa-regular fa-copyright"></i>COPYRIGHT 2022 KEVIN CHAN. ALL RIGHT RESERVED.</h3>
      </div>
    </div>
  </>
)

export default Footer