import { useState } from 'react';
import { faqs } from '../../data/siteData';
import Icon from '../Icon/Icon';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './FAQ.module.css';
export default function FAQ(){const [open,setOpen]=useState([]);const toggle=i=>setOpen(v=>v.includes(i)?v.filter(x=>x!==i):[...v,i]);return <section className={styles.section} id="faq"><div className="container"><SectionTitle title="よくあるご質問"/><div className={styles.grid}>{faqs.map((item,i)=><div className={styles.item} key={item.q}><button type="button" aria-expanded={open.includes(i)} onClick={()=>toggle(i)}><strong>Q</strong><span>{item.q}</span><Icon name="chevron" size={18} className={open.includes(i)?styles.rotate:''}/></button>{open.includes(i)&&<div className={styles.answer}><strong>A</strong><p>{item.a}</p></div>}</div>)}</div></div></section>}
