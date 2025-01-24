import React from "react";
import GoBackBtn from "../../../../GoBack_Btn/GoBack_Btn";
import ShowHintBtn from "../../../../ShowHint_Btn/ShowHint_Btn";
import Go2TopBtn from "../../../../Go2Top_Btn/Go2Top_Btn";

export default function Second_Lab() {
  const hintMessage = `
    <ul style="text-align: left; font-size: 16px; line-height: 1.8;">
      <li>1.
        
      </li>
      \n
      <li>2. 
       
      </li>\n
      <li>3.
        
      </li>
    </ul>
  `;

  return (
    <>
      <GoBackBtn />
      <ShowHintBtn hintText={hintMessage} />
      <div className="container">
        <h1 style={{ textAlign: "center", marginBlock: "50px" }}>
          Hello Lab 1
        </h1>

        <Go2TopBtn />
      </div>
    </>
  );
}
