import React, { useState } from "react";

const ProyectoUno = () => {
  const [value, setValue] = useState(1);

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
      <form action="submit" method="post">
        <h1> Registrate en nuestra plataforma</h1>
        <p>
          Ingrese sus datos para poder registrarse, recuerde que es obligatorio
          ingresar sus datos.
        </p>
        <label htmlFor="nameInput">Ingrese su nombre: </label>
        <input type="text" id="name" name="nameInput" required />
        <br /> <br />
        <label htmlFor="apellidoInput">Ingrese su apellido: </label>
        <input type="text" id="apellido" name="apellidoInput" required />
        <br /> <br />
        <label htmlFor="emailInput">Ingrese su email: </label>
        <input type="mail" id="email" name="emailInput" required />
        <br /> <br />
        <label htmlFor="passwordInput">Ingrese su contraseña: </label>
        <input type="password" id="pass" name="passwordInput" required />
        <br /> <br />
        <button type="submit">Registrarse</button>
      </form>
      <hr />
      
      <div>
        <h3>Suma o Resta</h3>
        <p>se vera reflejado en el input disable</p>

        <input type="text" value={value} disabled />
        <br />
        <button onClick={restar}>Disminuir el valor!</button>
        <button onClick={sumar}>Aumentar el valor!</button>
        
      </div>
    </>
  );
};

export default ProyectoUno;
