import { services } from '../../data/siteData';
import SectionTitle from '../SectionTitle/SectionTitle';
import ServiceCard from '../ServiceCard/ServiceCard';
import styles from './Services.module.css';
export default function Services(){return <section className={styles.section} id="services"><div className="container"><SectionTitle eyebrow="幅広い分野に対応" title="主な取扱業務"/><div className={styles.grid}>{services.map(s=><ServiceCard service={s} key={s.title}/>)}</div></div></section>}
