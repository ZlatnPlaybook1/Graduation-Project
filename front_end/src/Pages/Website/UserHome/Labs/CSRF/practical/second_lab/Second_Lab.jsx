import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const CSRFLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8080/api/getAllUsers"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = users.find((user) => user.authority === username);
      if (user) {
        const response = await axios.post(
          "http://127.0.0.1:8080/api/CSRFLab2",
          {
            username: user.authority,
            validPass: user.password,
            enteredPass: password,
          }
        );
        if (response.data.success) {
          Swal.fire({
            icon: "success",
            title: "Login Successful! & Lab finished",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Login Failed!",
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "User not found!",
        });
      }
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <div>
      <h2>CSRF Lab Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CSRFLogin;
