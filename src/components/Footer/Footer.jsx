import React from "react";
import { Link } from "react-router-dom";
import "./footer.css"

const footer = () => {
  return (
    <>

      <footer className="footer">
        <div className="footercontenedor">
          <div className="navegacion">
            <h1> NAVEGACIÓN</h1>
            <div id="barra">
              <Link to="/" className="barraitems"> INICIO </Link>
              <Link to="/producto" className="barraitems"> PRODUCTOS</Link>
              <Link to="/contacto" className="barraitems"> CONTACTO </Link>
            </div>
          </div>
          <div className="newsletter">
            <h1 className="newslettertitulo">NEWSLETTER</h1>
            <div className="newsletterboton">
              <input className="botonEnviar" type="text" placeholder="Email"></input>
              <button type="reset" className="iconoEnviar"> <i className="fa-solid fa-paper-plane icono-enviar-blanco"></i></button>
            </div>
          </div>
    </>
)
export