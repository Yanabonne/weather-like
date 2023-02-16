import React from "react";
import './App.css';

import Header from '../widgets/Header/Header.js';
import AboutProject from '../pages/AboutProject/AboutProject.js';

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
    </div>
  );
}

export default App;
