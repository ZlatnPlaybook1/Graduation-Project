import React, { useState, useEffect } from "react";
import GoBackBtn from "../../../../Components/GoBack_Btn/GoBack_Btn";
import ShowHintBtn from "../../../../Components/ShowHint_Btn/ShowHint_Btn";
import "../../SSRF_Labs.css";
import axios from "axios";

export default function SSRF_AdminLab() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const createUsers = async () => {
      try {
        const usernames = ["Alice", "Bob", "Charlie", "David", "Eve"];
        const response = await axios.post(
          "http://127.0.0.1:8080/api/create-users",
          {
            usernames,
          }
        );
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error creating users:", error);
      }
    };
    createUsers();
  }, []);

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://127.0.0.1:8080/api/delete-user/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="container">
      <GoBackBtn />
      <ShowHintBtn hintText="This lab demonstrates SSRF vulnerabilities." />

      <h1 style={{ textAlign: "center", marginBottom: 20 }}>User Management</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <button
              onClick={() => deleteUser(user.id)}
              style={{
                marginLeft: "10px",
                backgroundColor: "red",
                color: "white",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
