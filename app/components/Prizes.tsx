import styles from './Prizes.module.css'
import Image from 'next/image'

function ReplicubeIcon() {
  return (
    <svg viewBox="0 0 100 100" width="80" height="80" aria-hidden="true">
      <polygon points="50,8 90,28 90,72 50,92 10,72 10,28" fill="none" stroke="#111" strokeWidth="2" />
      <polygon points="50,8 90,28 50,48 10,28" fill="none" stroke="#111" strokeWidth="2" />
      <line x1="50" y1="48" x2="50" y2="92" stroke="#111" strokeWidth="2" />
      <polygon points="30,32 70,32 70,44 30,44" fill="none" stroke="#d63884" strokeWidth="1.5" />
    </svg>
  )
}

function NewtonsCradleIcon() {
  const xs = [20, 38, 56, 74]
  return (
    <svg viewBox="0 0 96 90" width="90" height="80" aria-hidden="true">
      <line x1="4" y1="4" x2="92" y2="4" stroke="#111" strokeWidth="2" />
      {xs.map((x, i) => (
        <line key={x} x1={x} y1="4" x2={x} y2="58" stroke="#111" strokeWidth="1.2" />
      ))}
      {xs.map((x, i) => (
        <circle
          key={x}
          cx={x}
          cy="66"
          r="8"
          fill="none"
          stroke={i === 2 ? '#d63884' : '#111'}
          strokeWidth="2"
        />
      ))}
    </svg>
  )
}

export default function Prizes() {
  return (
    <section className={styles.prizes}>
      <h2 className={styles.heading}>prizes</h2>

      <div className={styles.content}>
        <div className={styles.box}>
          <div className={styles.option}>
            <span className={styles.hours}>1 hour</span>
            <div className={styles.icon}>
              <a href={"https://store.steampowered.com/app/3401490/Replicube/"} className={styles.iconLink}>
              <Image
              src="/replicube.png"
              width={150}
              height={150}
              alt='replicube'
              className='pixel-image'
              />
              </a>
            </div>
            <p className={styles.caption}>replicube on steam</p>
          </div>

          <div className={styles.or}>or</div>

          <div className={styles.option}>
            <span className={styles.hours}>4 hours</span>
            <div className={styles.icon}>
              <Image
              src="/newtons-cradle.png"
              width={150}
              height={150}
              alt='replicube'
              />
                        </div>
            <p className={styles.caption}>a newton&apos;s cradle</p>
          </div>
        </div>

        <div className={styles.and}>
          <span className={styles.ampersand}>&amp;</span>
          <span className={styles.andLabel}>and</span>
        </div>

        <div className={styles.gallery}>
          <p className={styles.galleryTitle}>an entry into the ellipse gallery</p>
          <p className={styles.gallerySub}>
            an online showcase of hack club artwork
            <br />
            {'<'}&apos;&apos;w&apos;&apos;{'>'}
          </p>
        </div>
      </div>
    </section>
  )
}
