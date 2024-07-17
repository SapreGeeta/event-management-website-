import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";




const App = () => {
  return (
    <Router>
      <Navbar />
      <Home />
      <Services />
      <About/>
      <Contact />
      <Footer />
      <Toaster />
    </Router>
  );
};

export default App;
