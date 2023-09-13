import { Link } from "react-router-dom";
import './headerStyle.css'

function Header() {
    return (
        <header>
            <h2>Consulta de países</h2>

            <div>
                <Link to="/">Inicio</Link>
                <Link to="/logar">Logar</Link>
            </div>
        </header>
    )
}

export default Header;