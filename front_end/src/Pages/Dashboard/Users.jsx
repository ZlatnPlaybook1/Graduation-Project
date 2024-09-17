import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl, USER, USERS } from "../../Api/Api";
import Table from "react-bootstrap/Table";
import "./dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Users() {
  const [userData, setUserData] = useState([]);
  const [deleteUser, setDeleteUser] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [NoUsers, setNoUsers] = useState(false);
  // Get Current User
  useEffect(() => {
    axios.get(`${USER}`).then((res) => setCurrentUser(res.data));
  }, []);

  // Get All Users
  useEffect(() => {
    axios
      .get(`${baseUrl}/${USERS}`)
      .then((response) => setUserData(response.data))
      .then(() => setNoUsers(true))
      .catch((err) => console.log(err));
  }, [deleteUser]);

  // Mapping on users
  const userShow = userData.map((user, key) => (
    <tr key={user.id}>
      <td>{key + 1}</td>
      <td>
        {user.name === currentUser.name ? user.name + "(You)" : user.name}
      </td>
      <td>{user.email}</td>
      <td>{user.role === "admin" ? "Admin" : "Writer"}</td>
      <td>
        <div className="d-flex align-items-center gap-2">
          <Link to={`/user/${user.id}`}>
            <FontAwesomeIcon fontSize={"19px"} icon={faPenToSquare} />
          </Link>
          {currentUser.name !==
            user.name(
              <FontAwesomeIcon
                onClick={() => handleDelete(user.id)}
                fontSize={"19px"}
                color="red"
                cursor={"pointer"}
                icon={faTrash}
              />
            )}
        </div>
      </td>
    </tr>
  ));
  // Handle Delete
  async function handleDelete(id) {
    if (currentUser.id !== id) {
      try {
        await axios.delete(`${USER}/${id}`);
        setDeleteUser((prev) => !prev);
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <div className="table-container">
      <h2 className="table-title">User List</h2>
      <div className="d-flex justify-content-start">
        <Link className="btn btn-primary" to={"/dashboard/user/add"}>
          Add User
        </Link>
      </div>
      <Table responsive="sm" className="modern-table">
        <thead>
          <tr>
            <th>id</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.length === 0 ? (
            <tr>
              <td colSpan={12} className="text-center">
                Loading...
              </td>
            </tr>
          ) : userData.length === 0 && NoUsers ? (
            <tr>
              <td colSpan={12} className="text-center">
                No Users Found
              </td>
            </tr>
          ) : (
            userShow
          )}
        </tbody>
      </Table>
    </div>
  );
}
