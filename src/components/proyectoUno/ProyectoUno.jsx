import React, { useState } from "react";
import PuntoTres from "./PuntoTres";

import "./ProyectoUno.css";

const ProyectoUno = () => {
  const [value, setValue] = useState(0);

  const sumar = () => {
    setValue(value + 1);
    console.log(value);
  };

  const restar = () => {
    setValue(value - 1);
    console.log(value);
  };

  return (
    <>
      <div className="container">
        <form action="submit" method="post">
          <PuntoTres />
          <div className="formContainer">
            <label className="labelForm" htmlFor="nameInput">
              Ingrese su nombre:{" "}
            </label>
            <input
              className="inputForm"
              type="text"
              id="name"
              name="nameInput"
              required
            />
            <br /> <br />
            <label className="labelForm" htmlFor="apellidoInput">
              Ingrese su apellido:{" "}
            </label>
            <input
              className="inputForm"
              type="text"
              id="apellido"
              name="apellidoInput"
              required
            />
            <br /> <br />
            <label className="labelForm" htmlFor="emailInput">
              Ingrese su email:{" "}
            </label>
            <input
              className="inputForm"
              type="mail"
              id="email"
              name="emailInput"
              required
            />
            <br /> <br />
            <label className="labelForm" htmlFor="passwordInput">
              Ingrese su contraseña:{" "}
            </label>
            <input
              className="inputForm"
              type="password"
              id="pass"
              name="passwordInput"
              required
            />
            <br /> <br />
            <button className="registerButton" type="submit">
              Registrarse
            </button>
            <br /> <br />
          </div>
        </form>
        <hr />

        <div className="puntoCuatroContainer">
          <h1>Suma o Resta</h1>
          <p>Se vera reflejado en el input desactivado.</p>
          <input type="text" value={value} disabled />
          <br /> <br />
          <div>
            <button className="decreaseButton" onClick={restar}>
              ¡Disminuir el valor!
            </button>
            <button className="incrementButton" onClick={sumar}>
              ¡Aumentar el valor!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProyectoUno;
