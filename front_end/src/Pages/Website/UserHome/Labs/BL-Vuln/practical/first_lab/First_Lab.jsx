import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="container-fluid d-flex">
      <nav
        className="bg-dark text-white p-3"
        style={{ width: "200px", height: "100vh" }}
      >
        <ul className="list-unstyled">
          <li>
            <Link
              to="/BL-Vuln/BL_Vuln_labs/first_lab/cart"
              className="text-white"
            >
              Cart
            </Link>
          </li>
          <li>
            <Link to="/BL-Vuln/BL_Vuln_labs/first_lab" className="text-white">
              Shopping
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <div className="row mt-3">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <Link
                    to={`/BL-Vuln/BL_Vuln_labs/first_lab/ProductDetail/${product.id}`}
                    className="btn btn-secondary ms-2"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
