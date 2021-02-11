import React from 'react';
import classes from './Contacts.module.css'
import {H1} from "../H1/H1";
import {Input} from "../../templates/Input/Input";
import {Button} from "../Button/Button";

export const Contacts = () => {
    return (
        <div className={classes.main}>
            <div className={classes.text}>
                <H1>CONTACT</H1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a,
                    tempor magna.</p>
            </div>
            <div className={classes.inputs}>
                <Input placeHolder={'Name'} width={400}/>
                <Input placeHolder={'Email'} width={400}/>
                <Input placeHolder={'Phone'} width={400}/>
                <input className={classes.textArea} placeholder={'Message'}/>
                <div className={classes.tools}>
                    <ul className={classes.ulInfo}>
                        <li className={classes.list}><strong>5th London Boulevard, U.K.</strong></li>
                        <li className={classes.list}><strong>+40 729 131 637/+40 726 458 782</strong></li>
                        <li className={classes.list}><strong>office@mindblister.com</strong></li>
                    </ul>
                    <Button value={'SEND MESSAGE'} width={450} margin={0}/>
                </div>
            </div>
        </div>
    )
}