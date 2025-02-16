import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "../dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookie from "cookie-universal";
import "./Users.css";
export default function Users() {
  const [userData, setUserData] = useState([]);
  const [deleteUser, setDeleteUser] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [NoUsers, setNoUsers] = useState(false);
  const cookie = Cookie();
  const token = cookie.get("CuberWeb");
  useEffect(() => {
    const fetchUserData = async () => {
      if (token) {
        try {
          const res = await axios.get("http://127.0.0.1:8080/api/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setCurrentUser(res.data.data);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchUserData();
  }, [token]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8080/api/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUserData(res.data.data);
        setNoUsers(res.data.data.length === 0);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [deleteUser, token]);

  // Mapping on users
  const userShow = userData.map((user, key) => (
    <tr key={user.id}>
      <td>{key + 1}</td>
      <td>
        {user.role === "admin"
          ? `${user.name} (Admin)`
          : user.name === currentUser?.name
          ? `${user.name} (You)`
          : user.name}
      </td>
      <td>{user.email}</td>
      <td>{user.role === "admin" ? "Admin" : "Writer"}</td>
      <td>
        <div className="d-flex align-items-center gap-2">
          <Link to={`/dashboard/user/edit/${user.id}`}>
            <FontAwesomeIcon fontSize={"19px"} icon={faPenToSquare} />
          </Link>
          {currentUser?.name !== user.name && (
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
        await axios.delete(`http://127.0.0.1:8080/api/user/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
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
              <td colSpan={5} className="text-center">
                Loading...
              </td>
            </tr>
          ) : NoUsers ? (
            <tr>
              <td colSpan={5} className="text-center">
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
