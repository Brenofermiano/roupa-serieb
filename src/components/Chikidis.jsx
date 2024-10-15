import React from "react";

function Chikidis() {
  return (
    <div className="d-flex justify-content-start">
      <button
        type="button"
        className="btn btn-secondary me-2"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement="top"
        data-bs-content="Top popover"
      >
        Modelos
      </button>
      <button
        type="button"
        className="btn btn-secondary me-2"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement="right"
        data-bs-content="Right popover"
      >
        Destaques
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement="bottom"
        data-bs-content="Bottom popover"
      >
        Preços
      </button>
    </div>
  );
}
export default Chikidis;
