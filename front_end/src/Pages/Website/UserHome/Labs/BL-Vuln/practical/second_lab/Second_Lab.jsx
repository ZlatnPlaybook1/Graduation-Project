import React from "react";
import "../Lab_Style.css";
import GoBack_Btn from "../../../../GoBack_Btn/GoBack_Btn";
import ShowHint_Btn from "../../../../ShowHint_Btn/ShowHint_Btn";
import Go2TopBtn from "../../../../Go2Top_Btn/Go2Top_Btn";

export default function Second_Lab() {
  const hintMessage = `
  <ul style="text-align: left; font-size: 16px; line-height: 1.8;">
    <li>1.
      With Burp running, log in and attempt to buy the leather jacket. The 
order is rejected because you don't have enough store credit. 
    </li>
    \n
    <li>2.
      In Burp, go to "Proxy" > "HTTP history" and study the order process. 
Notice that when you add an item to your cart, the corresponding 
request contains a <code>price</code> parameter. Send the <code>POST /cart </code> request to 
Burp Repeater.
    </li>
    \n
    <li>3.
      In Burp Repeater, change the price to an arbitrary integer and send the 
request. Refresh the cart and confirm that the price has changed based 
on your input.
    </li>
    \n
    <li>4.
       Repeat this process to set the price to any amount less than your 
available store credit.
    </li>
    \n
    <li>5.
     Complete the order to solve the lab.
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
