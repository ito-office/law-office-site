import Icon from '../Icon/Icon';
import styles from './ReasonCard.module.css';
export default function ReasonCard({reason}){return <article className={styles.card}><div className={styles.icon}><Icon name={reason.icon} size={48}/></div><div className={styles.content}><span>{reason.number}</span><h3>{reason.title}</h3><p>{reason.text}</p></div></article>}
