import './ProductCard.css'

function ProductCard({carPhoto, makeModel, specs, price, onAddToCart, productData}) {
    return (
        <div className="product-card">
            <div className="product-header">
                <img src={carPhoto} 
                alt=""
                className="car-photo"
                 />
                 <div className="car-info">
                    <h3 className="make-model">{makeModel}</h3>
                    <p className="specs">{specs}</p>
                    <h2 className="price">{price}</h2>
                 </div>
                 <div className="actions">
                    <button className="action-btn" onClick={() => onAddToCart(productData)}>Add to Cart</button>
                    <button className="action-btn">Share</button>
                 </div>
            </div>
        </div>
    );
}

export default ProductCard;