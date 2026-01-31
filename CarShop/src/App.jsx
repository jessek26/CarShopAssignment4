import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';

function App() {
  const cars = [
    {
      id: 1,
      make: 'Lexux IS 350',
      price: '$45,000',
      specs:'2023, 31k Miles',
      image: 'https://placehold.co/600x400/FF6B6B/ffffff?text=TG42'
    },
    {
      id: 2,
      make: 'BMW M340i',
      price: '$29,500',
      specs: '2019, 72k miles',
      image: 'https://placehold.co/600x400/FF6B6B/ffffff?text=TG42'
    },
    {
      id: 3,
      make: 'Toyota Tacoma',
      price: '$52,000',
      specs: '2025, 7k Miles',
      image: 'https://placehold.co/600x400/FF6B6B/ffffff?text=TG42'
    }
  ]

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart)); },
    [cart]);
  

  const addToCart = (data) => {
    setCart([...cart, data]);
  }

  const removeFromCart = (idToRemove) => {
    const updatedCart = cart.filter(item => item.id !== idToRemove);
    setCart(updatedCart);
  }
  
  return (
    <BrowserRouter>
      <div className="app">
        <Header
        logo="Jesse's Car Shop"
        cartCount={cart.length}
        />
        <Routes>
          <Route path ='/' element={<HomePage />}/>
          <Route path ='/products' element={<ProductsPage  products={cars} addToCart={addToCart} />}/>
          <Route path ='/cart' element={<CartPage products={cart} removeFromCart={removeFromCart} />}/>
        </Routes>
        <Footer
        logo="Jesse's Car Shop"
        email='jessescarshop@gmail.com'
        phone='1(800)-CAR-SHOP'
        address='12 Appleberry Lane'
        ></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;