import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Loading from "../../../Components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // Handle Submit
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await axios.post("http://127.0.0.1:8080/api/user/add", {
        name: name,
        email: email,
        password: password,
        role: role,
      });
      navigate("/dashboard/users");
    } catch (error) {
      setLoading(false);
      setError("Error submitting the form. Please try again.");
      console.error("Error submitting form:", error);
    }
  }

  return (
    <div className="container my-5">
      {loading && <Loading />}
      {error && <Alert variant="danger">{error}</Alert>}
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
            <option value="admin">Admin</option>
            <option value="writer">writer</option>
          </Form.Select>
        </Form.Group>
        <Button
          disabled={
            name.length > 1 &&
            email.length > 1 &&
            password.length > 4 &&
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
