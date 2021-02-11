import React from 'react'
import classes from './H1.module.css'

export const H1 = ({children}) => {
    return(
        <p className={classes.h1}>
            {children}
        </p>
    )
}