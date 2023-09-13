import { Link } from "react-router-dom";
import './style.css'

function Header() {
    return (
        <header>
            <h2>Suas notas On-line</h2>

            <div className="">
                <Link to="/inicio">Inicio</Link>
                <Link to="/login">Logar</Link>
            </div>
        </header>
    )
}

export default Header;