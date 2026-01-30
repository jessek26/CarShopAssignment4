import './Header.css'

function Header({logo, cartCount}) {
    return (
        <header className="app-header">
            <h1 className="logo">{logo}</h1>
            <nav className="nav-menu">
                <a href="#" className="nav-link">Home</a>
                <a href="#" className="nav-link">Shop</a>
                <a href="#" className="nav-link">About</a>
                <a href="#" className="nav-link">Contact</a>
            </nav>
            <div className="cart-container"> 
                <span className="cart-icon">🛒</span> 
                <span className="cart-count">{cartCount}</span> 
            </div>
        </header>
    )
}

export default Header;