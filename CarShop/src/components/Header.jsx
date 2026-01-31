import './Header.css'
import { Link } from 'react-router-dom';

function Header({logo, cartCount}) {
    return (
        <header className="app-header">
            <h1 className="logo">{logo}</h1>
            <nav className="nav-menu">
                <Link to="/" className='nav-link'>Home</Link>
                <Link to="/products" className='nav-link'>Shop</Link>
            </nav>
            <div className="cart-container"> 
                <Link to="/cart">
                    <span className="cart-icon">🛒</span> 
                    <span className="cart-count">{cartCount}</span> 
                </Link>
            </div>
        </header>
    )
}

export default Header;