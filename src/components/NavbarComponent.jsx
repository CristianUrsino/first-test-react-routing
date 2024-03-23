import { Link } from "react-router-dom"
function NavbarComponent() {
    return (
        <ul>
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