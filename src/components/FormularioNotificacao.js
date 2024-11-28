import React, { useState } from 'react';

export default function FormularioNotificacao({ onNovaNotificacao }) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [recorrencia, setRecorrencia] = useState('única');

  const handleSubmit = (e) => {
    e.preventDefault();
    const novaNotificacao = {
      id: Date.now(),
      titulo,
      descricao,
      data,
      recorrencia,
    };
    onNovaNotificacao(novaNotificacao);
    setTitulo('');
    setDescricao('');
    setData('');
    setRecorrencia('única');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Nova Notificação</h3>
      <label>
        Título:
        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
      </label>
      <br />
      <label>
        Descrição:
        <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
      </label>
      <br />
      <label>
        Data:
        <input type="date" value={data} onChange={(e) => setData(e.target.value)} required />
      </label>
      <br />
      <label>
        Recorrência:
        <select value={recorrencia} onChange={(e) => setRecorrencia(e.target.value)}>
          <option value="única">Única</option>
          <option value="mensal">Mensal</option>
        </select>
      </label>
      <br />
      <button type="submit">Adicionar Notificação</button>
    </form>
  );
}
