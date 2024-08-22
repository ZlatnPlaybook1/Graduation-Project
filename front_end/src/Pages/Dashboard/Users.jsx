import React, { useEffect, useState } from "react";
import { baseUrl, USERS } from "../../Api/Api";
import axios from "axios";
import Cookie from "cookie-universal";
import Table from "react-bootstrap/Table";
import "./dashboard.css";

export default function Users() {
  const [userData, setUserData] = useState([]);
  const cookie = Cookie();
  const token = cookie.get("CuberWeb");
  useEffect(() => {
    axios
      .get(`${baseUrl}/${USERS}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => setUserData(response.data))
      .catch((err) => console.log(err));
  }, [token]);

  return (
    <div className="table-container">
      <h2 className="table-title">User List</h2>
      <Table responsive="sm" className="modern-table">
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
