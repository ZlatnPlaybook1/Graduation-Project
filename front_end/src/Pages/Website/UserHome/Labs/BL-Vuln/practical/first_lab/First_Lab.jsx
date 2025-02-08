import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductsPage.css";

// Inline Navigation component
const Navigation = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    setLoggedIn(isLoggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.setItem("loggedIn", "false");
    setLoggedIn(false);
    // Optionally add redirection here
  };

  return (
    <nav className="custom-nav">
      <ul className="custom-nav__list">
        <li className="custom-nav__item">
          <Link to="/BL-Vuln/BL_Vuln_labs/first_lab/cart">Cart</Link>
        </li>
        <li className="custom-nav__item">
          <Link to="/BL-Vuln/BL_Vuln_labs/first_lab">Shopping</Link>
        </li>
        <li className="custom-nav__item">
          <Link to="/BL-Vuln/BL_Vuln_labs/first_lab/myaccount">MyAcc</Link>
        </li>
        {loggedIn ? (
          <li className="custom-nav__item">
            <button onClick={handleLogout} className="btn btn-link">
              Logout
            </button>
          </li>
        ) : (
          <li className="custom-nav__item">
            <Link to="/BL-Vuln/BL_Vuln_labs/first_lab/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

const ProductCard = ({ product, addToCart }) => {
  const [clicked, setClicked] = useState(false);

  const handleBuy = () => {
    addToCart(product);
    setClicked(true);
  };

  const handleRemove = () => {
    setClicked(false);
  };

  return (
    <div className="my-product-card">
      <div className="product-card__container">
        <div
          className="product-card__top"
          style={{
            backgroundImage: `url(${product.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className={`product-card__bottom ${
            clicked ? "product-card__bottom--clicked" : ""
          }`}
        >
          <div className="product-card__left">
            <div className="product-card__details">
              <h1 className="product-card__title">{product.title}</h1>
              <p className="product-card__price">${product.price.toFixed(2)}</p>
            </div>
            <div className="product-card__buy" onClick={handleBuy}>
              <i className="material-icons">add_shopping_cart</i>
            </div>
          </div>
          <div className="product-card__right">
            <div className="product-card__done">
              <i className="material-icons">done</i>
            </div>
            <div className="product-card__details product-card__details--right">
              <h1 className="product-card__title">{product.title}</h1>
              <p className="product-card__added">Added to your cart</p>
            </div>
            <div className="product-card__remove" onClick={handleRemove}>
              <i className="material-icons">clear</i>
            </div>
          </div>
        </div>
      </div>
      <div className="product-card__inside">
        <div className="product-card__icon">
          <i className="material-icons">info_outline</i>
        </div>
        <div className="product-card__contents">
          <div className="product-card__info">
            <div className="product-card__info-item">
              <span className="product-card__info-label">Category:</span>
              <span className="product-card__info-text">
                {product.category}
              </span>
            </div>
            <div className="product-card__info-item">
              <span className="product-card__info-label">Rating:</span>
              <span className="product-card__info-text">
                {product.rating.rate}
              </span>
            </div>
            <div className="product-card__info-item">
              <span className="product-card__info-label">Count:</span>
              <span className="product-card__info-text">
                {product.rating.count}
              </span>
            </div>
            <div className="product-card__info-item">
              <span className="product-card__info-label">Description:</span>
              <span className="product-card__info-text">
                {product.description.substring(0, 50)}...
              </span>
            </div>
            <div className="product-card__info-item">
              <span className="product-card__info-label">Show More</span>
              <span className="product-card__info-text">
                <Link
                  to={`/BL-Vuln/BL_Vuln_labs/first_lab/ProductDetail/${product.id}`}
                  className="product-card__info-text text-danger"
                >
                  Click Here
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load existing cart items from localStorage if available
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    let updatedCart;
    if (existingItem) {
      updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="products-page">
      <Navigation />
      <main className="products-page__main">
        <h1 className="products-page__title">Products</h1>
        <div className="products-page__grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
