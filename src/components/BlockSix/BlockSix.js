import React from 'react';
import classes from './BlockSix.module.css'
import {H1} from "../H1/H1";
import {Board} from "../Board/Board";
import img from '../../assets/backgrounTwo.png'


export const BlockSix = ({image, imageTwo}) => {
    return (
        <Board img={'../../assets/backgrounTwo.png'}>
            <div className={classes.blockName}>
                <p>PRIVATE EVENTS</p>
            </div>
            <div className={classes.main}>
                <div>
                    <img className={classes.image} src={image} alt="imageOne"/>
                </div>
                <div className={classes.text}>
                <H1>EVENTS EXCLUSIVE FOR YOU</H1>
                <p>Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices
                    ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem
                    quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper
                    laoreet.</p>
                </div>
                <div>
                    <img className={classes.image} src={imageTwo} alt="imageOne"/>
                </div>
            </div>
            <p className={classes.info}>For private events please call: <strong>+40 729 131 637/+40 726 458 782</strong> or use the contact form.</p>
        </Board>
    )
}