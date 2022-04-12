import React from "react";
import '../../index.css';
import LinkedInLogo from "../../assets/images/linkedin-thumbnail.png";
import GithubLogo from "../../assets/images/github-thumbnail.png";
function Footer() {

return (
  <footer>
    <div>
    <a className="thumbnail" href="https://github.com/Sarabarnett" target="_blank">
      <img src={GithubLogo} alt="github logo"/>
    </a>
    <a className="thumbnail" href="https://www.linkedin.com/in/sara-barnett-728719117/" target="_blank">
      <img src={LinkedInLogo} alt="linkedIn logo"/>
    </a>
    </div>        
  </footer>
)
};

export default Footer;