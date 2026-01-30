import './CartItem.css';

function CartItem ({ item, onRemove}) {
    return (
        <div className="cart-item">
            <div className="cart-item-info">
                <h4>{item.make}</h4>
                <p>{item.price}</p>
            </div>
            <button className="remove-btn" onClick={() => onRemove(item.id)}>Remove</button>
        </div>
    );
}

export default CartItem;