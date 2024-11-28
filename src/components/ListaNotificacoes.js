import { useState, useEffect } from 'react';
import styles from './Notificacoes.module.css';

export default function Notificacoes() {
  const [notificacoes, setNotificacoes] = useState([]);
  const [filtroStatus, setFiltroStatus] = useState('Todas');
  const [novaNotificacao, setNovaNotificacao] = useState({ tipo: '', data: '', status: 'Ativa' });

  useEffect(() => {
    // Recupera notificações salvas no localStorage ao carregar a página
    const savedNotifications = JSON.parse(localStorage.getItem('notificacoes')) || [];
    setNotificacoes(savedNotifications);
  }, []);

  useEffect(() => {
    // Salva notificações no localStorage sempre que a lista de notificações mudar
    localStorage.setItem('notificacoes', JSON.stringify(notificacoes));
  }, [notificacoes]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovaNotificacao((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddNotification = () => {
    // Validação
    if (!novaNotificacao.tipo || !novaNotificacao.data) {
      alert('Todos os campos devem ser preenchidos!');
      return;
    }

    const dataAtual = new Date();
    const dataNotificacao = new Date(novaNotificacao.data);

    if (dataNotificacao < dataAtual) {
      alert('A data da notificação deve ser no futuro!');
      return;
    }

    setNotificacoes((prevState) => [
      ...prevState,
      { ...novaNotificacao, id: prevState.length + 1 },
    ]);
    setNovaNotificacao({ tipo: '', data: '', status: 'Ativa' });
  };

  const handleRemoveNotification = (id) => {
    setNotificacoes(notificacoes.filter((notificacao) => notificacao.id !== id));
  };

  const handleFiltroChange = (e) => {
    setFiltroStatus(e.target.value);
  };

  // Filtra notificações com base no status
  const notificacoesFiltradas = notificacoes.filter((notificacao) => 
    filtroStatus === 'Todas' || notificacao.status === filtroStatus
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Notificações</h1>

      {/* Filtro de Status */}
      <div className={styles.filtro}>
        <label htmlFor="filtroStatus">Filtrar por Status</label>
        <select id="filtroStatus" onChange={handleFiltroChange} value={filtroStatus}>
          <option value="Todas">Todas</option>
          <option value="Ativa">Ativas</option>
          <option value="Expirada">Expiradas</option>
        </select>
      </div>

      {/* Adicionar Nova Notificação */}
      <div className={styles.addNotification}>
        <h2>Adicionar Nova Notificação</h2>
        <div className={styles.formGroup}>
          <label htmlFor="tipo">Tipo de Notificação</label>
          <input
            type="text"
            id="tipo"
            name="tipo"
            value={novaNotificacao.tipo}
            onChange={handleInputChange}
            placeholder="Ex: Vencimento de Boleto"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="data">Data</label>
          <input
            type="date"
            id="data"
            name="data"
            value={novaNotificacao.data}
            onChange={handleInputChange}
            required
          />
        </div>
        <button className={styles.addButton} onClick={handleAddNotification}>
          Adicionar Notificação
        </button>
      </div>

      {/* Lista de Notificações */}
      <div className={styles.notificationsList}>
        <h2>Notificações</h2>
        <ul>
          {notificacoesFiltradas.map((notificacao) => (
            <li key={notificacao.id} className={styles.notificationItem}>
              <div className={styles.notificationDetails}>
                <p><strong>{notificacao.tipo}</strong></p>
                <p>Data: {notificacao.data}</p>
                <p>Status: {notificacao.status}</p>
              </div>
              <button className={styles.removeButton} onClick={() => handleRemoveNotification(notificacao.id)}>
                Remover
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
