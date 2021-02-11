import React from 'react';
import classes from './Gallery.module.css'

export const Gallery = () => {
    const styles = {
        width: `${100 / 4}%`
    }

    return(
        <div className={classes.main}>
            <img src={'../../assets/Rectangle.png'} alt="" style={styles}/>
            <img src={'../../assets/Rectangle2.png'} alt="" style={styles}/>
            <img src={'../../assets/Rectangle3.png'} alt="" style={styles}/>
            <img src={'../../assets/Rectangle4.png'} alt="" style={styles}/>
        </div>
    )
}