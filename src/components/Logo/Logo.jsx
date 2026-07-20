import styles from './Logo.module.css';

export default function Logo({ light = false }) {
  return (
    <a href="#top" className={`${styles.logo} ${light ? styles.light : ''}`} aria-label="神戸みらい法律事務所 トップへ">
      <span className={styles.mark} aria-hidden="true">
        <span className={styles.scale}>⚖</span>
      </span>
      <span>
        <strong>神戸みらい法律事務所</strong>
        <small>KOBE MIRAI LAW OFFICE</small>
      </span>
    </a>
  );
}
