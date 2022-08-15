// Hooks
import { useContext } from 'react';

// Components
import { Link, NavLink } from 'react-router-dom';

// Context
import { AppContext } from '../../context/AppContext';

export default function Navbar() {
    const { numberOfProducts } = useContext(AppContext);

    return (
        <nav className="navbar">
            <Link className="nav-brand" to="/">SuperM</Link>

            <ul>
                <li className="nav-item">
                    <NavLink className={({isActive}) => (isActive ? 'active ' : '')} to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={({isActive}) => (isActive ? 'active ' : '')} to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={({isActive}) => (isActive ? 'active ' : '')} to="/products">Products</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={({isActive}) => `nav-cart btn btn-accent ${isActive ? 'active ' : ''}`} to="/cart">Cart ({numberOfProducts})</NavLink>
                </li>
            </ul>
        </nav>
    )
}
