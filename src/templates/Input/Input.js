import React from 'react'
import classes from  './Input.module.css'

export const Input = ({placeHolder, width}) => {
    return(
        <input type="text" className={classes.main} placeholder={placeHolder} style={{width: width}} />
    )
}