import styles from "./everything.module.css"
import {useState} from 'react'
export default function WhatToMake() {
    const [showing, setShowing] = useState(false)
    return (
        <div className = {styles.main}>
            <h1 className = {styles.button} onClick = {() => setShowing(!showing)}> {showing?  "⌄": ">"} what can i make?</h1>
            {showing?
        <div className = {styles.dropdown}>
        <h3>anything that is procedurally generated and visually interesting!</h3>
        <p>this can vary from a purely mathematical fractal to dancing shapes. as long as it's fun, interesting, and generated with
            some sort of set of rules (ie - the shapes move to the left every 2 seconds), it counts!
        </p>
    
        </div>
        : <></>}
         </div>
    )
}