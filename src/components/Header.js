import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [showSettings, setShowSettings] = useState(false);

  const handleSettingsClick = () => {
    setShowSettings(!showSettings);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="Organiza Logo" width={60} height={60} priority />
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.leftButtons}>
        <button className={styles.button} aria-label="pagina inicial">Pagina inicial</button>
          <button className={styles.button} aria-label="Receitas">Receitas</button>
          <button className={styles.button} aria-label="Despesas">Despesas</button>
          <button className={styles.button} aria-label="Investimentos">Investimentos</button>
        </div>
        <div className={styles.rightButtons}>
          <button className={styles.button} aria-label="Entrar">Entrar</button>
          <button className={styles.button} aria-label="Inscrever-se">Inscrever-se</button>
          <Link href="/notificacoes">
        <button className={styles.button} aria-label="Notificações">Notificações</button>
          </Link>

          <button className={styles.button}  aria-label="Configurações" onClick={handleSettingsClick}>Configurações</button>
        </div>
      </div>
      {showSettings && (
        <div className={styles.settingsBox}>
          <Link href="/notificacoes/configuracoes">
        <button className={styles.button} aria-label="Configurações">Configurações de Notificações</button>
          </Link>
          <button className={styles.settingsButton}>Gráficos</button>
          <button className={styles.settingsButton}>Relatórios</button>
        </div>
      )}
    </header>
  );
}
