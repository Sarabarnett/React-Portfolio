import React from "react";
import '../../index.css';

function Portfolio() {
  return(

<main>
<section id="work"> 
      <h2>
        My Work
      </h2>

    <div>
      <div>
        <img src="../../assets/images/homepage-screenshot.jpg" alt="EMR homepage" />
        <div>
        <h3>
          <a href="https://arcane-hamlet-39116.herokuapp.com/">EMR</a>
        </h3>
        <p>
        My first group project web application that creates a fun user experience to search for recipes, generate a grocery list and find grocery stores nearby!
        </p>
        </div>
      </div>
    </div>
    </section>
  </main>
  )
}

export default Portfolio;