import data from "./Data.json";
import GoBackBtn from "../../../../Components/GoBack_Btn/GoBack_Btn";
import ShowHintBtn from "../../../../Components/ShowHint_Btn/ShowHint_Btn";
export default function Show_prices() {
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
      <div className="d-flex justify-content-center align-items-center w-100 min-vh-100">
        <div
          className="container text-center py-5"
          style={{
            backgroundColor: "#f8f9fa",
            borderRadius: "10px",
            padding: "30px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1 className="mb-4 text-primary"> Add to Cart</h1>
          <table
            className="table table-bordered table-hover"
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <thead className="thead-dark">
              <tr>
                <th style={{ backgroundColor: "#007bff", color: "white" }}>
                  Product Name
                </th>
                <th style={{ backgroundColor: "#007bff", color: "white" }}>
                  Actual Price
                </th>
                <th style={{ backgroundColor: "#007bff", color: "white" }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.products.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.actual_price}</td>
                  <td>
                    <button className="btn btn-outline-success btn-sm d-flex align-items-center justify-content-center mx-auto">
                      <i className="fas fa-cart-plus me-2"></i> AddCart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* End Course Content  */}
    </>
  );
}
