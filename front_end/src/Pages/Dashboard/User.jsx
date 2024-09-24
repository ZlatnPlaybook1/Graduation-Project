import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import Loading from "../../Components/Loading/Loading";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function User() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [disable, setDisable] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://127.0.0.1:8000/api/currentUser/${id}`)
      .then((response) => {
        setName(response.data.data.name);
        setEmail(response.data.data.email);
        setRole(response.data.data.role);
        setLoading(false);
        setDisable(false);
      })
      .catch(() => {
        setLoading(false);
        navigate("/dashboard/users/page/404", { replace: true });
      });
  }, [id, navigate]);

  // Handle Submit
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(`http://127.0.0.1:8000/api/user/edit/${id}`, {
        name: name,
        email: email,
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

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Role</Form.Label>
          <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
            <option disabled value="">
              Select Role
            </option>
            <option value="admin">Admin</option>
            <option value="writer">Writer</option>
          </Form.Select>
        </Form.Group>

        <Button disabled={disable} type="submit" className="btn btn-primary">
          Save
        </Button>
      </Form>
    </div>
  );
}
