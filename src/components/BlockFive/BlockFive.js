import React from 'react';
import classes from './Block.module.css';
import {H1} from "../H1/H1";

export const Block = ({title, postTitle, value, image}) => {
    return (
        <div className={classes.main}>
            <div className={classes.text}>
                <H1 className={classes.title}>{title}</H1>
                <p className={classes.postTitle}>{postTitle}</p>
                <p>{value}</p>
            </div>
            <div>
                <img className={classes.image} src={image} alt="imageOne"/>
            </div>
        </div>
    )
}