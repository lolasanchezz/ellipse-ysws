'use client'

import Globe from "./Globe"
import styles from "./Footer.module.css"
import { useRouter } from "next/navigation"
export default function Footer() {
    const router = useRouter();
    return (
        <div className={styles.footer}>
            <Globe size={100}/>
            <div className = {styles.text}>
                <h1>ready to get started?</h1>
                <p onClick = {() => {router.push('/guide')}}>check out the guide and submission here</p>
            </div>
            <Globe size={100}/>
        </div>
    )
}