import React from './Board.module.css'
import classes from './Board.module.css'

export const Board = ({children, img}) => {
    return(
        <div className={classes.container} style={{backgroundImage: `url(${img})`}}>
            {children}
        </div>
    )
}