import "./Our_Store.css";
import GoBackBtn from "../../../../GoBack_Btn/GoBack_Btn";
import ShowHintBtn from "../../../../ShowHint_Btn/ShowHint_Btn";
import "./In_Store.css";
import image_1 from "../../../../assets/img/SQL_2nd_Lab/image_1.png";
import image_2 from "../../../../assets/img/SQL_2nd_Lab/image_2.png";
import image_3 from "../../../../assets/img/SQL_2nd_Lab/image_3.png";
import image_4 from "../../../../assets/img/SQL_2nd_Lab/image_4.png";
export default function Our_Store() {
  const hintMessage = `
    <ul style="text-align: left; font-size: 16px; line-height: 1.8;">
      <li>1. Use Burp Suite to intercept and modify the request that sets the product category filter.
      </li>
      \n
      <li>2. 
     Modify the <mark><code>category </code></mark> parameter, giving it the value <mark><code>'+OR+1=1--</code></mark>
      </li>\n
      <li>3. Submit the request, and verify that the response now contains one or more unreleased products.
      </li>
    </ul>
  `;
  return (
    <>
      <div className="container">
        <GoBackBtn />
        <ShowHintBtn hintText={hintMessage} />
        <div className="course-In_Store ">
          <div className="container-In_Store ">
            <h1 style={{ textAlign: "center" }}>Featured Products</h1>
            <div className="row-practice">
              <div className="card-In_Store ">
                <div className="functions">
                  <i className="fa-solid fa-cart-plus"></i>
                  <i className="fa-regular fa-heart"></i>
                </div>
                <img src={image_1} alt="" />
                <div className="card-text-In_Store ">
                  <h4>T-Shirt</h4>
                  <p className="price">$29.9</p>
                </div>
              </div>
              <div className="card-In_Store ">
                <div className="functions">
                  <i className="fa-solid fa-cart-plus"></i>
                  <i className="fa-regular fa-heart"></i>
                </div>
                <img src={image_2} alt="" />
                <div className="card-text-In_Store ">
                  <h4>T-Shirt</h4>
                  <p className="price">$29.9</p>
                </div>
              </div>
              <div className="card-In_Store ">
                <div className="functions">
                  <i className="fa-solid fa-cart-plus"></i>
                  <i className="fa-regular fa-heart"></i>
                </div>
                <img src={image_3} alt="" />
                <div className="card-text-In_Store ">
                  <h4>T-Shirt</h4>
                  <p className="price">$29.9</p>
                </div>
              </div>
              <div className="card-In_Store ">
                <div className="functions">
                  <i className="fa-solid fa-cart-plus"></i>
                  <i className="fa-regular fa-heart"></i>
                </div>
                <img src={image_4} alt="" />
                <div className="card-text-In_Store ">
                  <h4>T-Shirt</h4>
                  <p className="price">$29.9</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
