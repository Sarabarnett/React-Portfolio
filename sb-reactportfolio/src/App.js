import React from "react";
import { BrowserRouter as Router, Route } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={About}>
        <About />
      </Route>
      
      <Route exact path="/contact" component={ContactForm} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/resume" component={Resume} />

      <Footer />
    </Router>
  );
}

export default App;
