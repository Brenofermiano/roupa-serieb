import React from "react";
import imagem4 from "./assets/imagem4.jpg";
import imagem5 from "./assets/imagem5.jpg";
import imagem6 from "./assets/imagem6.jpg";
import imagem7 from "./assets/imagem7.jpg";
import imagem8 from "./assets/imagem8.jpg";
import imagem9 from "./assets/imagem9.jpg";
import "./styles.css";

function ModeAction() {
  return (
    <div className="container text-center">
      <h1 className="text-center mb-4">Novos Modelos</h1>
      <div className="row g-4">
        {[
          { src: imagem4, alt: "Modelo 1", price: "R$ 35" },
          { src: imagem5, alt: "Modelo 5", price: "R$ 65" },
          { src: imagem6, alt: "Modelo 6", price: "R$ 100" },
          { src: imagem7, alt: "Modelo 7", price: "R$ 15" },
          { src: imagem8, alt: "Modelo 8", price: "R$ 90" },
          { src: imagem9, alt: "Modelo 9", price: "R$ 600" },
        ].map((item, index) => (
          <div className="col-md-4" key={index}>
            <img
              src={item.src}
              className="card-img-top"
              alt={item.alt}
              loading="lazy"
            />
            <div className="card-body m-3">
              <h5 className="card-title m-2">Lorem ipsum dolor sit amet...</h5>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ModeAction;
