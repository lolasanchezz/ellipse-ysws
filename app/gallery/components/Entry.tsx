import Image from "next/image"
import styles from "./Entry.module.css"
import type { GalleryEntry } from "../data"

export default function Entry({
  entry,
  index,
  reverse,
}: {
  entry: GalleryEntry
  index: number
  reverse?: boolean
}) {
  return (
    <div className={`${styles.entry} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.visual}>
        <span className={styles.index}>{String(index).padStart(2, "0")}</span>
        <Image
          src={entry.image}
          alt={entry.name}
          fill
          className={styles.image}
          sizes="(max-width: 800px) 100vw, 50vw"
        />
      </div>
      <div className={styles.info}>
        <h2 className={styles.name}>{entry.name}</h2>
        <p className={styles.handle}>@{entry.github}</p>
        <p className={styles.description}>{entry.description}</p>
        <div className={styles.links}>
          <a
            className={styles.link}
            href={entry.playableUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            view project
          </a>
          <a
            className={styles.link}
            href={entry.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            view code
          </a>
        </div>
      </div>
    </div>
  )
}
