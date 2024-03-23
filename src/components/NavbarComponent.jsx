import { Link } from "react-router-dom"
import './NavbarComponent.css'
function NavbarComponent() {
    return (
        <ul className="d-flex my-navbar">
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/cards'}>Cards</Link>
            </li>
            <li>
                <Link to={'/card-details'}>Card Details</Link>
            </li> 
        </ul>
    )
}

export default NavbarComponent