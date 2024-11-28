import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <div className={styles.text}>
          <h1 className={styles.title}>Bem-vindo ao Organiza Seu Portal Completo de Gestão Financeira Pessoal</h1>
          <p>
            Imagine ter todas as suas finanças organizadas e acessíveis em um único lugar. Com o Organiza você pode facilmente acompanhar suas receitas, controlar suas despesas e monitorar seus investimentos. Nosso objetivo é ajudar você a alcançar a tranquilidade financeira, oferecendo uma plataforma intuitiva e poderosa para gerenciar seu dinheiro.
          </p>
          <button className={styles.checkButton} aria-label="Confira">Confira</button>
        </div>
        <div className={styles.image}>
          <Image src="/banner.png" alt="Banner Organiza" width={600} height={400} layout="responsive" priority />
        </div>
      </div>
      <section className={styles.aboutUs}>
        <h2 className={styles.sectionTitle}>Quem somos?</h2>
        <div className={styles.columns}>
          <div className={styles.column}>
            <p>
              Somos um time de apaixonados por finanças e tecnologia. Combinamos nossa expertise em gestão financeira para criar uma plataforma que realmente faz a diferença na vida de nossos usuários. Estamos sempre prontos para ouvir suas necessidades e trabalhar continuamente para melhorar a sua experiência.
            </p>
          </div>
          <div className={styles.column}>
            <p>
              No Organiza, nossa missão é empoderar pessoas para que alcancem a liberdade financeira. Acreditamos que o conhecimento e o controle sobre suas finanças são as chaves para uma vida mais tranquila e realizada. Por isso, criamos uma plataforma simples, segura e eficiente para ajudar você a gerenciar suas receitas, despesas e investimentos com facilidade.
            </p>
          </div>
          <div className={styles.column}>
            <p>
              Seja você alguém que está começando a organizar suas finanças ou um investidor experiente, estamos aqui para ajudar. Junte-se a nós e faça parte de uma comunidade que valoriza o conhecimento, a segurança e o controle financeiro.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
