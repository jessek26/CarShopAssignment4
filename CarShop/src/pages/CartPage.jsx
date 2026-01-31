import CartItem from "../components/CartItem";



function CartPage ({products, removeFromCart}) {
    const findTotal = () => {
    return products.reduce((total, item) => {
      const stripPrice = item.price.replace(/[$,]/g, ""); // removes $ and , from the price so its just a number
      
      return total + Number(stripPrice);
    }, 0);
  };

    return (
        <div className="cart-section">
        <h2 className="cart-headline">Your Cart</h2>
        {products.length === 0 && <p className="cart-headline">Your cart is empty.</p>} {/* empty cart */}

        {products.map((item, index) => (
          <CartItem
          key={index}
          item={item}
          onRemove={removeFromCart}
          />
        
        ))}
        {products.length > 0 && (
        <div className="cart-total">
            <h3>Total: ${findTotal().toLocaleString()}</h3>
        </div>
        )}
      </div>
    );
}

export default CartPage; 