import React from "react";
import { BrowserRouter as Switch, Router, Route } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Homepage from "./pages/Home";

function App() {

  return (
    <Router>
      <Header />
      <Switch>
      <Route exact path="/" component={Homepage}>
        <Homepage />
      </Route>
      
      <Route exact path="/contact" component={ContactForm} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/resume" component={Resume} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
