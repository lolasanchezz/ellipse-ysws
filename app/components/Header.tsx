"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "./Header.module.css";

const TreeFractal = dynamic(() => import("./TreeFractal"), { ssr: false });
const Spiral = dynamic(() => import("./Spiral"), { ssr: false });

export default function Header() {
  return (
   
      <header className={styles.header}>
        <div className={styles.corner + " " + styles.cornerLeft}>
          <Spiral width={1800} />
        </div>

        <div className={styles.center}>
          <Image
            src="/hackClub.png"
            alt="Hack Club"
            width={60}
            height={60}
            className={styles.logo}
          />
          <p className={styles.sponsored}>made by lola @ hack club</p>
          <p className={styles.sponsored}>ends 7/6/26 at 9am</p>
          <h1 className={styles.title}>ellipse</h1>
          <p className={styles.subtitle}>make art with math and code</p>
        </div>

        <div className={styles.corner + " " + styles.cornerRight}>
          <TreeFractal />
        </div>
        <div className={styles.desc}>
          <Image
            src="/flowers.png"
            alt="swirl"
            width={150}
            height={150}
            className={styles.swirl}
          />
          <p>make a piece of procedural art, <br></br>earn a prize for the time spent</p>
          <Image
            src="/flowers.png"
            alt="swirl"
            width={150}
            height={150}
            className={styles.swirl2}
          />
        </div>
      </header>
   
  );
}
