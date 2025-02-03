import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const ChangeEmailForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="p-3 border rounded shadow-sm bg-light"
    >
      <FormGroup>
        <Label for="email">New Email Address</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Enter new email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </FormGroup>
      <Button color="primary" type="submit" block>
        Change Email
      </Button>
    </Form>
  );
};

export default ChangeEmailForm;
