import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ContactForm from "../../components/ContactForm/ContactForm";

import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <>
      <Header />

      <main>

        {/* ページタイトル */}
        <section className={styles.pageHero}>
          <div className="container">

            <p className={styles.enTitle}>
              CONTACT
            </p>

            <h1>お問い合わせ</h1>

            <p className={styles.description}>
              法律に関するご相談やご不明な点など、
              お気軽にお問い合わせください。
              内容を確認後、担当者よりご連絡いたします。
            </p>

          </div>
        </section>

        {/* フォーム */}
        <section className={styles.formSection}>
          <div className="container">
            <ContactForm />
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}