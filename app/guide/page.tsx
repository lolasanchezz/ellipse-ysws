'use client'
import Submit from "./components/Submit"
import WhatToMake from "./components/WhatToMake"
import GettingStarted from "./components/GettingStarted"
import styles from "./guide.module.css"
import { useRouter } from "next/navigation"
export default function Guide() {
    const router = useRouter()
    return (
        <div className={styles.cont}>
            <p className = {styles.back} onClick = {()=> {router.push("/")}}>back</p>
        <GettingStarted/>
              <WhatToMake/>
        <Submit/>
      
        </div>
    )
}