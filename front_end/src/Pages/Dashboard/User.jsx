import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { USER } from "../../Api/Api";
import Loading from "../../Components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { Axios } from "../../Api/axios";
export default function User() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [disable, setDisable] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // id
  const id = Number(window.location.pathname.replace("/dashboard/users/", ""));
  useEffect(() => {
    setLoading(true);
    Axios.get(`/${USER}/${id}`)
      .then((data) => {
        setName(data.data.name);
        setEmail(data.data.email);
        setRole(data.data.role);
        setLoading(false);
      })
      .then(() => setDisable(false))
      .catch(() => navigate("/dasboard/users/page/404", { replace: true }));
  }, []);

  // Handle Submit
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await Axios.post(`${USER}/edit/${id}`, {
        name: name,
        email: email,
        role: role,
      });
      window.location.pathname = "/dashboard/users";
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
            {/* <option value="2003">User</option> */}
            <option value="writer">writer</option>
          </Form.Select>
        </Form.Group>
        <Button disabled={disable} type="submit" className="btn btn-primary">
          Save
        </Button>
      </Form>
    </div>
  );
}
