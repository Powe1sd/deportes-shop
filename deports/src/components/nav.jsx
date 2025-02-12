import React from 'react';

const Nav = () => {
  return (
    <nav style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="URL_DEL_LOGO_DECATHLON" alt="Decathlon Logo" style={{ height: '30px', marginRight: '10px' }} />
          <input type="text" placeholder="Buscar entre 65 deportes y 5000 productos" style={{ padding: '5px', borderRadius: '5px' }} />
        </div>
        <div>
          <a href="#" style={{ margin: '0 5px', color: '#333', textDecoration: 'none' }}>Mi Cuenta</a>
          <a href="#" style={{ margin: '0 5px', color: '#333', textDecoration: 'none' }}>Tiendas</a>
          <a href="#" style={{ margin: '0 5px', color: '#333', textDecoration: 'none' }}>Ayuda</a>
          <a href="#" style={{ margin: '0 5px', color: '#333', textDecoration: 'none' }}>Mi Carrito</a>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px' }}>
        <a href="#" style={{ margin: '0 5px', color: '#333', textDecoration: 'none' }}>Deportes</a>
        <a href="#" style={{ margin: '0 5px', color: '#333', textDecoration: 'none' }}>Mujer</a>
        <a href="#" style={{ margin: '0 5px', color: '#333', textDecoration: 'none' }}>Hombre</a>
        <a href="#" style={{ margin: '0 5px', color: '#333', textDecoration: 'none' }}>Niños & Bebés</a>
        <a href="#" style={{ margin: '0 5px', color: '#333', textDecoration: 'none' }}>Accesorios & Nutrición</a>
        <a href="#" style={{ margin: '0 5px', color: '#333', textDecoration: 'none' }}>Últimas unidades</a>
        <a href="#" style={{ margin: '0 5px', color: '#333', textDecoration: 'none' }}>Servicios</a>
      </div>
      <div style={{ backgroundColor: '#ffc107', padding: '10px', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>¡ENVÍOS GRATIS A PARTIR DE $250.000 MIL COP! Ver T&C</p>
      </div>
    </nav>
  );
};

export default Nav;