import React from 'react'
import '../Styles/Hero.css'
import img1 from '../Images/img2No.jpeg'
import img2 from '../Images/img6No.jpeg'

import img3 from '../Images/img21Yes.jpeg'

import img4 from '../Images/img17Yes.jpeg'


const Hero = () => {
  return (
    <div>


<div class="carouselFlex">

    <div>
        <h1>Buy Original  Men&Women FootWears at affordable price from <strong className='mhidey'>Mhidey </strong></h1>
    </div>
     <div class="first">
        <div class="container">
            <div class="content">
              {/* <div class="carousel-content">
                <h1 class="carousel-heading">GeeksforGeeks</h1>
                <h3>A computer science portal for geeks</h3>
              </div> */}
              <div class="slideshow">
                <button class="slide-btn slide-btn-1"></button>
                <button class="slide-btn slide-btn-2"></button>
                <button class="slide-btn slide-btn-3"></button>
                <button class="slide-btn slide-btn-4"></button>
                <div class="slideshow-wrapper">
                  <div class="slide">
                    <img class="slide-img" src={img1} />
                  </div>
                  <div class="slide">
                    <img class="slide-img" src={img2} />
                  </div>
                  <div class="slide">
                    <img class="slide-img" src={img3} />
                  </div>
                  <div class="slide">
                    <img class="slide-img" src={img4} />
                  </div>
                </div>
              </div>
            </div>
          </div>
     </div>

      
    </div>
    </div>
  )
}

export default Hero