import { Link } from "react-router-dom"
import './NavbarComponent.css'
function NavbarComponent() {
    return (
        <ul className="d-flex my-navbar my-section">
            <li className="lead">
                <Link to={'/'}>Home</Link>
            </li>
            <li className="lead">
                <Link to={'/cities'}>Città</Link>
            </li>
            <li className="lead">
                <Link to={'/new-city'}>Aggiungi città</Link>
            </li> 
        </ul>
    )
}

export default NavbarComponent