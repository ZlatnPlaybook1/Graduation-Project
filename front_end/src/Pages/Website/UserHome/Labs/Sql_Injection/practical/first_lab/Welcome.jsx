import React from "react";
import welcome from "../../../../assets/img/welcome.png";
import GoBackBtn from "../../../../Components/GoBack_Btn/GoBack_Btn";
export default function Welcome() {
  return (
    <>
      <GoBackBtn />
      <div class="container">
        <div class="row">
          <h1>Welcome To Our Page</h1>
          <img src={welcome} alt="" />
        </div>
      </div>
    </>
  );
}
