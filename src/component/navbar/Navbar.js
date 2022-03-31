import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';


function Navbar() {

    return (
        <div>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <img src="" alt={""} />
                <div>
                    <ul className="mb-0 d-flex nav-menu">
                        <ul className="nav-item">
                            <NavLink to={'/'}>
                                <Link to={'/'} className='nav-item active'>Home </Link>
                                <Link to={'blogs'} className='nav-item'>Blog </Link>
                            </NavLink>
                        </ul>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    )
}

export default Navbar;