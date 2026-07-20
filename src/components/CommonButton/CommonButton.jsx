import Icon from '../Icon/Icon';
import styles from './CommonButton.module.css';

export default function CommonButton({ href = '#contact', children, variant = 'navy', icon = 'mail', className = '' }) {
  return <a className={`${styles.button} ${styles[variant]} ${className}`} href={href}><Icon name={icon} size={20}/><span>{children}</span><Icon name="arrow" size={18}/></a>;
}
