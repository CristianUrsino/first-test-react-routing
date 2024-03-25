import { Link } from "react-router-dom"
import './NavbarComponent.css'
function NavbarComponent() {
    return (
        <ul className="d-flex my-navbar my-section">
            <li className="lead">
                <Link to={'/'}>Home</Link>
            </li>
            <li className="lead">
                <Link to={'/cards'}>Città</Link>
            </li>
            <li className="lead">
                <Link to={'/card-details'}>Città</Link>
            </li> 
        </ul>
    )
}

export default NavbarComponent