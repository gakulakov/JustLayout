import React from 'react';
import classes from './BlockFive.module.css';
import {H1} from "../H1/H1";

export const BlockFive = ({title}) => {
    const arr = ['soupe', 'pizza', 'pasta', 'desert', 'wine', 'beer', 'drinks']

    const menuArr = [
        {name: 'PIZZA QUATRO STAGIONI . . . . 55,68 USD', info: 'Integer ullamcorper neque eu purus euismod'},
        {name: 'PIZZA QUATRO STAGIONI . . . . 55,68 USD', info: 'Integer ullamcorper neque eu purus euismod'},
        {name: 'PIZZA QUATRO STAGIONI . . . . 55,68 USD', info: 'Integer ullamcorper neque eu purus euismod'},
        {name: 'PIZZA QUATRO STAGIONI . . . . 55,68 USD', info: 'Integer ullamcorper neque eu purus euismod'},
        {name: 'PIZZA QUATRO STAGIONI . . . . 55,68 USD', info: 'Integer ullamcorper neque eu purus euismod'},
        {name: 'PIZZA QUATRO STAGIONI . . . . 55,68 USD', info: 'Integer ullamcorper neque eu purus euismod'},
        {name: 'PIZZA QUATRO STAGIONI . . . . 55,68 USD', info: 'Integer ullamcorper neque eu purus euismod'},
        {name: 'PIZZA QUATRO STAGIONI . . . . 55,68 USD', info: 'Integer ullamcorper neque eu purus euismod'},
        {name: 'PIZZA QUATRO STAGIONI . . . . 55,68 USD', info: 'Integer ullamcorper neque eu purus euismod'},
        {name: 'PIZZA QUATRO STAGIONI . . . . 55,68 USD', info: 'Integer ullamcorper neque eu purus euismod'},
        {name: 'PIZZA QUATRO STAGIONI . . . . 55,68 USD', info: 'Integer ullamcorper neque eu purus euismod'},
        {name: 'PIZZA QUATRO STAGIONI . . . . 55,68 USD', info: 'Integer ullamcorper neque eu purus euismod'},
        {name: 'PIZZA QUATRO STAGIONI . . . . 55,68 USD', info: 'Integer ullamcorper neque eu purus euismod'},
        {name: 'PIZZA QUATRO STAGIONI . . . . 55,68 USD', info: 'Integer ullamcorper neque eu purus euismod'},
        {name: 'PIZZA QUATRO STAGIONI . . . . 55,68 USD', info: 'Integer ullamcorper neque eu purus euismod'},
        {name: 'PIZZA QUATRO STAGIONI . . . . 55,68 USD', info: 'Integer ullamcorper neque eu purus euismod'},
        {name: 'PIZZA QUATRO STAGIONI . . . . 55,68 USD', info: 'Integer ullamcorper neque eu purus euismod'},
        {name: 'PIZZA QUATRO STAGIONI . . . . 55,68 USD', info: 'Integer ullamcorper neque eu purus euismod'},
        {name: 'PIZZA QUATRO STAGIONI . . . . 55,68 USD', info: 'Integer ullamcorper neque eu purus euismod'},
        {name: 'PIZZA QUATRO STAGIONI . . . . 55,68 USD', info: 'Integer ullamcorper neque eu purus euismod'},
        {name: 'PIZZA QUATRO STAGIONI . . . . 55,68 USD', info: 'Integer ullamcorper neque eu purus euismod'},
    ]

    const menuListGenerate = arr.map((i, index) => <li key={index}>{i.toUpperCase()}</li>)

    const menuGenerate = menuArr.map((i, index) => {
        return(
        <div key={index} className={classes.menuList}>
            <p>{i.name}</p>
            <p>{i.info}</p>
        </div>
        )
    })

    return (
        <div className={classes.main}>
            <div className={classes.textContainer}>
                <H1>{title}</H1>
                <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est
                    a, tempor magna.</strong></p>
                <ul className={classes.menuContainer}>
                    {menuListGenerate}
                </ul>
            </div>
            <div className={classes.menu}>
                {menuGenerate}
            </div>

        </div>
    )
}