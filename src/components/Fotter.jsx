import React from 'react'
import './fotter.css'
function Fotter() {
  return (
    <>
      <footer>
<div class="row primary">
  <div class="column about">

  <img id='img' src="https://preview.colorlib.com/theme/confer/img/core-img/logo.png" alt="" />

   <p id='p'>
   To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain.
  </p>

  {/* <div class="social">
    <i class="fa-brands fa-facebook-square"></i>
    <i class="fa-brands fa-instagram-square"></i>
    <i class="fa-brands fa-twitter-square"></i>
    <i class="fa-brands fa-youtube-square"></i>
    <i class="fa-brands fa-whatsapp-square"></i>
  </div> */}
</div>

<div class="column links">
<h5 id='h5'>Contact</h5>

 <ul>

  <li>
   <a href="#faq">184 Main Collins Street</a>
  </li>
  <li>
   <a href="#cookies-policy">(226) 446 9371</a>
  </li>
  <li>
   <a href="#terms-of-services"> confer@gmail.com</a>
  </li>
  <li>
   <a href="#support">www.confer.com</a>
  </li>
 </ul>

</div>


<div class="column links">
  <h5 id='h5'>Workshops</h5>
   <ul id='ul'>
    <li>
     <a href="#faq">OSHA Compliance</a>
    </li>
    <li>
     <a href="#cookies-policy">Microsoft Excel Basics</a>
    </li>
    <li>
    <a href="#terms-of-services">Forum Speaker Series</a>
    </li>
    <li>
    <a href="#support">Tedx Moscow Conference</a>
    </li>
  </ul>
</div>

<div class="column subscribe">
 <h5 id='h5'>Gallery</h5>
  <div>
   <div className="img1">
    <img src="https://preview.colorlib.com/theme/confer/img/bg-img/21.jpg" alt="" />
    <img src="https://preview.colorlib.com/theme/confer/img/bg-img/22.jpg" alt="" />
    <img src="https://preview.colorlib.com/theme/confer/img/bg-img/23.jpg" alt="" />
   </div>
   <div className="img2">
   <img src="https://preview.colorlib.com/theme/confer/img/bg-img/24.jpg" alt="" />
    <img src="https://preview.colorlib.com/theme/confer/img/bg-img/25.jpg" alt="" />
    <img src="https://preview.colorlib.com/theme/confer/img/bg-img/26.jpg" alt="" />
   </div>
  </div>

</div>

</div>

<div class="row copyright">

  <div class="footer-menu">

  <a href="https://www.google.com/">Home</a>
  <a href="https://www.google.com/">About</a>
  <a href="https://www.google.com/">Contact</a>
  <a href="https://www.google.com/">Blog</a>
  <a href="https://www.google.com/">Social</a>

  </div>
   <p>Copyright &copy; 2023 Gupta Developer</p>
</div>
</footer>
    </>
  )
}

export default Fotter