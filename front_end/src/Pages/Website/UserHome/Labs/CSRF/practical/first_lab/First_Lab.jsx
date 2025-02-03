import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import ChangeEmailForm from "./ChangeEmailForm";
import ExploitServer from "./ExploitServer";

const CSRF_Lab = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
    alert(`Email changed successfully to ${newEmail}`);
  };

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">CSRF Vulnerability Lab</h2>
      <Row>
        <Col md={6}>
          <Card className="p-3">
            <CardBody>
              <h4>Change Email (Vulnerable)</h4>
              <ChangeEmailForm onSubmit={handleEmailChange} />
            </CardBody>
          </Card>
        </Col>
        <Col md={6}>
          <ExploitServer />
        </Col>
      </Row>
    </Container>
  );
};

export default CSRF_Lab;
