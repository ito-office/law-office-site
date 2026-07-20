import { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';
import Icon from '../Icon/Icon';

import styles from './Header.module.css';

const nav = [
  ['ホーム', '/#top'],
  ['サービス', '/#services'],
  ['選ばれる理由', '/#reasons'],
  ['よくあるご質問', '/#faq'],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link
          to="/"
          onClick={close}
          aria-label="ホームへ戻る"
          className={styles.logoLink}
        >
          <Logo />
        </Link>

        <nav
          className={`${styles.nav} ${open ? styles.open : ''}`}
          aria-label="メインナビゲーション"
        >
          {nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={close}
            >
              {label}
            </a>
          ))}

          <Link
            to="/about"
            onClick={close}
          >
            事務所案内
          </Link>

          <Link
            to="/contact"
            className={styles.contact}
            onClick={close}
          >
            <Icon name="mail" size={18} />
            無料相談のお問い合わせ
          </Link>
        </nav>

        <button
          type="button"
          className={styles.menuButton}
          aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <Icon
            name={open ? 'close' : 'menu'}
            size={28}
          />
        </button>
      </div>
    </header>
  );
}