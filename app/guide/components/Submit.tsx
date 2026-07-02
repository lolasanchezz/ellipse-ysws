import styles from "./everything.module.css"
import {useState} from 'react'
export default function Submit() {
    const [showing, setShowing] = useState(false)
    return (
        <div className = {styles.main}>
            <h1 className = {styles.button} onClick = {() => setShowing(!showing)}> {showing?  "⌄": ">" } submitting</h1>
            {showing?
        <div className = {styles.dropdown}>
        <h2>ready to submit?</h2>
        <h3>you should have all of the below done:</h3>
        <p>- a hackatime tracked project.</p>
        <p>- a way for anyone to view your awesome art - see more in-depth shipping guidelines</p>
        <a href = {"https://hackclub.gitbook.io/ysws-project-submission-guidelines/BLBRN8LIfoCZhFV6oMNR/required-submission-fields"}>here.</a>
        <p>generally, you should have a url where anyone can experience your finished project.</p>
        <p>- a screenshot of your art for the gallery!</p>
        <p>- a readme that talks about your project.</p>
                <a href={"google.com"}>click here to submit</a>

        </div>
        : <></>}
         </div>
    )
}