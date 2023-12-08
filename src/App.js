import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Views/Home/Home";
import About from "./Views/About/About";
import Erreur from "./Views/404/Error";
import Logement from "./Views/Logement/Logement";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/logement/:id" element={<Logement />} />;
        <Route path="/about" element={<About />} />;
        <Route path="*" element={<Erreur />} />;{/* <Route path="/Logement" element={<Logement />} />; */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
