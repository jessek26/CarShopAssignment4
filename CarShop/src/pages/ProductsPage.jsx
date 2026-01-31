import ProductCard from '../components/ProductCard';

function ProductsPage({ products, addToCart }) {
    return (
      <main className="cars-grid">
          {products.map((car) => (
          <ProductCard
          productData={car}
          key={car.id}
          carPhoto={car.image}
          makeModel={car.make}
          specs={car.specs}
          price={car.price}
          onAddToCart={addToCart}/>))}
        </main>
    );
}

export default ProductsPage;