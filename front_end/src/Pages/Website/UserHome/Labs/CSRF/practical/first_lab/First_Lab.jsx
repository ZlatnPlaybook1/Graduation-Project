import React from "react";
import "./First_Lab.css";
import ProductList from "../../../../ProductList/ProductList";
import GoBack_Btn from "../../../../GoBack_Btn/GoBack_Btn";
import products from "./data.json";
import ShowHint_Btn from "../../../../ShowHint_Btn/ShowHint_Btn";
import Go2TopBtn from "../../../../Go2Top_Btn/Go2Top_Btn";
export default function First_Lab() {
  const hintMessage = "Put you Hint Message Here";
  return (
    <>
      <GoBack_Btn />
      <ShowHint_Btn hintText={hintMessage} />
      <div className="container">
        <h1 className="lab1-header">Products</h1>

        <ProductList products={products} />
        <Go2TopBtn />
      </div>
    </>
  );
}
