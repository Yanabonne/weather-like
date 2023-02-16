import React from "react";
import './App.css';

import Header from '../widgets/Header/Header.js';
import AboutProject from '../pages/AboutProject/AboutProject.js';
import Footer from "../widgets/Footer/Footer";

function App() {
  React.useEffect(() => {
    window.addEventListener("scroll", (e) => {
      document.body.style.cssText = `--scrollTop: ${window.scrollY}px`;
    });
  }, [])

  return (
    <div className="app">
      <Header />
      <AboutProject />
      <Footer />
    </div>
  );
}

export default App;
