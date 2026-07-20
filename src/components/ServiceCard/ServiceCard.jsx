import Icon from '../Icon/Icon';
import styles from './ServiceCard.module.css';
export default function ServiceCard({service}){return <article className={styles.card}><div className={styles.imageWrap}><img src={service.image} alt=""/><span><Icon name={service.icon} size={24}/></span></div><div className={styles.body}><h3>{service.title}</h3><p>{service.text}</p><a href="#contact">詳しく見る <Icon name="arrow" size={17}/></a></div></article>}
