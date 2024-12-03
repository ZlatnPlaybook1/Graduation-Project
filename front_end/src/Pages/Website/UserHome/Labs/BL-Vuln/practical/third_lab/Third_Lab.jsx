import React from "react";
import "../Lab_Style.css";
import GoBack_Btn from "../../../../GoBack_Btn/GoBack_Btn";
import ShowHint_Btn from "../../../../ShowHint_Btn/ShowHint_Btn";
import Go2TopBtn from "../../../../Go2Top_Btn/Go2Top_Btn";

export default function Third_Lab() {
  const hintMessage = `
  <ul style="text-align: left; font-size: 16px; line-height: 1.8;">
    <li>1.
       With Burp running, log in and add a cheap item to your cart. 
    </li>
    \n
    <li>2.
      In Burp, go to "Proxy" > "HTTP history" and study the corresponding 
HTTP messages. Notice that the quantity is determined by a parameter 
in the <code> POST /cart </code>request. 
    </li>
    \n
    <li>3.
      Go to the "Intercept" tab and turn on interception. Add another item to 
your cart and go to the intercepted <code> POST /cart </code>request in Burp. 
    </li>
    \n
    <li>4.
       Change the <code>quantity</code> parameter to an arbitrary integer, then forward 
any remaining requests. Observe that the quantity in the cart was 
successfully updated based on your input.
    </li>
    \n
    <li>5.
     Repeat this process, but request a negative quantity this time. Check 
that this is successfully deducted from the cart quantity.
</li>
    \n
    <li>6.
    Request a suitable negative quantity to remove more units from the cart 
than it currently contains. Confirm that you have successfully forced the 
cart to contain a negative quantity of the product. Go to your cart and 
notice that the total price is now also a negative amount.
</li>
  </ul>
`;

  return (
    <>
      <GoBack_Btn />
      <ShowHint_Btn hintText={hintMessage} />
      <div className="container">
        <h2 className="lab-header">Second Lab</h2>
        <Go2TopBtn />
      </div>
    </>
  );
}
