import classes from './App.css';
import React from 'react'
import {InnerMainInfo} from "./components/MainInfo/InnerMainInfo/InnerMainInfo";
import {Block} from "./components/Block/Block";
import {BlockTwo} from "./components/BlockTwo/BlockTwo";
import {BlockThree} from "./components/BlockThree/BlockThree";
import {BlockFour} from "./components/BlockFour/BlockFour";
import {BlockFive} from "./components/BlockFive/BlockFive";
import {BlockSix} from "./components/BlockSix/BlockSix";
import {Gallery} from "./components/Gallery/Gallery";
import {Contacts} from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

function App() {
    console.log(window)
    return (
            <div className={classes.App}>
        <SimpleBar forceVisible="y" autoHide={false} style={{maxHeight: window.innerHeight}}>
                <InnerMainInfo/>
                <Block
                    title={'About Us'}
                    postTitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a,\n' +
                    '                    tempor magna.'}
                    value={'Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula.\n' +
                    '                    Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem.\n' +
                    '                    Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.'}
                    image={'./assets/imageOne.png'}
                />
                <BlockTwo image={'./assets/imageTwo.png'}/>
                <BlockThree image={'./assets/imageThree.png'}/>
                <BlockFour image={'./assets/imageFour.png'}/>
                <BlockFive title={'DELICIOUS MENU'}/>
                <BlockSix image={'./assets/imageFive.png'} imageTwo={'./assets/imageSix.png'}/>
                <Gallery/>
                <Contacts/>
                <Footer/>
        </SimpleBar>
            </div>
    );
}

export default App;
