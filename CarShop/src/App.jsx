import './App.css'
import Header from './components/Header';
import ProductCard from './components/ProductCard'
import Hero from './components/Hero';
import Footer from './components/Footer';
import {useState} from 'react';
import CartItem from './components/CartItem';

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

  const [cart, setCart] = useState([]);

  const addToCart = (data) => {
    setCart([...cart, data]);
  }

  const removeFromCart = (idToRemove) => {
    const updatedCart = cart.filter(item => item.id !== idToRemove);
    setCart(updatedCart);
  }

  const findTotal = () => {
    return cart.reduce((total, item) => {
      const stripPrice = item.price.replace(/[$,]/g, ""); // removes $ and , from the price so its just a number
      
      return total + Number(stripPrice);
    }, 0);
  };
  
  return (
    

    <div className="app">
      <Header
      logo="Jesse's Car Shop"
      cartCount={cart.length}
      />

      <Hero
      lotPic="https://di-uploads-pod12.dealerinspire.com/automotiveavenue/uploads/2021/08/header.jpg"
      welcome="Welcome to Jesse's Car Shop"
      caption="Shop Jesse's inventory online!"></Hero>
      
    <main className="cars-grid">
      {cars.map((car) => (
      <ProductCard
      productData={car}
      key={car.id}
      carPhoto={car.image}
      makeModel={car.make}
      specs={car.specs}
      price={car.price}
      onAddToCart={addToCart}/>))}
      
      
      </main>
      <div className="cart-section">
        <h2>Your Cart</h2>
        {cart.length === 0 && <p>Your cart is empty.</p>} {/* empty cart */}

        {cart.map((item, index) => (
          <CartItem
          key={index}
          item={item}
          onRemove={removeFromCart}
          />
        
        ))}
        {cart.length > 0 && (
        <div className="cart-total">
            <h3>Total: ${findTotal().toLocaleString()}</h3>
        </div>
        )}
      </div>
      <Footer
      logo="Jesse's Car Shop"
      email='jessescarshop@gmail.com'
      phone='1(800)-CAR-SHOP'
      address='12 Appleberry Lane'
      ></Footer>
    </div>
  )
}

export default App;