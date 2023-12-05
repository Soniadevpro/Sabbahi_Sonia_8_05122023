import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Views/Home/Home";
import About from "./Views/About/About";
import Erreur from "./Views/404/Error";
import Fiche from "./Views/Logement/Logement";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/about" element={<About />} />;
        <Route path="*" element={<Erreur />} />;
        <Route path="/fiche" element={<Fiche />} />;
      </Routes>
    </BrowserRouter>
  );
};
export default App;
