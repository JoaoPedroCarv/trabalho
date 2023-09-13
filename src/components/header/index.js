import { Link } from "react-router-dom";
import './style.css'

function Header() {
    return (
        <header>
            <h2>Suas notas On-line</h2>

            <div className="">
                <Link to="/verNotas">Notas</Link>
                <Link to="/novaNota">Adicionar nota</Link>
            </div>
        </header>
    )
}

export default Header;