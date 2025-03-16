import React from 'react'
import styles from "./Textinput.module.css";


const TextInput = ({...props}) => {
    return (
        <>
        <input className={styles.input} type="text"  placeholder={props.placeholder}/>
        </>
  )
}

export default TextInput;