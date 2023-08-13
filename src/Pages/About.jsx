import React from "react";
import { Link } from "react-router-dom";
import "../Styles/About.css";
import mhidey from "../Images/mhidey.jpeg";

const About = () => {
  return (
    <div>
      <section className="aboutWrap1">
        <div>
          <h1>hello, I'm Bello Ayomide</h1>

          <div>
            <img src={mhidey} alt="Ayomide" />
          </div>
        </div>

       <div>
       <p>
         I am  a Banking and Finance student at Laspotech. Despite my academic
          background, my passion led me to excel in the footwear business. With
          2 years of dedicated experience in the footwear business, I've not
          only developed a strong sense of customer relations but also
          cultivated a friendly and welcoming approach. My journey has equipped
          me with valuable insights into both the financial and footwear aspects
          of business, and I'm eager to continue making strides in this dynamic
          field.... click <Link to='/'>here</Link> to go back to the shop page 
        </p>
       </div>
      </section>
    </div>
  );
};

export default About;
