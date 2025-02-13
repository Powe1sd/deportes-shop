import React from "react";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="URL_DEL_LOGO_DECATHLON"
            alt="Decathlon Logo"
            style={{ height: "30px" }} // Ajusta el tamaño del logo según necesites
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Deportes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Mujer
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Hombre
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Niños & Bebés
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Accesorios & Nutrición
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Últimas unidades
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Servicios
              </a>
            </li>
          </ul>
          <form className="d-flex me-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar entre 65 deportes y 5000 productos"
              aria-label="Search"
            />
          </form>
          <div className="d-flex">
            <a className="nav-link" href="#">
              Mi Cuenta
            </a>
            <a className="nav-link" href="#">
              Tiendas
            </a>
            <a className="nav-link" href="#">
              Ayuda
            </a>
            <a className="nav-link" href="#">
              Mi Carrito
            </a>
          </div>
        </div>
      </div>
      <div className="bg-warning text-center p-2">
        <p className="mb-0">
          ¡ENVÍOS GRATIS A PARTIR DE $250.000 MIL COP! Ver T&C
        </p>
      </div>
    </nav>
  );
};

export default Nav;
