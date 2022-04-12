import React from "react";
import '../../index.css';
import EMR from "../../assets/images/homepage-screenshot.jpg";


function Portfolio() {
  return(

<main>
<section> 
      <h3>
        My Work
      </h3>

      <div className="work">
      <a href="https://arcane-hamlet-39116.herokuapp.com/">
        <img src={EMR} alt="EMR homepage" />
      </a>
        <div>
        <h3>
          <a href="https://arcane-hamlet-39116.herokuapp.com/">EMR</a>
        </h3>
        <p>
        EMR is a Full-Stack MERN storage app specifically designed to house all of the confidential health information that you have accumulated over your many years as a patient.
        </p>
        </div>
      </div>
  </section>
  </main>
  )
}

export default Portfolio;