'use client'

import { useRouter } from "next/navigation"
import styles from "./gallery.module.css"
import Entry from "./components/Entry"
import { GALLERY } from "./data"

export default function Gallery() {
  const router = useRouter()
  return (
    <div className={styles.cont}>
      <p className={styles.back} onClick={() => router.push("/")}>
        back
      </p>
      <div className={styles.head}>
        <h1 className={styles.heading}>gallery</h1>
        <p className={styles.sub}>procedural art made by ellipse participants.</p>
      </div>
      {GALLERY.map((entry, i) => (
        <Entry
          key={entry.github}
          entry={entry}
          index={i + 1}
          reverse={i % 2 === 1}
        />
      ))}
    </div>
  )
}
