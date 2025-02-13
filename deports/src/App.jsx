import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./components/nav"; // Importa el componente Nav
import Modulo2 from "./modulo2";
import "./App.css";
const App = () => {
  return (
    <div>
      <Nav /> {/* Utiliza el componente Nav */}
      {/* El resto de tu aplicación */}
      <h1>Bienvenido a Decathlon</h1>
      <p>Explora nuestra gran variedad de productos deportivos.</p>
      <Modulo2 />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
