import React, { useState } from 'react';

import classes from './Header.module.css';
import logo from '../../images/logo.png';
import mobel from '../../images/mobel.png';
import union from '../../images/Union.png';
import Burger from '../Burger/Burger';
import Menu from '../Menu/Menu';

const Header = () => {

    return (
        <div className={classes.header}>
            <div className={classes.navbar}>
                <img src={logo} alt="logo" className={classes.logo} />
                <Menu />
                <Burger />
            </div>
            <p className={classes.title}>
                Your awesome traffic permit consultant.
            </p>
            <div className={classes.get_started}>
                <span>
                    get started
                </span>
                <img src={union} alt="union" className={classes.union} />
            </div>
            <img src={mobel} alt="mobel" className={classes.mobel} />
        </div>
    )
};

export default Header;