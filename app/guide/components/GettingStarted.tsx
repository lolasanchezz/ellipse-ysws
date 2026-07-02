import styles from "./everything.module.css"
import {useState} from 'react'
export default function GettingStarted() {
    const [showing, setShowing] = useState(false)
    return (
        <div className = {styles.main}>
            <h1 className = {styles.button} onClick = {() => setShowing(!showing)}> {showing?  "⌄": ">" } getting started</h1>
            {showing?
        <div className = {styles.dropdown}>
        <h2>first: set up hackatime!!</h2>
        <p>go to</p>
        <a href = {"https://hackatime.hackclub.com/"}>hackatime,.</a>
        <p>set up your account, and verify that you're tracking time on your cool awesome project.</p>
        
        <p>then come up with something to make! you can use web dev {"("}html, css, and js with the HTML canvas{")"}, python with pythonturtle,
            or anything else that allows you to make graphics.
        </p>
        <p>get to coding!!</p>
        
        </div>
        : <></>}
         </div>
    )
}