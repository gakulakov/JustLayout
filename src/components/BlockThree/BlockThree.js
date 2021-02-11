import React from 'react';
import classes from './BlockThree.module.css';
import {H1} from "../H1/H1";
import {Input} from "../../templates/Input/Input";

export const BlockThree = ({title, postTitle, value, image}) => {
    return (
        <div>
            <div className={classes.main}>
                <div className={classes.text}>
                    <H1 className={classes.title}>BOOK A TABLE</H1>
                    <div className={classes.allInputs}>
                        <div className={classes.groupInputs}>
                            <Input placeHolder={'Name'}/>
                            <Input placeHolder={'Phone'}/>
                            <Input placeHolder={'Date(mm/dd)'}/>
                        </div>
                        <div className={classes.groupInputs}>
                            <Input placeHolder={'Email'}/>
                            <Input placeHolder={'People'}/>
                            <Input placeHolder={'Time'}/>
                        </div>
                    </div>
                </div>
                <div>
                    <img className={classes.image} src={image} alt="imageOne"/>
                </div>
            </div>
            <p className={classes.workingHours}>Mon - Fri: <strong>8PM - 10PM</strong>, Sat - Sun: <strong>8PM -
                3AM</strong>, Phone: <strong>+40 729 131 637/+40 726 458 782</strong></p>
        </div>
    )
}