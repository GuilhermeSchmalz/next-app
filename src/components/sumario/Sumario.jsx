import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Receitas from "../components/Receitas";
import Despesas from "../components/Despesas";

const Sumario = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Resumo Financeiro</h1>
      <Row>
        {/* Coluna de Receitas */}
        <Col md={6}>
          <Receitas />
        </Col>

        {/* Coluna de Despesas */}
        <Col md={6}>
          <Despesas />
        </Col>
      </Row>
    </Container>
  );
};

export default Sumario;
