import React from "react";
import { Link } from "react-router-dom";
import '../../index.css';

function Header(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage
  } = props;

  return(
   <main>
     <header>
       <Link style={{ textDecoration: "none" }} to="/">
       <img src="../../assets/images/SB-flower-logo-small.png" alt="daisy with SB in the center" />
        <h1>Sara Barnett</h1>
       </Link>
       
       <nav>
                <ul>
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
   </main> 
  )
};

export default Header;