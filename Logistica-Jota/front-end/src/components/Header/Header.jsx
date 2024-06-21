import "./Header.css"
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
  return (
    <div className="header">
      <a href="/">
        <img src="/src/assets/img/logo.jpg" alt="Logo de la empresa" />
      </a>

      <nav>
        <a href="/services">Servicios</a>
        <a href="/aboutUs">Sobre Nosotros</a>
        <a href="/contact">Contacto</a>
      </nav>

      <div className="botones">
        {localStorage.token ? (
          <>
            <button onClick={() =>{ 
              localStorage.removeItem("token")
              navigate('/')}}>Cerrar Sesion</button>
          </>
        ) : (
          <>
            <button onClick={() => navigate('/signUp')}>Registrate</button>
            <button onClick={() => navigate('/login')}>Accede</button>
          </>
        )}
      </div>
    </div>
  )
}

export default Header