'use client'

import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from './Header.module.css'

const TreeFractal = dynamic(() => import('./TreeFractal'), { ssr: false })
const Spiral = dynamic(() => import('./Spiral'), { ssr: false })

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.corner + ' ' + styles.cornerLeft}>
        <Spiral width={1200}/>
      </div>

      <div className={styles.center}>
        <Image
          src="/hackClub.png"
          alt="Hack Club"
          width={72}
          height={72}
          className={styles.logo}
        />
        <p className={styles.sponsored}>sponsored by lola @ hack club</p>
        <h1 className={styles.title}>ellipse</h1>
        <p className={styles.subtitle}>art with math and code</p>
      </div>

      <div className={styles.corner + ' ' + styles.cornerRight}>
        <TreeFractal />
      </div>
    </header>
  )
}
