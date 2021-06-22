import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link className="steps">1 Iniciar sesion</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>1 Iniciar sesion</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/shipping">
            <Nav.Link className="steps">2 Envio</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>2 Envio</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/payment">
            <Nav.Link className="steps">3 Pago</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>3 Pago</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to="/placeorder">
            <Nav.Link className="steps">4 Pedido</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>4 Pedido</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
