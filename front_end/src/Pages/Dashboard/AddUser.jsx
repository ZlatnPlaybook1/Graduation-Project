import Axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { baseUrl, USER } from "../../Api/Api";
import Loading from "../../Components/Loading/Loading";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  // Handle Submit
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await Axios.post(`${baseUrl}/${USER}/add`, {
        name: name,
        email: email,
        password: password,
        role: role,
      });
      navigate("/dashboard/users");
    } catch (error) {
      setLoading(false);
      console.error("Error submitting form:", error);
    }
  }

  return (
    <div className="container my-5">
      {loading && <Loading />}
      <Form
        className="bg-light p-4 border rounded shadow-sm"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-4">Edit User</h2>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name..."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password..."
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Role</Form.Label>
          <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
            <option disabled value="">
              Select Role
            </option>
            <option value="1900">Admin</option>
            <option value="2003">User</option>
            <option value="2005">writer</option>
          </Form.Select>
        </Form.Group>
        <Button
          disabled={
            name.length > 1 &&
            email.length > 1 &&
            password.length > 1 &&
            role !== ""
              ? false
              : true
          }
          type="submit"
          className="btn btn-primary"
        >
          Save
        </Button>
      </Form>
    </div>
  );
}
