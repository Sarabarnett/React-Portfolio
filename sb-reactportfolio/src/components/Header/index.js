import React from "react";
import { Link } from "react-router-dom";


function Header() {
  
  return(
   <main>
     <header>
       <Link style={{ textDecoration: "none" }} to="/">
       <img src="../../assets/images/SB-flower-logo-small.png" alt="daisy with SB in the center" />
        <h1>Sara Barnett</h1>
       </Link>
       <nav>
       <ul>
        <li>
        <Link style={{ textDecoration: "none" }} to="/">
          <h3>About Me</h3>
        </Link>
        </li>
        <li>
        <Link style={{ textDecoration: "none" }} to="/portfolio">
          <h3>Portfolio</h3>
        </Link>
        </li>
        <li>
        <Link style={{ textDecoration: "none" }} to="/resume">
          <h3>Resume</h3>
        </Link>
        </li>
        <li>
        <Link style={{ textDecoration: "none" }} to="/contact">
          <h3>Contact</h3>
        </Link>
        </li>
        </ul>
       </nav>
     </header>
   </main> 
  )
};

export default Header;