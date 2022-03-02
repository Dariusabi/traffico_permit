import React, { Fragment } from 'react';

import classes from './Footer.module.css';
import arrow from '../../images/arrow.png';
import f_mask from '../../images/f_mask.png';
import vector1 from '../../images/vector1.png';
import f_trek from '../../images/f_trek.png';
import vector2 from '../../images/vector2.png';
import logo from '../../images/logo.png';
import facebook from '../../images/facebook.png';
import twitter from '../../images/twitter.png';
import insta from '../../images/insta.png';

const Footer = () => {
    return (
        <Fragment>
            {/* <img src={vector1} alt="vector1" className={classes.vector1} /> */}
            <div className={classes.footer}>
                <img src={f_trek} alt="f_trek" className={classes.f_trek} />
                {/* <img src={vector2} alt="vector2" className={classes.vector2} /> */}
                <div className={classes.form}>
                    <div className={classes.provide}>
                        <p>We provide traffic management consultants so you get started quickly, contact us for a quote today!</p>
                    </div>

                    <div className={classes.contact}>
                        <br />
                        <label htmlFor="name">Name</label>
                        <input className={classes.name} placeholder="Hendrik Larsson" />
                        <br />
                        <label htmlFor="email">Email address</label>
                        <input className={classes.email} placeholder="Your email address" />
                        <button className={classes.f_started}>
                            <p>get started</p>
                            <img src={arrow} alt="arrow" className={classes.arrow} />
                        </button>
                    </div>
                </div>
                {/* <img src={f_mask} alt="f_mask" className={classes.f_mask} /> */}

                <div className={classes.f_menu}>
                    <img src={logo} alt="logo" className={classes.f_logo} />
                    <ul>
                        <li>about</li>
                        <li>how to</li>
                        <li>faq</li>
                    </ul>
                </div>
            </div>
            <div className={classes.f_line}>
                <p className={classes.copyright}>Copyright @ 2019</p>
                <div className={classes.social}>
                    <img src={facebook} alt="facebook" className={classes.facebook} />
                    <img src={twitter} alt="twitter" className={classes.twitter} />
                    <img src={insta} alt="insta" className={classes.insta} />
                </div>
            </div>
        </Fragment>
    )
};

export default Footer;