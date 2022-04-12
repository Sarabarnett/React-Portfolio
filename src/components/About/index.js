import React from "react";
import '../../index.css';
import Avatar from "../../assets/images/sara-avatar-small.png"


function About() {

  return(
  <main>
    <div>
      <div className="about">
      <img src={Avatar} alt="avatar icon"/>
      <h2>Hi, I'm Sara!</h2>
      </div>
      <p className="aboutBlurb">
      My name is Sara Barnett, thank you for visiting my portfolio! 
      I'm a Salt Lake City, Utah native and I love to ski, hike, mountain 
      and road bike, read, play with my dog and more recently CODE!! I 
      completed a Full-Stack web-development coding bootcamp through the 
      University of Utah in April 2022 after having gotten a college degree 
      in health and working in healthcare for a handful of years following.
      I knew it wasn't the right path for me, and that was the catalyst for my 
      decision to pivot and try something new! I know I've only scratched the surface
      of the web devleopment world and I can't wait to continue learninga and finding
      my passion within the tech world.
      </p>
    </div>

  </main>

  )
}

export default About;