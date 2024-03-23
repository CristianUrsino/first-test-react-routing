import { Link } from "react-router-dom"
import './NavbarComponent.css'
function NavbarComponent() {
    return (
        <ul className="d-flex my-navbar">
            <li className="lead">
                <Link to={'/'}>Home</Link>
            </li>
            <li className="lead">
                <Link to={'/cards'}>Cards</Link>
            </li>
            <li className="lead">
                <Link to={'/card-details'}>Card Details</Link>
            </li> 
        </ul>
    )
}

export default NavbarComponent