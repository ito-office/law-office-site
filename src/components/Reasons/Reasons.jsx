import { reasons } from '../../data/siteData';
import ReasonCard from '../ReasonCard/ReasonCard';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './Reasons.module.css';
export default function Reasons(){return <section className={styles.section} id="reasons"><div className="container"><SectionTitle eyebrow="選ばれる理由" title="当事務所が選ばれる３つの理由"/><div className={styles.grid}>{reasons.map(r=><ReasonCard reason={r} key={r.number}/>)}</div></div></section>}
