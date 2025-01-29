import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./PathTraversalBlacklist.css";
import GOBack from "../../../GoBack_Btn/GoBack_Btn";
import ShowHint from "../../../ShowHint_Btn/ShowHint_Btn";

export default function PathTraversalBlacklist() {
  const hintMessage = `<p>Add Something</p>`;
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8080/api/pathTraversalLab1Products")
      .then((response) => {
        if (response.data.message === "products found") {
          setProducts(response.data.data);
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      <GOBack />
      <ShowHint hintText={hintMessage} />
      <div className="unique-container">
        <h2 className="unique-title">Products</h2>
        <div className="unique-row">
          {products.map((product) => (
            <div key={product.id} className="unique-col">
              <div className="unique-card">
                <img
                  src={`http://127.0.0.1:8080/${product.path}`}
                  alt={product.name}
                  className="unique-card-img"
                  onClick={() =>
                    navigate(
                      `/Path__Traversal/Path_Traversal_Labs/lab1/Show_Products/${product.id}`
                    )
                  }
                  style={{ cursor: "pointer" }}
                />
                <div className="unique-card-body">
                  <h5 className="unique-card-title">{product.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
