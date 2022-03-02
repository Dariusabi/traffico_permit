import React, { useState } from 'react';

import Menu from '../Menu/Menu';
import classes from './Burger.module.css';

const Burger = () => {

    const [burger, setBurger] = useState(false);
    const clickBurger = () => setBurger(!burger);

    return (
        <div className={classes.block} >
            <div className={classes.hamburger} onClick={clickBurger} >
                <div className={`${classes.burger} ${classes.burger1}`} ></div>
                <div className={`${classes.burger} ${classes.burger2}`} ></div>
                <div className={`${classes.burger} ${classes.burger1}`} ></div>
            </div>
            <Menu links={burger ? classes.links : ""} />
        </div>
    )
};

export default Burger;