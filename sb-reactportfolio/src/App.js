import React, {useState} from "react";
import { BrowserRouter as Router, Route } from "react";
import Header from './components/Header';
import About from './components/About';
import ContactForm from './components/Contact';

function App() {
  return (
    <Router>
      <Header />

    </Router>
  );
}

export default App;
