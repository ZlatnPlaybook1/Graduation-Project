const ProductCard = ({ product }) => (
  <div className="card">
    <img src={product.image} className="card-img-top" alt={product.name} />
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text text-warning">
        {Array.from({ length: product.rating }, (_, i) => (
          <span key={i}>⭐</span>
        ))}
      </p>
      <p className="card-text">${product.price.toFixed(2)}</p>
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
);

export default ProductCard;
