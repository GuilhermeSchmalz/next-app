import { useState } from 'react';
import styles from './ConfiguracaoNotificacoes.module.css';

export default function ConfiguracaoNotificacoes() {
  const [formData, setFormData] = useState({
    tipo: '',
    data: '',
    recorrencia: 'Mensal',
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [notificacoes, setNotificacoes] = useState([]);

  // Função para lidar com a mudança de campo
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Função para adicionar uma nova notificação
  const handleAddNotification = async (e) => {
    e.preventDefault();

    // Validações
    if (!formData.tipo || !formData.data) {
      setStatusMessage('Por favor, preencha todos os campos!');
      return;
    }

    const dataAtual = new Date();
    const dataNotificacao = new Date(formData.data);

    if (dataNotificacao <= dataAtual) {
      setStatusMessage('A data deve ser no futuro!');
      return;
    }

    setLoading(true);
    setStatusMessage('');

    try {
      // Simulação de integração com o backend (substitua com seu backend real)
      // Aqui adicionamos a notificação à lista de notificações.
      setNotificacoes((prevState) => [
        ...prevState,
        { ...formData, id: Date.now() },
      ]);

      setStatusMessage('Notificação configurada com sucesso!');
      setFormData({ tipo: '', data: '', recorrencia: 'Mensal' }); // Limpa o formulário após sucesso
    } catch (error) {
      setStatusMessage('Erro ao configurar a notificação!');
    } finally {
      setLoading(false);
    }
  };

  // Função para remover uma notificação
  const handleRemoveNotification = (id) => {
    setNotificacoes(notificacoes.filter((notificacao) => notificacao.id !== id));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Configuração de Notificação</h1>

      {/* Formulário para criar/editar notificação */}
      <form onSubmit={handleAddNotification} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="tipo">Tipo de Notificação</label>
          <select
            id="tipo"
            name="tipo"
            value={formData.tipo}
            onChange={handleInputChange}
            required
          >
            <option value="">Selecione o tipo</option>
            <option value="Pagamento de Conta">Pagamento de Conta</option>
            <option value="Retirada de Investimento">Retirada de Investimento</option>
            <option value="Vencimento de Fatura">Vencimento de Fatura</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="data">Data da Notificação</label>
          <input
            type="date"
            id="data"
            name="data"
            value={formData.data}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="recorrencia">Recorrência</label>
          <select
            id="recorrencia"
            name="recorrencia"
            value={formData.recorrencia}
            onChange={handleInputChange}
          >
            <option value="Mensal">Mensal</option>
            <option value="Semanal">Semanal</option>
            <option value="Diária">Diária</option>
          </select>
        </div>
        <button type="submit" className={styles.submitButton} disabled={loading}>
          {loading ? 'Enviando...' : 'Adicionar Notificação'}
        </button>
      </form>

      {/* Feedback de Status */}
      {statusMessage && (
        <div className={styles.feedbackMessage}>
          {statusMessage}
        </div>
      )}

      {/* Exibição de Notificações Existentes */}
      <h2 className={styles.subtitle}>Notificações Configuradas</h2>
      <ul className={styles.notificationList}>
        {notificacoes.map((notificacao) => (
          <li key={notificacao.id} className={styles.notificationItem}>
            <p>{`${notificacao.tipo} - ${notificacao.data} (${notificacao.recorrencia})`}</p>
            <button
              onClick={() => handleRemoveNotification(notificacao.id)}
              className={styles.removeButton}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
