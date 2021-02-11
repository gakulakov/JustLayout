import React from 'react';
import classes from './Central.module.css';
import {Button} from "../../Button/Button";

export const Central = () => {

    return (
        <div className={classes.main}>
            <div className={classes.containerLogo}>
                <div className={classes.logo}>
                    <img src='../../../assets/facebook.png' alt="facebook"/>
                </div>
                <div className={classes.logo}>
                    <img src='../../../assets/twitter.png' alt="facebook"/>
                </div>
                <div className={classes.logo}>
                    <img src='../../../assets/instagram.png' alt="facebook"/>
                </div>
            </div>
            <div className={classes.title}>
                <p className={classes.restaurant}>RESTAURANT</p>
                <p className={classes.restaurantName}>HUNGRY PEOPLE</p>
                <div className={classes.buttonContainer}>
                    <Button value={'BOOK TABLE'}/>
                    <Button value={'EXPLORE'}/>
                </div>
                <div className={classes.vector}>
                    <img src="../../../assets/vector.png" alt="vector"/>
                </div>
            </div>
            <div className={classes.date}>
                <p>Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM</p>
            </div>
        </div>
    )
}