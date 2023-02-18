import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "../widgets/Header/Header.js";
import AboutProject from "../pages/AboutProject/AboutProject/AboutProject.js";
import OutfitRecommendations from "../pages/AboutProject/OutfitRecommendations/OutfitRecommendations";
import Footer from "../widgets/Footer/Footer";
import { getWeather } from "../shared/Api/Api";

function App() {
  React.useEffect(() => {
    window.addEventListener("scroll", (e) => {
      document.body.style.cssText = `--scrollTop: ${window.scrollY}px`;
    });
  }, []);

  // React.useEffect(() => {
  //   getWeather()
  //   .then((res) => {
  //     console.log(res)
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }, []);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function handleMenuButtonClick() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  }

  function closeAllPopups() {
    setIsMenuOpen(false)
  }

  function handleClosePopup(evt) {
    if (evt.key === "Escape" || (isMenuOpen && !evt.target.classList.contains("popup"))) {
      closeAllPopups();
    }
  }

  return (
    <div
      className="app"
      onKeyDown={handleClosePopup}
      onClick={handleClosePopup}
    >
      <Header handleMenuButtonClick={handleMenuButtonClick} isMenuOpen={isMenuOpen} />
      <Routes>
        <Route path="/pogodka" element={<AboutProject />} />
        <Route path="/how-to-dress" element={<OutfitRecommendations />} />
        <Route path="*" element={<Navigate to="/pogodka" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
