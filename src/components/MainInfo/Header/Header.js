import React from 'react';
import classes from './Header.module.css'
import {connect} from "react-redux";

const Header = ({arr}) => {
    const generateHeader = arr.map((i, index) => <li className={classes.items} key={index}>{i.toUpperCase()}</li>)

    return(
        <div className={classes.mainContainer}>
            <ul className={classes.list}>
                {generateHeader}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        arr: state.main.headValues
    }
}

export default connect(mapStateToProps, null)(Header)