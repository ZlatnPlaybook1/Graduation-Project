import React from "react";
import "./First_Lab.css";
import ProductList from "../../../../ProductList/ProductList";
import GoBack_Btn from "../../../../GoBack_Btn/GoBack_Btn";
import products from "./data.json";
import ShowHint_Btn from "../../../../ShowHint_Btn/ShowHint_Btn";
import Go2TopBtn from "../../../../Go2Top_Btn/Go2Top_Btn";
// import TextFileViewer from "./TextFileViewer";
export default function First_Lab() {
  const hintMessage = `
    <ul style="text-align: left; font-size: 16px; line-height: 1.8;">
      <li>1.
        Go to the lab and view <mark>robots.txt</mark> by appending
        <mark>/robots.txt</mark> to the lab URL. Notice that the 
        <mark>Disallow</mark> line discloses the path to the admin panel.
      </li>
      \n
      <li>2. 
        In the URL bar, replace <mark>/robots.txt</mark> with
        <mark>/administrator-panel</mark> to load the admin panel.
      </li>\n
      <li>3.
        Delete <mark>carlos</mark>.
      </li>
    </ul>
  `;
  return (
    <>
      <GoBack_Btn />
      <ShowHint_Btn hintText={hintMessage} />
      <div className="container">
        <h1 className="lab1-header">Products</h1>
        <a href="/AC-Vuln/AC_Vuln_labs/first_lab/administrator-panel">
          click me
        </a>
        <ProductList products={products} />
        <Go2TopBtn />
        {/* <TextFileViewer /> */}
      </div>
    </>
  );
}
