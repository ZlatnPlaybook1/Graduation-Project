import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ShoppingCart.css";
import GoBack from "../../../../Components/GoBack_Btn/GoBack_Btn";
import ShowHint from "../../../../Components/ShowHint_Btn/ShowHint_Btn";

export default function ShoppingCart() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [couponCode, setCouponCode] = useState("");
  const [userCoupon, setUserCoupon] = useState("");
  const [message, setMessage] = useState("");
  const [discount, setDiscount] = useState(
    parseInt(localStorage.getItem("discount")) || 0
  );

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8080/api/ShoppingCart")
      .then((response) => {
        setProducts(response.data.products);
        setCouponCode(response.data.couponCode);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("discount", discount);
  }, [cart, discount]);

  const addToCart = (price) => {
    const updatedCart = [...cart, price];
    setCart(updatedCart);
  };

  const applyDiscount = () => {
    axios
      .post("http://127.0.0.1:8080/api/ShoppingCart", {
        couponCode: userCoupon,
      })
      .then((response) => {
        setMessage(response.data.message);
        setDiscount(response.data.discount || 0);
      })
      .catch((error) => console.error("Error applying discount:", error));
  };

  const clearDiscount = () => {
    setDiscount(0);
    setUserCoupon("");
    setMessage("");
  };

  const resetCart = () => {
    setCart([]);
    setDiscount(0);
    setUserCoupon("");
    setMessage("");
    localStorage.removeItem("cart");
    localStorage.removeItem("discount");
  };

  const total = cart.reduce((sum, price) => sum + price, 0) - discount;

  return (
    <>
      <GoBack />
      <ShowHint hintText="Use the provided coupon code to get a discount!" />
      <div className="cart-center">
        <div className="shopping-cart">
          <div className="info-bar">
            Coupon Code: <strong>{couponCode}</strong>
          </div>

          <div className="container-shopping-cart">
            <div className="product-list">
              {products.map((product, index) => (
                <div key={index} className="product">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price} units</span>
                  <button
                    className="add-btn"
                    onClick={() => addToCart(product.price)}
                  >
                    Add Product
                  </button>
                </div>
              ))}
            </div>

            <div className="coupon-section">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={userCoupon}
                onChange={(e) => setUserCoupon(e.target.value)}
                className="coupon-input"
              />
              <button className="apply-btn" onClick={applyDiscount}>
                Apply Discount
              </button>
              <button className="clear-btn" onClick={clearDiscount}>
                Clear Discount
              </button>
            </div>

            <div className="discount-info">
              {discount > 0 && (
                <p className="discount">Discount: {discount} units</p>
              )}
              <p className="total">Total: {total} units</p>
            </div>

            <button className="reset-btn" onClick={resetCart}>
              Reset Cart
            </button>

            {message && <div className="message-box">{message}</div>}
          </div>
        </div>
      </div>
    </>
  );
}
