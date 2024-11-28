import React from "react";
import { Card, Table } from "react-bootstrap";
import Grafico from "./grafico/Grafico";

const expensesData = [
  { category: "Alimentação", amount: 250 },
  { category: "Transporte", amount: 100 },
  { category: "Moradia", amount: 500 },
  { category: "Lazer", amount: 150 },
  { category: "Outros", amount: 200 },
];

const ExpensesPage = () => {
  return (
    <Card className="mt-4">
      <Card.Header>Resumo de Despesas</Card.Header>
      <Card.Body>
        {/* Gráfico de Despesas */}
        <Grafico title="Despesas" data={expensesData} />

        {/* Tabela de Despesas */}
        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th>Categoria</th>
              <th>Valor (R$)</th>
            </tr>
          </thead>
          <tbody>
            {expensesData.map((expense, index) => (
              <tr key={index}>
                <td>{expense.category}</td>
                <td>{expense.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default ExpensesPage;
