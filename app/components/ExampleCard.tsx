import styles from './ExampleCard.module.css'
import Image from 'next/image'
export default function ExampleCard({
  title,
  language,
  difficulty,
  image,
  link,
  description,
  align = 'left'
}: {
  title: string
  language: string
  difficulty: string
  image: string
  link: string
  description: string
  align?: 'left' | 'center' | 'right'
}) {
  return (
    <div className={styles.item}>
    <a href={link} className={styles.cardLink}>
    <div className={styles.card}>


      <div className={styles.row}>
        <div className={styles.label}>title</div>
        <div className={styles.value}>{title}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.label}>language</div>
        <div className={styles.value}>{language}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.label}>difficulty</div>
        <div className={styles.value}>{difficulty}</div>
      </div>
    <div className={styles.visual}>
      <Image
      className={styles.image}
      src={image}
      height={320}
      width={480}
      alt={title}
      />
    </div>
    </div>
    </a>
    <p className={styles.description} style={{ textAlign: align }}>{description}</p>
    </div>
  )
}
