import styles from './SectionTitle.module.css';
export default function SectionTitle({eyebrow,title}){return <div className={styles.wrap}>{eyebrow&&<p>{eyebrow}</p>}<h2>{title}</h2></div>}
