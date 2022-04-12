import React from "react";
import '../../index.css';
import FlowerLogo from "../../assets/images/SB-flower-logo-small.png"


function Header(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage
  } = props;

  return(
     <header className="flex-row">
       <img src={FlowerLogo} alt="daisy with SB in the center" />
        <h1>Sara Barnett</h1>
       
      
       <nav>
          <ul className="flex-row">
             {pages.map(page => (
               <li className={`my-2 mx-2 ${page.name === currentPage.name && 'navActive'}`} key={page.name}>
                <span onClick={() => {
                    setCurrentPage(page)
                     }}
                 >
                {page.name}
                </span>
               </li>
              ))}
          </ul>
        </nav>

     </header>
  )
};

export default Header;