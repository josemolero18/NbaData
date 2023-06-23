import React, { useState } from "react";

export const Card = ({ nombre, fundacion, conferencia, arena, mascota, logo }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseOver = () => {
    setIsFocused(true);
  };

  const handleMouseOut = () => {
    setIsFocused(false);
  };

  return (
    <div
      className={`card mb-3 ${isFocused ? "border border-danger-subtle" : ""}`}
      style={{ maxWidth: "540px" }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="row g-0">
        <div className="col-md-4 d-flex align-items-center">
          <img src={logo} className="img-fluid rounded-start mx-auto" alt={nombre} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Conferencia: <b>{conferencia}</b>
              </li>
              <li className="list-group-item">
                Arena: <b>{arena}</b>
              </li>
              <li className="list-group-item">
                Mascota: <b>{mascota}</b>
              </li>
              <li className="list-group-item">
                <small className="text-body-secondary">Fundacion: {fundacion}</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
