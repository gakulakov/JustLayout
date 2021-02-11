import React from 'react';
import classes from './Button.module.css'

export const Button = ({value, width, margin}) => {

    return(
        <div className={classes.button} style={{width: width, margin: margin}} >
            <p>{value}</p>
        </div>
    )
}