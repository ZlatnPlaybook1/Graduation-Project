import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="container mt-5">
      <h2>{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        className="img-fluid"
        style={{ maxWidth: "300px" }}
      />
      <p>{product.description}</p>
      <h4>${product.price}</h4>
      <Link to="/" className="btn btn-primary">
        Back to Shopping
      </Link>
    </div>
  );
};

export default DetailPage;
