import React from "react";
import "../Lab_Style.css";
import { Link } from "react-router-dom";
import ProductList from "../../../../ProductList/ProductList";
import GoBack_Btn from "../../../../GoBack_Btn/GoBack_Btn";
import products from "../data.json";
import ShowHint_Btn from "../../../../ShowHint_Btn/ShowHint_Btn";
import Go2TopBtn from "../../../../Go2Top_Btn/Go2Top_Btn";

export default function Third_Lab() {
  const hintMessage = `
  <ul style="text-align: left; font-size: 16px; line-height: 1.8;">
    <li>1.
      Browse to <code>/admin </code> and observe that you can't access the admin panel.
    </li>
    \n
    <li>2.
      Browse to the login page.
    </li>
    \n
    <li>3.
      In Burp Proxy, turn interception on and enable response interception.
    </li>
    \n
    <li>4.
      Complete and submit the login page, and forward the resulting request in Burp.
    </li>
    \n
    <li>5.
      Observe that the response sets the cookie <code>Admin=false</code>. Change it to <code>Admin=true</code>.
    </li>
    \n
    <li>6.
      Load the admin panel and delete <code>carlos</code>.
    </li>
  </ul>
`;

  return (
    <>
      <GoBack_Btn />
      <ShowHint_Btn hintText={hintMessage} />
      <div className="container">
        <h2 className="lab-header">Products</h2>
        <Link to={`/AC-Vuln/AC_Vuln_labs/third_lab/login`}>Login</Link>
        <ProductList products={products} />
        <Go2TopBtn />
      </div>
    </>
  );
}
