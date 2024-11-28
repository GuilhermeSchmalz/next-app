import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <section className={styles.socialMedia}>
      <h2 className={styles.sectionTitle}>Siga-nos nas Redes Sociais</h2>
      <div className={styles.socialIcons}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <Image src="/facebook-icon.png" alt="Facebook" width={40} height={40} priority />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Image src="/instagram-icon.png" alt="Instagram" width={40} height={40} priority />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <Image src="/twitter-icon.png" alt="Twitter" width={40} height={40} priority />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Image src="/linkedin-icon.png" alt="LinkedIn" width={40} height={40} priority />
        </a>
      </div>
    </section>
  );
}
