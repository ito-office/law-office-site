import Logo from "../Logo/Logo";
import Icon from "../Icon/Icon";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={`container ${styles.grid}`}>
        {/* ロゴ・事務所情報 */}
        <div className={styles.info}>
          <Logo />

          <p>
            〒650-0001
            <br />
            兵庫県神戸市中央区加納町4丁目○-○
            <br />
            神戸みらいビル 5階
          </p>

          <div className={styles.phone}>
            <strong>
                <Icon name="phone" size={18} />
                078-123-4567
            </strong>

            <span>受付時間：平日 9:00〜18:00</span>
            </div>
        </div>

        {/* ページ上部へ */}
        <a
          href="#top"
          className={styles.top}
          aria-label="ページ上部へ"
        >
          <Icon name="up" size={22} />
          <span>TOP</span>
        </a>
      </div>

      <p className={styles.copy}>
        © 2026 Kobe Mirai Law Office. All Rights Reserved.
      </p>
    </footer>
  );
}