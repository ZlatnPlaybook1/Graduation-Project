import GoBackBtn from "../../../../GoBack_Btn/GoBack_Btn";
import data from "../third_lab/Data.json";
export default function Finish_test() {
  return (
    <>
      <GoBackBtn />
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
          <h1 className="mb-4 text-primary">Congratulations</h1>
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
                  Hidden Price
                </th>
                <th style={{ backgroundColor: "#007bff", color: "white" }}>
                  Admin Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.products.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.actual_price}</td>
                  <td className="text-muted">{product.hidden_price}</td>
                  <td>
                    <button className="btn btn-outline-primary btn-sm">
                      Edit
                    </button>
                    <button className="btn btn-outline-danger btn-sm ms-2">
                      Delete
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
