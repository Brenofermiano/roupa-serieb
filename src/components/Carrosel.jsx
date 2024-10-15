import React from "react";
import imagem from './assets/imagem.jpg';
import imagem2 from './assets/imagem2.jpg';
import imagem3 from './assets/imagem3.jpg';

function Carrosel() {
    return (
      <div id="carouselExampleCaptions" className="carousel slide custom-carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={imagem2} className="d-block w-100 custom-carousel-image" alt="imagem1"/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Cojunto de Moda</h5>
            <p>A moda é a manifestação visível da alma, onde estilo e elegância se encontram em uma dança cheia de harmonia.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={imagem} className="d-block w-100 custom-carousel-image" alt="imagem2"/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Diversas Tonalidades</h5>
            <p>Elegância é como o estilo, não se pode comprar. É o seu gosto pela arte, a maneira como se movimenta.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={imagem3} className="d-block w-100 custom-carousel-image" alt="imagem3"/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Carrosel;