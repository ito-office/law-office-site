import { consultations } from '../../data/siteData';
import Icon from '../Icon/Icon';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './ConsultationCategories.module.css';

export default function ConsultationCategories(){return <section className={styles.section} aria-labelledby="consult-title"><div className="container"><SectionTitle eyebrow="このようなお悩みはありませんか？" title="よくあるご相談内容"/><div className={styles.grid}>{consultations.map(item=><article className={styles.card} key={item.title}><Icon name={item.icon} size={50}/><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>}
