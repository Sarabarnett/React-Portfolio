import React, {useState} from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import About from "./components/About";

function App() {

  const [pages] = useState([
    { name : 'About' },
    { name: 'Portfolio' },
    { name: 'Resume' },
    { name: 'Contact' }
]);
const [currentPage, setCurrentPage] = useState(pages[0]);


return (
    <div>
        <Header 
            pages={pages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
        />
        <main>
            {currentPage.name === 'About' && <About />}
            {currentPage.name === 'Portfolio' && <Portfolio />}
            {currentPage.name === 'Resume' && <Resume />}
            {currentPage.name === 'Contact' && <ContactForm />}
        </main>
        <Footer />
    </div>
);
}

export default App;
