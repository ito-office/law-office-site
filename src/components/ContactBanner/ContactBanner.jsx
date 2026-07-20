import CommonButton from '../CommonButton/CommonButton';
import Icon from '../Icon/Icon';
import styles from './ContactBanner.module.css';

export default function ContactBanner() {
  return (
    <section className={styles.section} id="contact">
      <div className={`container ${styles.inner}`}>
        <div className={styles.photo}>
          <img
            src="/images/staff-pc.png"
            alt="相談を受け付ける女性スタッフ"
          />
        </div>

        <div className={styles.copy}>
          <h2>まずは、お気軽にご相談ください</h2>

          <p>
            あなたのお悩みに、経験豊富な弁護士が丁寧にお応えします。
          </p>

          <div className={styles.phone}>
            <span>お電話でのお問い合わせ</span>

            <strong>
              <Icon name="phone" size={24} />
              078-123-4567
            </strong>

            <small>受付時間：平日 9:00-18:00</small>
          </div>
        </div>


          <CommonButton
            href="/contact"
            variant="gold"
            className={styles.button}
          >
            無料相談のお問い合わせ
          </CommonButton>
        
      </div>
    </section>
  );
}