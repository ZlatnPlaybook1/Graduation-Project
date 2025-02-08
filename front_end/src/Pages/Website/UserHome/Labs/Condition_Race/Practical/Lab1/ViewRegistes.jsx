import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ViewRegisters.css";

export default function ViewRegisters() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8080/api/RaceConditionViewRegister"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Function to handle deletion of a register
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8080/api/RaceConditionDeleteRegister/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete register");
      }
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting register:", error);
    }
  };

  // Function to handle the back button
  const handleBack = () => {
    navigate("/Race_Condition/Race_Condition_Labs/Lab1");
  };

  return (
    <div className="view-registers-container">
      <h1 className="view-registers-title">Registered Users</h1>
      <button className="view-registers-back-button" onClick={handleBack}>
        Back
      </button>
      <table className="view-registers-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Tel</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.surname}</td>
              <td>{item.email}</td>
              <td>{item.tel}</td>
              <td>
                <button
                  className="view-registers-delete-button"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
