import React from 'react';

import classes from './Menu.module.css';

const Menu = (props) => {
    return (
        <ul className={`${classes.navLinks} ${props.links}`}>
            <li>
                <a href="#">ABOUT</a>
            </li>
            <li>
                <a href="#">HOW TO</a>
            </li>
            <li>
                <a href="#">FAQS</a>
            </li>
            <li className={classes.ctn}>
                <a href="#">CONTACT US</a>
            </li>
        </ul>
    )
};

export default Menu;