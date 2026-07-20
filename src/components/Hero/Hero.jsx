import CommonButton from '../CommonButton/CommonButton';
import Icon from '../Icon/Icon';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div
        className={styles.photo}
        role="img"
        aria-label="神戸の港と街並み"
      ></div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <h1>
            あなたの悩みに、
            <br />
            寄り添う法律相談を。
          </h1>

          <p className={styles.lead}>
            相続・離婚・交通事故・労働問題など、
            <br />
            幅広いご相談に経験豊富な弁護士が対応いたします。
          </p>

          <div className={styles.metrics}>
            <div>
              <Icon name="people" size={35} />

              <span>
                <small>相談実績</small>
                <strong>8,000件以上</strong>
              </span>
            </div>

            <div>
              <span className={styles.yen}>¥</span>

              <span>
                <small>初回相談</small>
                <strong>60分 無料</strong>
              </span>
            </div>
          </div>

          <div className={styles.actions}>
            <CommonButton>
              無料で相談してみる
            </CommonButton>

            <div className={styles.phone}>
              <Icon name="phone" size={30} />

              <span>
                <small>お電話でのお問い合わせ</small>
                <strong>078-123-4567</strong>
                <em>受付時間：平日 9:00-18:00</em>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}