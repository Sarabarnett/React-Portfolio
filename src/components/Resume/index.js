import React from "react";
import '../../index.css';
import resumePDF from "../../assets/resume/Sara-Barnett-resume.pdf";

function Resume() {

  return(
    <main>
      <h3>
        My Resume
      </h3>
      <div className="resume">
        <h5 > 
          Download my&nbsp;
            <a className="resumeLink" href={resumePDF}>
             resume!
            </a>
        </h5>
        <h4>
          Technologies
        </h4>
        <h5>
          Front End
        </h5>
        <ul>
          <li>
            HTML
          </li>
          <li>
            CSS
          </li>
          <li>
            JavaScript
          </li>
          </ul>

          <h5>
            Back End
          </h5>
          <ul>
          <li>
            Node.js
          </li>
          <li>
            Express.js
          </li>
          <li>
            RESTful APIs
          </li>
          <li>
            MySQL
          </li>
          <li>
            MongoDB
          </li>
          <li>
            GraphQL
          </li>
        </ul>
      </div>
    </main>

  );
}


export default Resume;