import Header from '../../components/Header/Header';
// import ContactBanner from '../../components/ContactBanner/ContactBanner';
import Footer from '../../components/Footer/Footer';

import styles from './About.module.css';

const officeInfo = [
  {
    label: '事務所名',
    value: '神戸みらい法律事務所',
  },
  {
    label: '代表弁護士',
    value: '神戸 未来',
  },
  {
    label: '所在地',
    value: (
      <>
        〒650-0001
        <br />
        兵庫県神戸市中央区加納町4丁目○-○
        <br />
        神戸みらいビル 5階
      </>
    ),
  },
  {
    label: '電話番号',
    value: '078-123-4567',
  },
  {
    label: '営業時間',
    value: '平日 9:00〜18:00',
  },
  {
    label: '取扱分野',
    value: '相続・遺言、離婚・男女問題、企業法務・労働問題',
  },
];

export default function About() {
  return (
    <>
      <Header />

      <main>
        {/* ページタイトル */}
        <section className={styles.pageHero}>
          <div className="container">
            <p className={styles.pageHeroEn}>ABOUT US</p>
            <h1>事務所案内</h1>
          </div>
        </section>

        {/* 代表挨拶 */}
        <section className={styles.greeting}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <p>MESSAGE</p>
              <h2>代表挨拶</h2>
            </div>

            <div className={styles.greetingInner}>
              <div className={styles.photo}>
                <img
                src={`${import.meta.env.BASE_URL}images/representative.png`}
                alt="神戸みらい法律事務所の代表弁護士"
                />
              </div>

              <div className={styles.message}>
                <p className={styles.lead}>
                  一人ひとりのお悩みに寄り添い、
                  <br />
                  最善の解決をともに考えます。
                </p>

                <p>
                  法律に関する問題を抱えたとき、多くの方が不安や迷いを感じます。
                  私たちは、そのような気持ちに寄り添いながら、
                  分かりやすく丁寧な説明を心がけています。
                </p>

                <p>
                  相続や離婚、企業法務など、相談内容は一人ひとり異なります。
                  まずはじっくりとお話を伺い、それぞれの状況に合った解決方法を
                  一緒に考えてまいります。
                </p>

                <p>
                  地域の皆さまにとって、いつでも安心して相談できる身近な存在で
                  あり続けることが、私たちの願いです。
                </p>

                <div className={styles.signature}>
                  <span>神戸みらい法律事務所</span>
                  <strong>代表弁護士　神戸 未来</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 事務所概要 */}
        <section className={styles.overview}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <p>OFFICE</p>
              <h2>事務所概要</h2>
            </div>

            <div className={styles.overviewCard}>
              <dl className={styles.infoList}>
                {officeInfo.map((item) => (
                  <div className={styles.infoRow} key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* アクセス */}
        <section className={styles.access}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <p>ACCESS</p>
              <h2>アクセス</h2>
            </div>

            <div className={styles.accessInner}>
              <div className={styles.map}>
                <iframe
                    className={styles.mapFrame}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.400955485459!2d135.19057266103653!3d34.69506557280877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008ee458e1e1d5%3A0xbab5324b463508e1!2z44CSNjUwLTAwMDEg5YW15bqr55yM56We5oi45biC5Lit5aSu5Yy65Yqg57SN55S677yU5LiB55uu!5e0!3m2!1sja!2sjp!4v1784536468112!5m2!1sja!2sjp"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                />
                </div>

              <div className={styles.accessText}>
                <p className={styles.accessLead}>
                  神戸三宮駅から徒歩約10分
                </p>

                <p>
                  JR・阪急・阪神・神戸市営地下鉄の各線から
                  アクセスしやすい場所にございます。
                </p>

                <div className={styles.accessBox}>
                  <span>所在地</span>
                  <strong>
                    〒650-0001
                    <br />
                    兵庫県神戸市中央区加納町4丁目○-○
                    <br />
                    神戸みらいビル 5階

                  </strong>
                </div>

                <div className={styles.accessBox}>
                  <span>最寄り駅</span>
                  <strong>各線 神戸三宮駅より徒歩約10分</strong>
                </div>

                <div className={styles.accessNote}>
                  <p>※ご来所の際は、事前にご予約をお願いいたします。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}