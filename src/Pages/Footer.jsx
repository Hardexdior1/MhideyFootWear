import React from 'react'
import '../Styles/Footer.css'
import twitter from '../Images/Twitter.PNG'

const Footer = () => {
  return (
    <div>
        <footer className="footer">

            <div>
                <h3>My contact</h3>
               <ul>
               <li> <b>phone:</b> 0702 639 9492  </li>
                <li> <b>Email:</b> belloayomide26@gmail.com</li>
               </ul>
            </div>

            <div>
                <h3>Developer's  contact</h3>
               <ul>
               <li> <b>phone:</b> 09021004201 </li>
                <li> <b>Email:</b> adeniranquwam001@gmail.com</li>
                <li><a href="https://twitter.com/Adeniran Quwam"><img src={twitter} alt="twitterIcon" /> </a></li>  </ul>              
            </div>

            
        </footer>


    </div>
  )
}

export default Footer