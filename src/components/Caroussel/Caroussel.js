import React from "react";
import { useState } from "react";
import "../Caroussel/Caroussel.scss";
import ArrowLeft from "../../assets/img/arrowleft.png";
import ArrowRight from "../../assets/img/arrowright.png";

const Caroussel = ({ slides }) => {
  // Utilisation du hook d'état (useState) pour suivre l'index de la diapositive actuelle.
  const [currentSlide, setCurrentSlide] = useState(0);
  //fonction pour passer à la diapo suivante
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };
  //fonction pour passer à la fonction précédente
  const prevSlide = () => {
    //opérateur modulo "%" pour gérer la boucle entre les diapo
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };
  // Si le tableau de slides ne contient qu'une seule image, affiche simplement cette image.
  if (slides.length === 1) {
    return (
      <div className="slider">
        <img src={slides[0]} alt="" />
      </div>
    );
  }
  // Si le tableau de slides contient plus d'une image, affiche les boutons "Précédent" et "Suivant"
  // pour permettre la navigation entre les diapositives.
  return (
    <div className="slider">
      <div className="button-container">
        <button onClick={prevSlide}>
          <img className="arrowleft" src={ArrowLeft} alt="flèche gauche" />
        </button>
        <button onClick={nextSlide}>
          <img className="arrowright" src={ArrowRight} alt="flèche droite" />
        </button>
      </div>
      <img className="slide-image" src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      <div className="slide-number">{`${currentSlide + 1} / ${slides.length}`}</div>
    </div>
  );
};

export default Caroussel;

// Le composant Caroussel prend en entrée un tableau slides qui contient les chemins des images à afficher.
// Il utilise le hook d'état useState pour suivre l'index de la diapositive actuelle (currentSlide).
// Deux fonctions nextSlide et prevSlide sont définies pour passer à la diapositive suivante ou précédente en mettant à jour l'état currentSlide.
// Dans la partie de rendu, si le tableau slides ne contient qu'une seule image, il affiche simplement cette image dans une balise <div> avec la classe CSS "slider".
// Si le tableau slides contient plus d'une image, il affiche les boutons "Précédent" et "Suivant" pour permettre à l'utilisateur de naviguer entre les diapositives.
//L'image affichée est basée sur l'index currentSlide, et chaque image a une description textuelle basée sur son numéro de diapositive.
//L'opérateur modulo (%) est utilisé pour gérer la boucle entre les diapositives, de sorte qu'après la dernière diapositive, la première diapositive est affichée et vice versa.
