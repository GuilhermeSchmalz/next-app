import '../styles/globals.css';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;

/*import '../styles/globals.css';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  return (
    <>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link href="/">Home</Link> |{' '}
        <Link href="/notificacoes">Notificações</Link> |{' '}
        <Link href="/notificacoes/configuracoes">Configurações</Link>
      </nav>
      <Component {...pageProps} />
    </>
  );
} */
