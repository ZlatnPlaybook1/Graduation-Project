import "./Show_prices.css";
import { useState } from "react";
import axios from "axios";
import GoBackBtn from "../../../../GoBack_Btn/GoBack_Btn";
import ShowHintBtn from "../../../../ShowHint_Btn/ShowHint_Btn";
export default function Show_prices() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  axios
    .post("http://127.0.0.1:8080/api/Show_Prices")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      setLoading(false);
      if (error.response) {
        setErr(error.response.data);
        console.error(error.response.data);
      } else {
        setErr("Network Error");
        console.error(error);
      }
    });
  const hintMessage = `
    <ul style="text-align: left; font-size: 16px; line-height: 1.8;">
      <li>1.
 Use Burp Suite to intercept and modify the request that sets the product category filter.
      </li>\n
      <li>2.
Modify the <mark><code>category</code></mark> parameter, giving it the value <mark><code>'+UNION+SELECT+NULL--.</code></mark> Observe that an error occurs.
</li>\n


      <li>3.
Modify the <mark><code>category</code></mark> parameter to add an additional column containing a null value:\n
      <mark><code> '+UNION+SELECT+NULL,NULL--.</code></mark>
</li>\n
      <li>4.
Continue adding null values until the error disappears and the response includes additional content containing the null values.
</li>\n
      <li>5.
      <mark><code> '+union+select+null,+null,+null--.</code></mark>
</li>\n
    </ul>
    


  `;
  return (
    <>
      <GoBackBtn />
      <ShowHintBtn hintText={hintMessage} />
      {/* Start Courses  */}
      <div className="course-Show_prices ">
        <div className="container-Show_prices ">
          <h1 style={{ textAlign: "center", marginBlock: "15px" }}>
            Prices In Our Site
          </h1>
          <div className="row-practice">
            <div className="card-Show_prices ">
              <h4>Robot Home Security Buddy</h4>
              <p>$92.70</p>
            </div>
            <div className="card-Show_prices ">
              <h4>All-in-one Typewriter</h4>
              <p>$33.61</p>
            </div>
            <div className="card-Show_prices ">
              <h4>Photobomb Backdrops</h4>
              <p>$46.21</p>
            </div>
            <div className="card-Show_prices ">
              <h4>Grow Your Own Spy Kit</h4>
              <p>$19.26</p>
            </div>
          </div>
        </div>
      </div>
      {/* End Course Content  */}
    </>
  );
}
