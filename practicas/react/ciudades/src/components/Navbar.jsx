import "../components/Navbar.css";
import { NavLink } from 'react-router-dom';


export default function Navbar() {

    return (
      <>
        <header>
          
          <nav className="nav-logo">
            <NavLink default to="/Inicio">
              <p>Inicio</p>
            </NavLink>
          </nav>

          <nav className="nav-paginas">
            <NavLink to="/Formulario">
              <p>Añadir Ciudad</p>
            </NavLink>
          </nav>

        </header>
      </>
    )
  
}


