import React from 'react'
import classes from './InnerMainInfo.module.css'
import Header from "../Header/Header";
import {Central} from "../Central/Central";

export const InnerMainInfo = () => {

    return(
        <div className={classes.main}>
            <Header />
            <Central />
        </div>
    )
}