import React from "react";
import { Card, Table } from "react-bootstrap";
import Grafico from "./grafico/Grafico";

const revenuesData = [
  { category: "Salário", amount: 3000 },
  { category: "Freelance", amount: 800 },
  { category: "Investimentos", amount: 400 },
  { category: "Aluguéis", amount: 600 },
  { category: "Outros", amount: 200 },
];

const RevenuesPage = () => {
  return (
    <Card className="mt-4">
      <Card.Header>Resumo de Receitas</Card.Header>
      <Card.Body>
        {/* Gráfico de Receitas */}
        <Grafico title="Receitas" data={revenuesData} />

        {/* Tabela de Receitas */}
        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th>Categoria</th>
              <th>Valor (R$)</th>
            </tr>
          </thead>
          <tbody>
            {revenuesData.map((revenue, index) => (
              <tr key={index}>
                <td>{revenue.category}</td>
                <td>{revenue.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default RevenuesPage;
